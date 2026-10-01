import fs from "fs";

const p = "src/data/services.ts";
let s = fs.readFileSync(p, "utf8");

const map = {
  "accounting-and-bookkeeping": "/images/service-accounting.jpg",
  tax: "/images/service-tax.jpg",
  "payroll-outsourcing": "/images/service-payroll.jpg",
  "cfo-services": "/images/service-cfo.jpg",
  "web-development": "/images/service-web.jpg",
  "graphic-designing": "/images/service-graphic.jpg",
  "marketing-strategies": "/images/service-marketing.jpg",
  "seo-services": "/images/service-seo.jpg",
  "email-marketing": "/images/service-email.jpg",
  "help-line-services": "/images/service-helpline.jpg",
};

for (const [slug, img] of Object.entries(map)) {
  const needle = `slug: "${slug}"`;
  const start = s.indexOf(needle);
  if (start < 0) throw new Error(`missing ${slug}`);
  const close = s.indexOf("\n  },", start);
  if (close < 0) throw new Error(`close missing ${slug}`);
  const block = s.slice(start, close);
  if (block.includes("image:")) continue;
  s = s.slice(0, close) + `,\n    image: "${img}"` + s.slice(close);
}

fs.writeFileSync(p, s);
console.log("done");
