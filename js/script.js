import { data } from "./emoji.js";
function createItem(obj) {
  const item = document.createElement("div");
  const emoji = document.createElement("div");
  const title = document.createElement("p");
  const info = document.createElement("p");

  item.className = "item";
  emoji.className = "item__emoji";
  title.className = "item__title";
  info.className = "item__info";

  emoji.textContent = obj.symbol;
  title.textContent = obj.title;
  info.textContent = obj.keywords;

  item.append(emoji);
  item.append(title);
  item.append(info);

  return item;
}
const grid = document.querySelector(".grid");

grid.append(
  createItem({
    title: "100",
    symbol: "💯",
    keywords:
      "hundred points symbol symbol wow wow win win perfect perfect parties parties",
  })
);
