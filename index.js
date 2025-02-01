const petArray = [
  {
    name: "Luna",
    price: 40,
    info: {
      type: "cat",
      gender: "girl",
      skin: "red",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0Zuywj8gFc3iM-gvaJfAEXranyDTGrXQx2g&s",
      age: 2,
    },
  },
  {
    name: "Jack",
    price: 36,
    info: {
      type: "dog",
      gender: "boy",
      skin: "black",
      image:
        "https://zoobonus.ua/storage/breeds/images/big/t5jnpkELPD4QWuAHDzqsqVOqDqXiC8qrWPY9KF3s.jpg",
      age: 4,
    },
  },
  {
    name: "Magy",
    price: 50,
    info: {
      type: "turtle",
      gender: "girl",
      skin: "dark-green",
      image:
        "https://facts.cx.ua/uploads/facts-2/mini/cikavi-fakti-pro-morskih-cherepah-900-600.jpg",
      age: 3,
    },
  },
  {
    name: "Lucie",
    price: 34,
    info: {
      type: "rabbit",
      gender: "girl",
      skin: "white",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFsouVYTbNORB9Ogjhn8Zz_ISrQ7U9SLsmwQ&s",
      age: 1,
    },
  },
  {
    name: "Kuko",
    price: 47,
    info: {
      type: "parrot",
      gender: "boy",
      skin: "green",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwQqlnTZ-K8sl9wTNwdzO-NndZf0GrI8bPUQ&s",
      age: 2,
    },
  },
  {
    name: "George",
    price: 41,
    info: {
      type: "cat",
      gender: "boy",
      skin: "brown",
      image:
        "https://cdn.riastatic.com/photosnew/general/adv_photo/shotlandska-kishechka-vid-titulovanih-batkiv-malenki-vushka__18132244bt.jpg",
      age: 2,
    },
  },
  {
    name: "Becky",
    price: 31,
    info: {
      type: "dog",
      gender: "girl",
      skin: "gold",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFlx6uD4tPy0Ee2jmV3050_E04Zv84iM7bfA&s",
      age: 4,
    },
  },
  {
    name: "Gresy",
    price: 50,
    info: {
      type: "turtle",
      gender: "girl",
      skin: "dark-orange",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbBapn76NaXHKu5fNs272VsmU8nTUB5pjBkg&s",
      age: 4,
    },
  },
  {
    name: "Joiky",
    price: 44,
    info: {
      type: "hamster",
      gender: "girl",
      skin: "gey-white",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCYHl_tQA30ydejTASYuJzfQFX3S7LAZndWA&s",
      age: 3,
    },
  },
  {
    name: "Rosy",
    price: 43,
    info: {
      type: "parrot",
      gender: "girl",
      skin: "red",
      image:
        "https://media.istockphoto.com/id/1358208752/photo/macaw-parrot-flying-in-dark-green-vegetation-with-beautiful-back-light-and-rain-scarlet-macaw.jpg?s=612x612&w=0&k=20&c=3396GlVCOOsK34dEUfjCNqsDFPOnURw8kQC76wQaKY8=",
      age: 2,
    },
  },
];
const petList = document.querySelector("#pet-list");

petArray.forEach((pet) => {
  const {
    name,
    price,
    info: { type, gender, skin, image, age },
  } = pet;
  petList.insertAdjacentHTML(
    "beforeend",
    `<li class="catalog__item">
        <div class="catalog__wrapper">
            <img src="${image}" alt="${skin} ${type} called ${name}" class="catalog__img">
        </div>
        <div class="catalog__block">
            <div class="catalog__header">
                <h2 class="catalog__subtitle">${name}</h2>
                <p class="catalog__price">${price}$</p>
            </div>
            <div class="catalog__info">
                <p class="catalog__text">Type: <span class="catalog__span">${type}</span></p>
                <p class="catalog__text">Age: <span class="catalog__span">${age}</span></p>
                <p class="catalog__text">Gender: <span class="catalog__span">${gender}</span></p>
                <p class="catalog__text">Skin: <span class="catalog__span">${skin}</span></p>
            </div>
            <button type="button" class="catalog__btn">Глянути</button>
        </div>
    </li>`
  );
});
