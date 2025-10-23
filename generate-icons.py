#!/usr/bin/env python3
"""
Generate app icons for PWA and mobile platforms
Creates basic colored icons with NCE text
"""

from PIL import Image, ImageDraw, ImageFont
import os

def create_icon(size, output_path):
    """Create a simple app icon with NCE text"""
    # Create a new image with blue background
    img = Image.new('RGB', (size, size), color='#3b82f6')
    draw = ImageDraw.Draw(img)
    
    # Add white text "NCE"
    text = "NCE"
    # Try to use a simple font, fallback to default if not available
    try:
        # Adjust font size based on icon size
        font_size = int(size * 0.3)
        font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", font_size)
    except:
        font = ImageFont.load_default()
    
    # Get text bounding box
    bbox = draw.textbbox((0, 0), text, font=font)
    text_width = bbox[2] - bbox[0]
    text_height = bbox[3] - bbox[1]
    
    # Center the text
    x = (size - text_width) // 2
    y = (size - text_height) // 2
    
    # Draw text
    draw.text((x, y), text, fill='white', font=font)
    
    # Save the icon
    img.save(output_path, 'PNG')
    print(f"Created {output_path}")

# Create images directory if it doesn't exist
os.makedirs('images', exist_ok=True)

# Generate icons in various sizes
icon_sizes = [72, 96, 128, 144, 152, 192, 384, 512]

for size in icon_sizes:
    output_file = f'images/icon-{size}.png'
    create_icon(size, output_file)

print("\n✅ All icons generated successfully!")
print("\nNext steps:")
print("1. The icons are basic placeholders")
print("2. Consider creating professional icons with your brand design")
print("3. For production, use tools like Figma or Adobe XD for better icons")
