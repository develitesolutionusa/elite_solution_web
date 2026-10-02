from PIL import Image, ImageDraw, ImageFont, ImageFilter, ImageChops
from pathlib import Path

base_path = Path(
    r"C:\Users\Usman\.cursor\projects\e-elite-solution-web\assets\about-story-blank-wall.jpg"
)
logo_path = Path(
    r"C:\Users\Usman\.cursor\projects\e-elite-solution-web\assets\c__Users_Usman_AppData_Roaming_Cursor_User_workspaceStorage_2dcf19dff148c42fe98343be9e98d4fe_images_image-6b8558b2-c952-4e28-9dd7-16c51cf276b9.png"
)
out_path = Path(r"e:\elite_solution_web\public\images\about-story-hex-board.jpg")
also = Path(r"e:\elite_solution_web\public\images\about-story-board-complete.jpg")

base = Image.open(base_path).convert("RGBA")
W, H = base.size

# Cover old branding with charcoal wall
cover = Image.new("RGBA", base.size, (0, 0, 0, 0))
cd = ImageDraw.Draw(cover)
x0, y0, x1, y1 = int(W * 0.24), int(H * 0.06), int(W * 0.82), int(H * 0.46)
wall_rgb = (48, 52, 58)
for i in range(12):
    t = i / 11
    shade = tuple(max(0, int(c * (1 - 0.06 * t))) for c in wall_rgb)
    yy0 = y0 + int((y1 - y0) * (i / 12))
    yy1 = y0 + int((y1 - y0) * ((i + 1) / 12))
    cd.rectangle([x0, yy0, x1, yy1], fill=(*shade, 255))
base = Image.alpha_composite(base, cover)

# Clean logo cutout: keep bright blue/silver mark only
logo = Image.open(logo_path).convert("RGBA")
lw, lh = logo.size
pixels = logo.load()
for y in range(lh):
    for x in range(lw):
        r, g, b, a = pixels[x, y]
        # keep cyan/blue and pale silver logo segments
        is_blue = b > 140 and b > r + 20 and b > g
        is_silver = r > 150 and g > 160 and b > 180 and abs(r - g) < 40
        is_mid = (90 < b < 200) and (b >= r) and (b >= g - 10) and (r + g + b) > 220
        if is_blue or is_silver or is_mid:
            pixels[x, y] = (r, g, b, 255)
        else:
            pixels[x, y] = (0, 0, 0, 0)

# slight dilate-erode cleanup via max/min filter on alpha
alpha = logo.split()[-1]
alpha = alpha.filter(ImageFilter.MinFilter(3))
alpha = alpha.filter(ImageFilter.MaxFilter(3))
alpha = alpha.filter(ImageFilter.GaussianBlur(0.6))
logo.putalpha(alpha)

bbox = logo.getbbox()
if not bbox:
    raise SystemExit("logo cutout empty")
logo = logo.crop(bbox)

target_h = int(H * 0.175)
scale = target_h / logo.size[1]
logo = logo.resize(
    (max(1, int(logo.size[0] * scale)), target_h), Image.Resampling.LANCZOS
)

alpha = logo.split()[-1]
sh = alpha.filter(ImageFilter.GaussianBlur(5))
shadow_layer = Image.new("RGBA", logo.size, (0, 0, 0, 0))
shadow_layer.putalpha(sh.point(lambda p: int(p * 0.35)))

try:
    font_name = ImageFont.truetype("C:/Windows/Fonts/segoeuib.ttf", int(H * 0.058))
    font_tag = ImageFont.truetype("C:/Windows/Fonts/segoeuib.ttf", int(H * 0.02))
except OSError:
    font_name = ImageFont.load_default()
    font_tag = font_name

draw = ImageDraw.Draw(base)
name_elite = "Elite "
name_sol = "Solution"
tag = "TECHNOLOGY. STRATEGY. RESULTS."

nb = draw.textbbox((0, 0), name_elite + name_sol, font=font_name)
nw, nh = nb[2] - nb[0], nb[3] - nb[1]
tb = draw.textbbox((0, 0), tag, font=font_tag)
tw, th = tb[2] - tb[0], tb[3] - tb[1]

gap = int(W * 0.02)
block_w = logo.size[0] + gap + max(nw, tw)
block_h = max(logo.size[1], nh + int(H * 0.02) + th)
cx, cy = int(W * 0.53), int(H * 0.25)
bx, by = cx - block_w // 2, cy - block_h // 2
logo_x = bx
logo_y = by + (block_h - logo.size[1]) // 2
text_x = logo_x + logo.size[0] + gap
name_y = by + (block_h - (nh + int(H * 0.02) + th)) // 2
tag_y = name_y + nh + int(H * 0.016)

base.alpha_composite(shadow_layer, (logo_x + 2, logo_y + 4))
base.alpha_composite(logo, (logo_x, logo_y))

eb = draw.textbbox((0, 0), name_elite, font=font_name)
ew = eb[2] - eb[0]
draw.text((text_x + 1, name_y + 2), name_elite + name_sol, font=font_name, fill=(0, 0, 0, 120))
draw.text((text_x, name_y), name_elite, font=font_name, fill=(255, 255, 255, 255))
draw.text((text_x + ew, name_y), name_sol, font=font_name, fill=(90, 180, 255, 255))
draw.text((text_x + 1, tag_y + 1), tag, font=font_tag, fill=(0, 0, 0, 100))
draw.text((text_x, tag_y), tag, font=font_tag, fill=(90, 180, 255, 255))

rgb = base.convert("RGB")
rgb.save(out_path, quality=93)
rgb.save(also, quality=93)
print("ok", out_path.stat().st_size)
