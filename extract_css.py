import os
import re

def extract_css(html_path, css_path):
    with open(html_path, 'r') as f:
        content = f.read()
    
    # Extract all content between <style> and </style>
    styles = re.findall(r'<style[^>]*>(.*?)</style>', content, re.DOTALL)
    
    with open(css_path, 'w') as f:
        for style in styles:
            f.write(style)
            f.write('\n\n')

if __name__ == "__main__":
    html_file = "/Users/sureshkumar/Downloads/PhotographyClient/lux.framer.media/index.html"
    css_output = "/Users/sureshkumar/Downloads/PhotographyClient/photography-react/src/styles/framer.css"
    extract_css(html_file, css_output)
    print(f"Extracted CSS to {css_output}")
