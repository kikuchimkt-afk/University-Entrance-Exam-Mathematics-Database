"""
PDF画像抽出スクリプト (v2)
使い方:
  python extract_images.py --input <PDFディレクトリ> --output <出力ディレクトリ>

例:
  python extract_images.py ^
    --input "G:\マイドライブ\Text_Arch\Files\(Z会)2025年共通テスト実戦模試_数学IA" ^
    --output "G:\マイドライブ\共通テスト数学データベース\data\zkai_2025_IA\images"
"""

import fitz
import os
import argparse

def extract_images(input_dir, output_dir, dpi=300):
    os.makedirs(output_dir, exist_ok=True)
    
    pdf_files = sorted([f for f in os.listdir(input_dir) if f.lower().endswith('.pdf')])
    
    if not pdf_files:
        print(f"PDFファイルが見つかりません: {input_dir}")
        return
    
    total = 0
    for pdf_name in pdf_files:
        pdf_path = os.path.join(input_dir, pdf_name)
        base_name = os.path.splitext(pdf_name)[0]
        
        doc = fitz.open(pdf_path)
        print(f"  {pdf_name} ({len(doc)}ページ)")
        
        for page_num in range(len(doc)):
            page = doc[page_num]
            zoom = dpi / 72
            mat = fitz.Matrix(zoom, zoom)
            pix = page.get_pixmap(matrix=mat)
            
            out_name = f"{base_name}_page{page_num + 1}.png"
            out_path = os.path.join(output_dir, out_name)
            pix.save(out_path)
            total += 1
        
        doc.close()
    
    print(f"\n完了: {total}枚の画像を生成 → {output_dir}")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="PDFページを高解像度PNGに変換")
    parser.add_argument("--input", "-i", required=True, help="PDFファイルが入っているディレクトリ")
    parser.add_argument("--output", "-o", required=True, help="PNG画像の出力先ディレクトリ")
    parser.add_argument("--dpi", type=int, default=300, help="出力解像度 (default: 300)")
    
    args = parser.parse_args()
    
    print(f"=== PDF画像抽出 ===")
    print(f"入力: {args.input}")
    print(f"出力: {args.output}")
    print(f"DPI:  {args.dpi}\n")
    
    extract_images(args.input, args.output, args.dpi)
