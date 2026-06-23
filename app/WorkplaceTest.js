"use client";

import { useEffect, useRef, useState } from "react";
import { questionBank, resultOrder, results } from "./data/workplaceTestData";

const mascotSrc = "/images/brand-mascot.png";
const quizSize = 5;
const initialScores = () => Object.fromEntries(resultOrder.map((key) => [key, 0]));

function pickRandomQuestions() {
  const shuffled = [...questionBank];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }
  return shuffled.slice(0, quizSize);
}

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
  ctx.fillText("职场人格抽样测试", 165, 224);

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
  const [questions, setQuestions] = useState(() => pickRandomQuestions());
  const [scores, setScores] = useState(initialScores);
  const [resultKey, setResultKey] = useState("silent");
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
    setQuestions(pickRandomQuestions());
    setScores(initialScores());
    setResultKey("silent");
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
    link.download = `职场人格抽样测试-${result.name}.png`;
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
              职场人格
              <br />
              抽样测试
            </h1>
            <p className="hero-text">随机 5 道职场吐槽题，看看你今天是哪种打工人格。</p>
          </div>
          <div className="mascot-card" aria-hidden="true">
            <img className="mascot-image" src={mascotSrc} alt="" />
            <div className="badge-card">今日人格待抽样</div>
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
          <div className="progress-text">
            {current + 1}/{quizSize}
          </div>
        </div>
        <div className="progress-bar" aria-hidden="true">
          <span style={{ width: `${((current + 1) / quizSize) * 100}%` }} />
        </div>
        <article className="question-card">
          <p className="question-kicker">职场切片 {String(current + 1).padStart(2, "0")}</p>
          <h2>{question.title}</h2>
          <div className="options">
            {question.options.map((option) => (
              <button
                className="option-button"
                key={`${question.title}-${option.text}`}
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
