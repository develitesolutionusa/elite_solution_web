import fs from "fs";

const p = "src/data/services.ts";
let s = fs.readFileSync(p, "utf8");
s = s.replace(/\],,\n    image:/g, "],\n    image:");
s = s.replace(/image: "([^"]+)"\n/g, 'image: "$1",\n');
fs.writeFileSync(p, s);
console.log("fixed");
