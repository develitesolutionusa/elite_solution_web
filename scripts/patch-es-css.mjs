import fs from "fs";

const p = "src/app/globals.css";
const s = fs.readFileSync(p, "utf8");
const a = s.indexOf("/* E/S runners under geometric box */");
const b = s.indexOf("/* ribbon */");
if (a < 0 || b < 0) throw new Error(`markers ${a} ${b}`);

const next = `/* E/S runners under geometric box */
.es-track{position:relative;width:min(100%,340px);height:56px;margin:0 auto;overflow:visible;pointer-events:none;isolation:isolate}
.es-track-static{display:grid;place-items:center}
.es-pair-static{display:flex;align-items:center;justify-content:center;gap:8px}
.es-pair-static .es-glyph{opacity:1;transform:none;animation:none;filter:drop-shadow(0 0 10px rgba(243,215,122,.4))}
.es-actor{position:absolute;top:50%;width:40px;height:48px;margin-top:-24px;will-change:left,transform}
.es-actor-left{left:0;animation:esPosLeft 11s cubic-bezier(.42,.05,.2,1) infinite}
.es-actor-right{left:calc(100% - 40px);animation:esPosRight 11s cubic-bezier(.42,.05,.2,1) infinite}
.es-unit{width:40px;height:48px;display:block;overflow:visible}
.es-face-left{transform:scaleX(-1);transform-origin:20px 24px}
.es-figure{transform-origin:20px 24px;animation:esMorphOut 11s linear infinite}
.es-bob{transform-origin:20px 24px;animation:esRunCycle .4s ease-in-out infinite}
.es-arm-back,.es-arm-front,.es-leg-back,.es-leg-front{transform-box:fill-box;transform-origin:center top}
.es-arm-back{animation:esArmB .4s ease-in-out infinite}
.es-arm-front{animation:esArmF .4s ease-in-out infinite}
.es-leg-back{animation:esLegB .4s ease-in-out infinite}
.es-leg-front{animation:esLegF .4s ease-in-out infinite}
.es-glyph{opacity:0;transform:scale(.45);transform-origin:20px 24px;filter:blur(2px);animation:esMorphIn 11s linear infinite}
.es-glow{position:absolute;left:50%;top:50%;width:96px;height:42px;margin:-21px 0 0 -48px;border-radius:999px;background:radial-gradient(circle,rgba(243,215,122,.45),rgba(127,161,230,.2) 42%,transparent 72%);opacity:0;pointer-events:none;animation:esGlow 11s linear infinite;filter:blur(3px);z-index:-1}

/* Opposite sides → lightly touch → form E + S */
@keyframes esPosLeft{
  0%{left:0;transform:scale(1)}
  24%{left:calc(50% - 40px);transform:scale(1)}
  28%,32%{left:calc(50% - 40px);transform:scale(1.04)}
  38%,54%{left:calc(50% - 42px);transform:scale(1.06)}
  62%{left:calc(50% - 40px);transform:scale(1)}
  90%,100%{left:0;transform:scale(1)}
}
@keyframes esPosRight{
  0%{left:calc(100% - 40px);transform:scale(1)}
  24%{left:calc(50%);transform:scale(1)}
  28%,32%{left:calc(50%);transform:scale(1.04)}
  38%,54%{left:calc(50% + 2px);transform:scale(1.06)}
  62%{left:calc(50%);transform:scale(1)}
  90%,100%{left:calc(100% - 40px);transform:scale(1)}
}
@keyframes esRunCycle{0%,100%{transform:translateY(0)}50%{transform:translateY(-2px)}}
@keyframes esArmB{0%,100%{transform:rotate(34deg)}50%{transform:rotate(-40deg)}}
@keyframes esArmF{0%,100%{transform:rotate(-38deg)}50%{transform:rotate(36deg)}}
@keyframes esLegB{0%,100%{transform:rotate(-30deg)}50%{transform:rotate(32deg)}}
@keyframes esLegF{0%,100%{transform:rotate(32deg)}50%{transform:rotate(-28deg)}}
@keyframes esMorphOut{
  0%,30%{opacity:1;transform:scale(1);filter:blur(0)}
  34%{opacity:.55;transform:scale(.88);filter:blur(.5px)}
  38%,54%{opacity:0;transform:scale(.6);filter:blur(2px)}
  60%{opacity:.5;transform:scale(.88);filter:blur(.5px)}
  66%,100%{opacity:1;transform:scale(1);filter:blur(0)}
}
@keyframes esMorphIn{
  0%,32%{opacity:0;transform:scale(.4);filter:blur(2.5px)}
  36%{opacity:.5;transform:scale(.8);filter:blur(1px) drop-shadow(0 0 8px rgba(127,161,230,.45))}
  38%,54%{opacity:1;transform:scale(1);filter:blur(0) drop-shadow(0 0 14px rgba(243,215,122,.55))}
  60%{opacity:.4;transform:scale(.8);filter:blur(1px)}
  66%,100%{opacity:0;transform:scale(.4);filter:blur(2.5px)}
}
@keyframes esGlow{
  0%,32%{opacity:0;transform:scale(.6)}
  38%,52%{opacity:1;transform:scale(1)}
  60%,100%{opacity:0;transform:scale(.65)}
}

`;

fs.writeFileSync(p, s.slice(0, a) + next + s.slice(b));
console.log("patched: touch then ES");
