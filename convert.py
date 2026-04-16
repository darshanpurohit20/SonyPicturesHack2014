import os
import re
import glob

def style_to_dict(style_str):
    parts = style_str.split(';')
    styles = []
    for p in parts:
        if ':' not in p: continue
        k, v = p.split(':', 1)
        k = k.strip()
        v = v.strip().replace("'", "\\'")
        
        # camelCase the key
        k_parts = k.split('-')
        k_camel = k_parts[0] + ''.join(x.title() for x in k_parts[1:])
        
        styles.append(f"{k_camel}: '{v}'")
    return "{{ " + ", ".join(styles) + " }}"

def convert_to_jsx(html_str):
    # remove scripts
    html_str = re.sub(r'<script.*?>.*?</script>', '', html_str, flags=re.DOTALL)
    # Extract styles instead of just removing them to be appended later, but in the JSX we still remove:
    html_str = re.sub(r'<style.*?>.*?</style>', '', html_str, flags=re.DOTALL)
    # replace class= with className=
    html_str = html_str.replace('class="', 'className="')
    # Prevent cutoff issues by removing explicit overflow-hidden
    html_str = html_str.replace('overflow-hidden', '')
    
    # Fix excessively long animation delays from the original HTML
    html_str = html_str.replace('4s_forwards', '1s_forwards')
    
    # Remove DOWNLOAD EVIDENCE block from the sidebar
    html_str = re.sub(r'<div[^>]*>\s*<button[^>]*>\s*DOWNLOAD EVIDENCE\s*</button>\s*</div>', '', html_str, flags=re.DOTALL|re.IGNORECASE)
    
    # Push the skull visual down to avoid overlapping the tactical ticker on shorter screens
    html_str = html_str.replace('skull-breach', 'skull-breach mt-16 xl:mt-24')
    
    # Make typography and spacing strictly responsive so it fits in 100vh on laptop screens
    html_str = html_str.replace('md:text-9xl', 'md:text-[8vw] xl:text-[7vw]')
    html_str = html_str.replace('text-6xl md:text-9xl', 'text-5xl md:text-6xl xl:text-8xl')
    html_str = html_str.replace('text-5xl md:text-8xl', 'text-4xl md:text-5xl xl:text-7xl')
    html_str = html_str.replace('md:text-7xl', 'md:text-5xl xl:text-6xl')
    html_str = html_str.replace('text-[180px]', 'text-[12vh] xl:text-[180px]')
    
    # Compress vertical margins/paddings
    html_str = re.sub(r'\bmt-20\b', 'mt-10 xl:mt-20', html_str)
    html_str = re.sub(r'\bmt-16\b', 'mt-8 xl:mt-16', html_str)
    html_str = re.sub(r'\bmb-16\b', 'mb-8 xl:mb-16', html_str)
    html_str = re.sub(r'\bpt-20\b', 'pt-10 xl:pt-20', html_str)
    html_str = re.sub(r'\bpb-12\b', 'pb-6 xl:pb-12', html_str)
    html_str = re.sub(r'\bpy-5\b', 'py-3 xl:py-5', html_str)

    # replace style="..."
    def style_replacer(match):
        return 'style=' + style_to_dict(match.group(1))
    html_str = re.sub(r'style="([^"]*)"', style_replacer, html_str)
    # self-close img tags
    html_str = re.sub(r'<img(.*?)(?<!/)>', r'<img\1/>', html_str)
    # self-close br tags
    html_str = re.sub(r'<br>', r'<br/>', html_str)
    html_str = re.sub(r'<hr>', r'<hr/>', html_str)
    # replace inline comments <!-- ... --> with {/* ... */}
    html_str = re.sub(r'<!--(.*?)-->', r'{/* \1 */}', html_str, flags=re.DOTALL)
    return html_str

slides = glob.glob('original_prototypes/slide_*')

# Sort numerically
def sort_key(s):
    match = re.search(r'slide_(\d+)', s)
    return int(match.group(1)) if match else 0

slides.sort(key=sort_key)

all_css = []

for i, slide_dir in enumerate(slides):
    html_file = os.path.join(slide_dir, 'code.html')
    if not os.path.exists(html_file): continue
    
    with open(html_file, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # Extract style block if any
    style_matches = re.finditer(r'<style[^>]*>(.*?)</style>', content, re.DOTALL)
    for m in style_matches:
        all_css.append(f"/* Styles from {slide_dir} */\n" + m.group(1))

    # Extract body content
    body_match = re.search(r'<body[^>]*>(.*?)</body>', content, re.DOTALL)
    if not body_match: continue
    
    body_html = body_match.group(1)
    jsx_content = convert_to_jsx(body_html)
    
    comp_name = f"Slide{i+1}"
    out_file = os.path.join('src', 'components', 'slides', f'{comp_name}.jsx')
    
    # Custom transitions for Hack-related slides (Slide 2, Slide 5, Slide 6)
    if i + 1 in [2, 5, 6]:
        # Glitch / Hard Cut Transition
        motion_props = """
            initial={{ opacity: 0, filter: 'blur(10px)', skewX: '20deg', scale: 1.1 }}
            animate={{ opacity: 1, filter: 'blur(0px)', skewX: '0deg', scale: 1 }}
            exit={{ opacity: 0, filter: 'blur(10px)', x: -100, scale: 0.9 }}
            transition={{ duration: 0.4, type: 'spring', bounce: 0.5 }}
        """
    else:
        # Smooth Cinematic Transition
        motion_props = """
            initial={{ opacity: 0, scale: 0.98, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 1.02, x: -50 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        """
    
    jsx_code = f"""import React from 'react';\nimport {{ motion }} from 'framer-motion';\n\nexport default function {comp_name}() {{\n    return (\n        <motion.div\n{motion_props}\n            className="relative w-full min-h-screen"\n        >\n            {jsx_content}\n        </motion.div>\n    );\n}}\n"""
    
    with open(out_file, 'w', encoding='utf-8') as f:
        f.write(jsx_code)
        
    print(f"Generated {out_file}")

# We don't need to append CSS again because we already appended it in the previous step to index.css
# But to be safe, we won't rewrite index.css, just regenerate the Slide files.
print("Done regenerating slides with correct sort order and transitions.")
