import fs from "fs";
import path from "path";

const html = fs.readFileSync(
  "Elite Solutions USA _ Website Preview (Copy) (1).html",
  "utf8",
);
const i = html.indexOf("<script>");
const j = html.lastIndexOf("</script>");
const script = html.slice(i + 8, j);
const start = script.indexOf("var LOGOS=[");
const end = script.indexOf("];", start) + 2;
const logosCode = script.slice(start, end);
const LOGOS = eval(logosCode.replace("var LOGOS=", ""));

const outDir = "public/logos";
fs.mkdirSync(outDir, { recursive: true });
fs.mkdirSync("src/data", { recursive: true });

const meta = LOGOS.map((l) => {
  const slug = l.n
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  const m = l.s.match(/^data:image\/(\w+);base64,(.+)$/);
  if (!m) throw new Error("bad image " + l.n);
  const ext = m[1] === "jpeg" ? "jpg" : m[1];
  const file = `${slug}.${ext}`;
  fs.writeFileSync(path.join(outDir, file), Buffer.from(m[2], "base64"));
  return {
    name: l.n,
    alt: l.a || `${l.n} logo`,
    bg: l.bg,
    fit: l.f || "contain",
    src: `/logos/${file}`,
    category: "logo",
  };
});

fs.writeFileSync("src/data/portfolio.json", JSON.stringify(meta, null, 2));
console.log("Wrote", meta.length, "logos");
meta.forEach((m) => console.log(m.name, m.bg, m.fit, m.src));
