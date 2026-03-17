"""
PDFテキストから大問の開始ページを自動検出し、ページマッピングを生成する。
出力: data.js に組み込むためのJSONマッピング
"""

import fitz
import os
import json
import re
import glob

PDF_DIR = r"G:\マイドライブ\Text_Arch\Files\(駿台)2025年駿台実戦問題集_数学IA"
TXT_DIR = PDF_DIR  # TXTファイルも同じディレクトリ

def detect_question_pages(pdf_path):
    """PDFの各ページのテキストを解析し、大問の開始ページを検出する"""
    doc = fitz.open(pdf_path)
    question_pages = {}
    
    for page_num in range(len(doc)):
        page = doc[page_num]
        text = page.get_text()
        
        # 「第N問」のパターンを検索（配点つきの場合が大問の先頭）
        # 「第1問（配点 30）」のようなパターン
        matches = re.findall(r'第\s*(\d)\s*問\s*[（(]\s*配点', text)
        if matches:
            for m in matches:
                q_name = f"第{m}問"
                if q_name not in question_pages:
                    question_pages[q_name] = page_num + 1  # 1-indexed
    
    # 配点パターンがなかった場合、別のパターンで再検出
    if not question_pages:
        for page_num in range(len(doc)):
            page = doc[page_num]
            text = page.get_text()
            # 解答PDFの「第N問」パターン
            matches = re.findall(r'第\s*(\d)\s*問', text)
            for m in matches:
                q_name = f"第{m}問"
                if q_name not in question_pages:
                    question_pages[q_name] = page_num + 1
    
    doc.close()
    return question_pages

def find_question_page_ranges(pdf_path, question_starts, total_pages):
    """大問の開始ページからページ範囲を計算する"""
    sorted_questions = sorted(question_starts.items(), key=lambda x: x[1])
    ranges = {}
    
    for i, (q_name, start_page) in enumerate(sorted_questions):
        if i + 1 < len(sorted_questions):
            end_page = sorted_questions[i + 1][1] - 1
        else:
            end_page = total_pages
        ranges[q_name] = list(range(start_page, end_page + 1))
    
    return ranges

def process_all_pdfs():
    """全PDFを処理してマッピング情報を生成"""
    results = {}
    
    # 第1回〜第5回の問題・解答
    for round_num in range(1, 6):
        round_name = f"第{round_num}回"
        problem_pdf = os.path.join(PDF_DIR, f"{round_name}_問題.pdf")
        answer_pdf = os.path.join(PDF_DIR, f"{round_name}_解答.pdf")
        
        if os.path.exists(problem_pdf):
            doc = fitz.open(problem_pdf)
            total = len(doc)
            doc.close()
            
            q_starts = detect_question_pages(problem_pdf)
            q_ranges = find_question_page_ranges(problem_pdf, q_starts, total)
            
            print(f"\n{round_name}_問題.pdf ({total}ページ):")
            for q, pages in sorted(q_ranges.items()):
                print(f"  {q}: pages {pages}")
            
            results[f"{round_name}_問題"] = q_ranges
        
        if os.path.exists(answer_pdf):
            doc = fitz.open(answer_pdf)
            total = len(doc)
            doc.close()
            
            q_starts = detect_question_pages(answer_pdf)
            q_ranges = find_question_page_ranges(answer_pdf, q_starts, total)
            
            print(f"\n{round_name}_解答.pdf ({total}ページ):")
            for q, pages in sorted(q_ranges.items()):
                print(f"  {q}: pages {pages}")
            
            results[f"{round_name}_解答"] = q_ranges
    
    # 2024年本試験
    for name in ["2024年_本試験_問題", "2024年_本試験_解答"]:
        pdf_path = os.path.join(PDF_DIR, f"{name}.pdf")
        if os.path.exists(pdf_path):
            doc = fitz.open(pdf_path)
            total = len(doc)
            doc.close()
            
            q_starts = detect_question_pages(pdf_path)
            q_ranges = find_question_page_ranges(pdf_path, q_starts, total)
            
            print(f"\n{name}.pdf ({total}ページ):")
            for q, pages in sorted(q_ranges.items()):
                print(f"  {q}: pages {pages}")
            
            results[name] = q_ranges
    
    return results

if __name__ == "__main__":
    print("=== 大問ページマッピング自動検出 ===\n")
    results = process_all_pdfs()
    
    # JSONとして保存（data.js 生成の参考用）
    output_path = os.path.join(r"G:\マイドライブ\共通テスト数学データベース\scripts", "page_mapping.json")
    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(results, f, ensure_ascii=False, indent=2)
    print(f"\n\nページマッピングを保存: {output_path}")
