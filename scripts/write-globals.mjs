import fs from "fs";

let css = fs.readFileSync("scripts/template.css", "utf8");
css = css.replace(
  "--head:'Bricolage Grotesque','Segoe UI',Arial,sans-serif;",
  "--head:var(--font-head),'Segoe UI',Arial,sans-serif;",
);
css = css.replace(
  "--body:'Figtree','Segoe UI',Arial,sans-serif;",
  "--body:var(--font-body),'Segoe UI',Arial,sans-serif;",
);

const out = `@import "tailwindcss";

${css}

img { max-width: 100%; height: auto; }
.page-enter { animation: in .7s cubic-bezier(.2,.7,.2,1) both; }
`;

fs.writeFileSync("src/app/globals.css", out);
console.log("Wrote globals.css", out.length);
