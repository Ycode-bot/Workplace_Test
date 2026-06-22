"use client";

import { useEffect, useRef, useState } from "react";

const mascotSrc = "/images/brand-mascot.png";

const questions = [
  {
    kicker: "场景 01",
    title: "周一早上刚坐下，有人问你进度，你第一反应是？",
    options: [
      { text: "先别问，我还在开机", type: "boot" },
      { text: "截图留证，防止后面背锅", type: "shield" },
      { text: "假装在找文件，争取一点缓冲", type: "fish" },
      { text: "马上回，但心里已经扣一分", type: "salary" },
      { text: "先已读，等脑子上线再回", type: "ghost" },
      { text: "开始倒数离周末还有几天", type: "revive" }
    ]
  },
  {
    kicker: "场景 02",
    title: "领导说“这个你看着推进一下”，你会？",
    options: [
      { text: "先问清楚标准，不然都是锅", type: "shield" },
      { text: "表面收到，内心下线", type: "boot" },
      { text: "开始算这点工资值不值", type: "salary" },
      { text: "先去接杯水，启动摸鱼保护", type: "fish" },
      { text: "看到消息，但先不让它看到我", type: "ghost" },
      { text: "把它排进周五之后的人生", type: "revive" }
    ]
  },
  {
    kicker: "场景 03",
    title: "同事突然说“帮我看一下”，你最怕什么？",
    options: [
      { text: "看着看着就变成我负责", type: "shield" },
      { text: "我脑子还没加载完", type: "boot" },
      { text: "这活不在我的工资范围内", type: "salary" },
      { text: "我的摸鱼窗口被关闭", type: "fish" },
      { text: "一回复就开启连环追问", type: "ghost" },
      { text: "它影响我周末回血计划", type: "revive" }
    ]
  },
  {
    kicker: "场景 04",
    title: "下班前十分钟又来新需求，你会？",
    options: [
      { text: "先保存聊天记录，明天再说", type: "shield" },
      { text: "灵魂已经下班，无法受理", type: "boot" },
      { text: "打开工资单冷静一下", type: "salary" },
      { text: "把自己藏进外卖袋后面", type: "fish" },
      { text: "已读，但给情绪留个缓冲区", type: "ghost" },
      { text: "默念再忍一下，周末快到了", type: "revive" }
    ]
  },
  {
    kicker: "场景 05",
    title: "如果给今天的你颁个奖，最像哪个？",
    options: [
      { text: "开机失败但坚持在岗奖", type: "boot" },
      { text: "截图保命边界清晰奖", type: "shield" },
      { text: "工资续命情绪稳定奖", type: "salary" },
      { text: "带薪静音摸鱼自救奖", type: "fish" },
      { text: "已读不回能量守恒奖", type: "ghost" },
      { text: "周末复活再战江湖奖", type: "revive" }
    ]
  }
];

const results = {
  boot: {
    name: "周一开机失败型",
    desc: "你不是不努力，只是系统启动比较慢。今天适合先活着，再谈效率。",
    tags: ["人到魂未到", "加载中", "低电量上班"],
    color: "#7aa9c6",
    accent: "#ffd66b"
  },
  salary: {
    name: "工资续命型",
    desc: "你对工作没有失去热情，你只是清楚热情要按工资发放。",
    tags: ["工资冷静器", "拒绝上头", "情绪记账"],
    color: "#92b77b",
    accent: "#ffd66b"
  },
  shield: {
    name: "背锅预警型",
    desc: "你已经进化出职场雷达。别人还在热血，你已经开始截图保命。",
    tags: ["截图护身", "边界清醒", "锅来盾挡"],
    color: "#f5a7a1",
    accent: "#fff0a8"
  },
  fish: {
    name: "摸鱼自救型",
    desc: "你的摸鱼不是摆烂，是精神急救。懂得喘口气的人，才能活到下班。",
    tags: ["带薪静音", "外卖袋掩护", "精神急救"],
    color: "#c7b299",
    accent: "#92b77b"
  },
  ghost: {
    name: "已读不回防御型",
    desc: "你不是冷漠，只是在给自己争取一点情绪缓存。回复可以晚点，边界必须在线。",
    tags: ["消息缓冲", "边界自救", "低风险在线"],
    color: "#b8a7d9",
    accent: "#ffd66b"
  },
  revive: {
    name: "周末复活型",
    desc: "工作日的你像省电模式，周末才是真正开机。只要想到休息，血条还能再撑一格。",
    tags: ["周末回血", "省电上班", "下班重生"],
    color: "#88c9b7",
    accent: "#fff0a8"
  }
};

const resultOrder = ["boot", "shield", "salary", "fish", "ghost", "revive"];
const initialScores = () => Object.fromEntries(resultOrder.map((key) => [key, 0]));

function drawRoundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
  let line = "";
  Array.from(text).forEach((char) => {
    const testLine = line + char;
    if (ctx.measureText(testLine).width > maxWidth && line) {
      ctx.fillText(line, x, y);
      line = char;
      y += lineHeight;
    } else {
      line = testLine;
    }
  });
  if (line) ctx.fillText(line, x, y);
}

function drawImageContain(ctx, image, x, y, width, height) {
  const ratio = Math.min(width / image.width, height / image.height);
  const drawWidth = image.width * ratio;
  const drawHeight = image.height * ratio;
  const drawX = x + (width - drawWidth) / 2;
  const drawY = y + (height - drawHeight) / 2;
  ctx.drawImage(image, drawX, drawY, drawWidth, drawHeight);
}

function drawPoster(canvas, result, mascotImage) {
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#fffaf1";
  ctx.fillRect(0, 0, 900, 1200);

  ctx.fillStyle = result.color;
  drawRoundRect(ctx, 56, 52, 788, 1088, 42);
  ctx.fill();
  ctx.lineWidth = 8;
  ctx.strokeStyle = "#211b18";
  ctx.stroke();

  ctx.fillStyle = "#fffdf8";
  drawRoundRect(ctx, 92, 92, 716, 1016, 34);
  ctx.fill();
  ctx.lineWidth = 5;
  ctx.stroke();

  ctx.fillStyle = "#211b18";
  ctx.textAlign = "left";
  ctx.font = "900 34px sans-serif";
  ctx.fillText("豚豚职场研究所", 132, 160);

  ctx.fillStyle = result.accent;
  drawRoundRect(ctx, 132, 195, 242, 42, 21);
  ctx.fill();
  ctx.strokeStyle = "#211b18";
  ctx.lineWidth = 4;
  ctx.stroke();
  ctx.fillStyle = "#211b18";
  ctx.font = "900 22px sans-serif";
  ctx.fillText("打工人精神状态测试", 154, 224);

  ctx.fillStyle = "#211b18";
  ctx.font = "900 64px sans-serif";
  wrapText(ctx, result.name, 132, 332, 630, 74);

  ctx.fillStyle = "#4a3d35";
  ctx.font = "800 33px sans-serif";
  wrapText(ctx, result.desc, 132, 470, 630, 50);

  ctx.save();
  ctx.fillStyle = result.accent;
  drawRoundRect(ctx, 291, 585, 318, 48, 22);
  ctx.fill();
  ctx.strokeStyle = "#211b18";
  ctx.lineWidth = 5;
  ctx.stroke();
  ctx.fillStyle = "#211b18";
  ctx.font = "900 25px sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("今日精神状态", 450, 617);
  ctx.restore();

  if (mascotImage) {
    ctx.save();
    drawRoundRect(ctx, 210, 645, 480, 300, 38);
    ctx.clip();
    ctx.fillStyle = "#fffaf1";
    ctx.fillRect(210, 645, 480, 300);
    drawImageContain(ctx, mascotImage, 260, 650, 380, 285);
    ctx.restore();

    ctx.strokeStyle = "#211b18";
    ctx.lineWidth = 5;
    drawRoundRect(ctx, 210, 645, 480, 300, 38);
    ctx.stroke();
  }

  ctx.fillStyle = "#fffdf8";
  drawRoundRect(ctx, 148, 980, 604, 78, 28);
  ctx.fill();
  ctx.strokeStyle = "#211b18";
  ctx.lineWidth = 5;
  ctx.stroke();

  ctx.fillStyle = "#211b18";
  ctx.font = "900 28px sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(result.tags.join(" / "), 450, 1030);
}

export default function WorkplaceTest() {
  const [screen, setScreen] = useState("home");
  const [current, setCurrent] = useState(0);
  const [scores, setScores] = useState(initialScores);
  const [resultKey, setResultKey] = useState("boot");
  const [mascotImage, setMascotImage] = useState(null);
  const posterCanvasRef = useRef(null);

  const question = questions[current];
  const result = results[resultKey];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [screen, current]);

  useEffect(() => {
    const image = new Image();
    image.onload = () => setMascotImage(image);
    image.src = mascotSrc;
  }, []);

  useEffect(() => {
    if (screen === "result" && posterCanvasRef.current) {
      drawPoster(posterCanvasRef.current, result, mascotImage);
    }
  }, [screen, result, mascotImage]);

  function startQuiz() {
    setCurrent(0);
    setScores(initialScores());
    setResultKey("boot");
    setScreen("quiz");
  }

  function chooseOption(type) {
    const nextScores = { ...scores, [type]: scores[type] + 1 };
    setScores(nextScores);

    if (current < questions.length - 1) {
      setCurrent((value) => value + 1);
      return;
    }

    const nextResultKey = resultOrder.reduce((winner, key) => {
      if (nextScores[key] > nextScores[winner]) return key;
      return winner;
    }, resultOrder[0]);

    setResultKey(nextResultKey);
    setScreen("result");
  }

  function downloadPoster() {
    if (!posterCanvasRef.current) return;
    const link = document.createElement("a");
    link.download = `打工人精神状态-${result.name}.png`;
    link.href = posterCanvasRef.current.toDataURL("image/png");
    link.click();
  }

  return (
    <main className="app-shell">
      <section className={`screen screen-home ${screen === "home" ? "is-active" : ""}`}>
        <div className="brand-row">
          <span className="brand-dot" />
          <span>豚豚职场研究所</span>
        </div>
        <div className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Monday survival check</p>
            <h1>
              打工人
              <br />
              精神状态测试
            </h1>
            <p className="hero-text">5 道题，看你今天是开机失败、背锅预警，还是等周末回血。</p>
          </div>
          <div className="mascot-card" aria-hidden="true">
            <img className="mascot-image" src={mascotSrc} alt="" />
            <div className="badge-card">今日状态待检测</div>
          </div>
        </div>
        <button className="primary-button" onClick={startQuiz} type="button">
          开始测试
        </button>
        <p className="safe-note">结果只在本机生成，不收集个人信息。</p>
      </section>

      <section className={`screen screen-quiz ${screen === "quiz" ? "is-active" : ""}`}>
        <div className="quiz-top">
          <button className="ghost-button" onClick={() => setScreen("home")} type="button">
            返回
          </button>
          <div className="progress-text">{current + 1}/5</div>
        </div>
        <div className="progress-bar" aria-hidden="true">
          <span style={{ width: `${((current + 1) / questions.length) * 100}%` }} />
        </div>
        <article className="question-card">
          <p className="question-kicker">{question.kicker}</p>
          <h2>{question.title}</h2>
          <div className="options">
            {question.options.map((option) => (
              <button
                className="option-button"
                key={`${question.kicker}-${option.type}`}
                onClick={() => chooseOption(option.type)}
                type="button"
              >
                {option.text}
              </button>
            ))}
          </div>
        </article>
      </section>

      <section className={`screen screen-result ${screen === "result" ? "is-active" : ""}`}>
        <div className="result-panel">
          <p className="eyebrow">Your workplace mode</p>
          <h2>{result.name}</h2>
          <p className="result-desc">{result.desc}</p>
          <ul className="result-tags">
            {result.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
          <div className="poster-wrap">
            <canvas ref={posterCanvasRef} width="900" height="1200" aria-label="测试结果海报" />
          </div>
          <div className="actions">
            <button className="primary-button" onClick={downloadPoster} type="button">
              保存海报
            </button>
            <button className="secondary-button" onClick={startQuiz} type="button">
              再测一次
            </button>
          </div>
          <p className="safe-note">海报仅展示品牌名和结果，不含二维码、扫码关注或诱导文案。</p>
        </div>
      </section>
    </main>
  );
}
