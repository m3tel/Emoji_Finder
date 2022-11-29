import { data } from "./emoji.js";
const grid = document.querySelector(".grid");
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
data.forEach((item) => grid.append(createItem(item)));

let input = document.querySelector(".header__input");

function searchData() {
  const newData = data.filter(
    (item) =>
      item.title.includes(input.value.trim().toLowerCase()) ||
      item.keywords.includes(input.value.trim().toLowerCase())
  );
  grid.innerHTML = "";
  newData.forEach((item) => grid.append(createItem(item)));
}
input.addEventListener("input", searchData);
