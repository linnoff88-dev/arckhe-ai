// Publica o último post publicado no canal do Telegram via Bot API
// Requer secrets: ARCKHE_BOT_TOKEN e ARCKHE_CHAT_ID (no GitHub)
import fs from "node:fs";

const token = process.env.ARCKHE_BOT_TOKEN;
const chatId = process.env.ARCKHE_CHAT_ID;
if (!token || !chatId) {
  console.log("Secrets de Telegram ausentes — nada a fazer.");
  process.exit(0);
}

const published = JSON.parse(fs.readFileSync("comunidade/semana-arkhe/posts-published.json", "utf8"));
const post = published[published.length - 1];
if (!post) {
  console.log("Nenhum post publicado ainda.");
  process.exit(0);
}

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const html = [
  `<b>${esc(post.title)}</b>`,
  `<i>${esc(post.date)}</i>`,
  "",
  esc(post.body),
  "",
  "<a href=\"https://linnoff88-dev.github.io/arckhe-ai/comunidade/semana-arkhe/\">Ler no site &rarr;</a>",
].join("\n");

const r = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ chat_id: chatId, text: html, parse_mode: "HTML", disable_web_page_preview: true }),
});
const j = await r.json();
if (j.ok) {
  console.log("Post publicado no Telegram:", post.id);
} else {
  console.error("Falha no Telegram:", j);
  process.exit(1);
}
