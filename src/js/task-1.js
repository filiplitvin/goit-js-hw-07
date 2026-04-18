const items = document.querySelectorAll("#categories > li");

console.log(`У списку ${items.length} категорії.`);

items.forEach((item) => {
  const categoryTitle = item.querySelector("h2").textContent;
  const doCount = item.querySelectorAll("li").length;

  console.log(`Категорія: ${categoryTitle}`);
  console.log(`Кількість елементів: ${doCount}`);
});
