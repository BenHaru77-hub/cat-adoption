const cats = [
  {
    name: "น้องส้ม",
    age: "1 ปี",
    personality: "เป็นมิตร",
    image: "images/cat1.jpg"
  },
  {
    name: "น้องดำ",
    age: "2 ปี",
    personality: "ขี้อ้อน",
    image: "images/cat2.jpg"
  }
];

const container = document.getElementById("cat-list");

cats.forEach(cat => {
  const div = document.createElement("div");
  div.className = "cat-card";
  div.innerHTML = `
    <img src="${cat.image}" alt="${cat.name}">
    <h2>${cat.name}</h2>
    <p>อายุ ${cat.age} / ${cat.personality}</p>
  `;
  container.appendChild(div);
});
