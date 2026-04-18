const ingredients = [
  "Картопля",
  "Гриби",
  "Часник",
  "Помідори",
  "Зелень",
  "Приправи",
];

const list = document.querySelector("#ingredients");

const items = ingredients.map((text) => {
  const item = document.createElement("li");
  item.textContent = text;
  return item;
});
list.append(...items);
