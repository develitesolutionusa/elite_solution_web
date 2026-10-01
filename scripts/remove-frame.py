from PIL import Image

src = r"C:\Users\Usman\.cursor\projects\e-elite-solution-web\assets\services-hero-pro.jpg"
img = Image.open(src).convert("RGBA")
w, h = img.size
px = img.load()

for y in range(h):
    for x in range(w):
        r, g, b, a = px[x, y]
        brightness = r + g + b
        # solid dark navy / black surroundings
        if r < 24 and g < 30 and b < 45:
            px[x, y] = (0, 0, 0, 0)
        elif r < 38 and g < 46 and b < 62 and brightness < 120:
            fade = max(0.0, (brightness - 40) / 80)
            px[x, y] = (r, g, b, int(a * fade))

bbox = img.getbbox()
if bbox:
    left, top, right, bottom = bbox
    pad = 24
    left = max(0, left - pad)
    top = max(0, top - pad)
    right = min(w, right + pad)
    bottom = min(h, bottom + pad)
    img = img.crop((left, top, right, bottom))

out = r"e:\elite_solution_web\public\images\services-hero-visual.png"
img.save(out, "PNG", optimize=True)
print("saved", out, img.size)
