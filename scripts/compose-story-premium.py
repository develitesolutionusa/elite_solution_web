"""Composite exact hex logo onto premium lobby for Our Story."""
from PIL import Image, ImageDraw, ImageFont, ImageFilter
from pathlib import Path

base_path = Path(
    r"C:\Users\Usman\.cursor\projects\e-elite-solution-web\assets\about-story-premium-lobby.jpg"
)
logo_path = Path(
    r"C:\Users\Usman\.cursor\projects\e-elite-solution-web\assets\c__Users_Usman_AppData_Roaming_Cursor_User_workspaceStorage_2dcf19dff148c42fe98343be9e98d4fe_images_image-6b8558b2-c952-4e28-9dd7-16c51cf276b9.png"
)
# fallback if hex logo missing: use nothing and keep generated
out_path = Path(r"e:\elite_solution_web\public\images\about-story-premium-lobby.jpg")

base = Image.open(base_path).convert("RGBA")
W, H = base.size

if not logo_path.exists():
    # try alternate known logo path
    logo_path = Path(r"e:\elite_solution_web\public\images\elite-hex-logo.png")

if logo_path.exists():
    # Cover AI logo area with wall color sampled from navy wall
    cover = Image.new("RGBA", base.size, (0, 0, 0, 0))
    cd = ImageDraw.Draw(cover)
    x0, y0, x1, y1 = int(W * 0.28), int(H * 0.12), int(W * 0.78), int(H * 0.48)
    sample = (
        base.crop((int(W * 0.22), int(H * 0.20), int(W * 0.26), int(H * 0.28)))
        .resize((1, 1))
        .getpixel((0, 0))
    )
    wall = sample[:3]
    if sum(wall) > 180:
        wall = (20, 35, 70)
    for i in range(10):
        t = i / 9
        shade = tuple(max(0, int(c * (1 - 0.04 * t))) for c in wall)
        yy0 = y0 + int((y1 - y0) * (i / 10))
        yy1 = y0 + int((y1 - y0) * ((i + 1) / 10))
        cd.rectangle([x0, yy0, x1, yy1], fill=(*shade, 255))
    base = Image.alpha_composite(base, cover)

    logo = Image.open(logo_path).convert("RGBA")
    lw, lh = logo.size
    px = logo.load()
    for y in range(lh):
        for x in range(lw):
            r, g, b, a = px[x, y]
            brightness = (r + g + b) / 3
            is_blue = b > 140 and b > r + 15
            is_silver = r > 150 and g > 160 and b > 180
            is_mid = brightness > 120 and b >= r - 5 and b >= g - 10
            if is_blue or is_silver or is_mid:
                px[x, y] = (r, g, b, 255)
            else:
                px[x, y] = (0, 0, 0, 0)
    alpha = logo.split()[-1].filter(ImageFilter.MinFilter(3)).filter(ImageFilter.MaxFilter(3))
    logo.putalpha(alpha)
    bbox = logo.getbbox()
    logo = logo.crop(bbox)
    target_h = int(H * 0.20)
    scale = target_h / logo.size[1]
    logo = logo.resize(
        (max(1, int(logo.size[0] * scale)), target_h), Image.Resampling.LANCZOS
    )
    sh = logo.split()[-1].filter(ImageFilter.GaussianBlur(5))
    shadow = Image.new("RGBA", logo.size, (0, 0, 0, 0))
    shadow.putalpha(sh.point(lambda p: int(p * 0.4)))

    try:
        font_name = ImageFont.truetype("C:/Windows/Fonts/georgia.ttf", int(H * 0.065))
        font_tag = ImageFont.truetype("C:/Windows/Fonts/segoeuib.ttf", int(H * 0.018))
    except OSError:
        font_name = ImageFont.load_default()
        font_tag = font_name

    draw = ImageDraw.Draw(base)
    # stacked Elite / Solution like premium ref
    elite = "Elite"
    sol = "Solution"
    tag = "TECHNOLOGY. STRATEGY. RESULTS."

    eb = draw.textbbox((0, 0), elite, font=font_name)
    sb = draw.textbbox((0, 0), sol, font=font_name)
    ew, eh = eb[2] - eb[0], eb[3] - eb[1]
    sw, shh = sb[2] - sb[0], sb[3] - sb[1]
    tb = draw.textbbox((0, 0), tag, font=font_tag)
    tw, th = tb[2] - tb[0], tb[3] - tb[1]

    gap = int(W * 0.022)
    text_block_h = eh + int(H * 0.01) + shh + int(H * 0.02) + th
    block_w = logo.size[0] + gap + max(ew, sw, tw)
    block_h = max(logo.size[1], text_block_h)

    cx, cy = int(W * 0.52), int(H * 0.30)
    bx, by = cx - block_w // 2, cy - block_h // 2
    logo_x, logo_y = bx, by + (block_h - logo.size[1]) // 2
    text_x = logo_x + logo.size[0] + gap
    name_y = by + (block_h - text_block_h) // 2

    base.alpha_composite(shadow, (logo_x + 2, logo_y + 4))
    base.alpha_composite(logo, (logo_x, logo_y))

    draw.text((text_x + 1, name_y + 2), elite, font=font_name, fill=(0, 0, 0, 120))
    draw.text((text_x, name_y), elite, font=font_name, fill=(255, 255, 255, 255))
    sol_y = name_y + eh + int(H * 0.008)
    draw.text((text_x + 1, sol_y + 2), sol, font=font_name, fill=(0, 0, 0, 120))
    draw.text((text_x, sol_y), sol, font=font_name, fill=(90, 180, 255, 255))
    tag_y = sol_y + shh + int(H * 0.018)
    draw.text((text_x + 1, tag_y + 1), tag, font=font_tag, fill=(0, 0, 0, 100))
    draw.text((text_x, tag_y), tag, font=font_tag, fill=(120, 190, 255, 255))

rgb = base.convert("RGB")
rgb.save(out_path, quality=94)
rgb.save(
    Path(r"C:\Users\Usman\.cursor\projects\e-elite-solution-web\assets\about-story-premium-lobby.jpg"),
    quality=94,
)
print("saved", out_path, out_path.stat().st_size)
