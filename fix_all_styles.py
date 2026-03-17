import os

css_path = "/Users/sureshkumar/Downloads/PhotographyClient/photography-react/src/styles/framer.css"

with open(css_path, "r") as f:
    content = f.read()

# Remove specific max-widths that restrict the layout
content = content.replace("max-width:1200px", "max-width:none")
content = content.replace("max-width:1600px", "max-width:none")
content = content.replace("width:1900px", "width:100%")
content = content.replace("left:calc(50% - 950px)", "left:0")

# Fix any other fixed widths that might be problematic
content = content.replace("width:1200px", "width:100%")
content = content.replace("width:860px", "width:100%")
content = content.replace("width:395px", "width:100%")

with open(css_path, "w") as f:
    f.write(content)

print("Successfully updated framer.css to remove width restrictions.")
