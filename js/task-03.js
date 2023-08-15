const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const list = document.querySelector(".gallery");
console.log(list);
const markup = images
  .map(
    (image) =>
      `<li class="list-item"><img src="${image.url}" alt="${image.alt}" width = '300px' height = '200px'></li>`
  )
  .join("");
list.insertAdjacentHTML("beforeend", markup);
const menuItemsByTagName = document.querySelector("ul");
menuItemsByTagName.style.listStyle = "none";
menuItemsByTagName.style.display = "flex";
menuItemsByTagName.style.gap = "50px";
menuItemsByTagName.style.justifyContent = "space-evenly";
const pEl = document.createElement("p");
menuItemsByTagName.after(pEl);
const text =
  "(I like to go to work and from work home by bysycle.) That day I went to work by bicycle. The bike was put in the pantry. At work, I changed clothes and waited for the client. On the customer's call and I opened the doos of the salon to him. I said 'Hello' to the my client and let him into my ofice. The client answed me 'Well'";
function transfomStr() {
  const wordArray = text
    // .replace(/[^a-zа-яё\s]/gi, "")
    // .replace(/\s+/g, " ")
    .split(/\s+/);
  wordArray.forEach((el) => {
    if (el.length > 4) {
      const spanEl = document.createElement("span");
      spanEl.style.color = "red";
      spanEl.textContent = el + " ";
      pEl.append(spanEl);
    } else {
      pEl.append(el + " ");
      //pEl.innerHTML += el + " ";
    }
  });
}
//transfomStr();
pEl.append(text);
pEl.style.color = "red";
