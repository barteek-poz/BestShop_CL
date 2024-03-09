const menu = document.querySelector("#menu");
const burger = document.querySelector(".burger");
const mobileMenu = document.querySelector(".nav-menu-mobile");
const navLinks = document.querySelectorAll(".nav-menu-link");
const productsInput = document.querySelector("#products");
const ordersInput = document.querySelector("#orders");
const accountInput = document.querySelector("#accounting");
const terminalInput = document.querySelector("#terminal");
const selectPackage = document.querySelector("#package");
const selectDropdown = document.querySelector(".select__dropdown");
const selectInput = document.querySelector(".select__input");
const productsSum = document.querySelector('[data-id="products"]');
const ordersSum = document.querySelector('[data-id="orders"]');
const packageSum = document.querySelector('[data-id="package"]');
const accountSum = document.querySelector('[data-id="accounting"]');
const terminalSum = document.querySelector('[data-id="terminal"]');
const totalSum = document.querySelector(".summary__total");

//INPUT HANDLERS
const prices = {
  product: 4,
  order: 3,
  basic: 10,
  professional: 15,
  premium: 20,
  accounting: 12,
  terminal: 5,
};

//dokonczyc sumowanie z reducerem w sumTotalHandler
const sumArr = [
  {
    product: 0,
    order: 0,
  },
];

const sumHandler = (inputType, sumCategory, priceCategory) => {
  sumCategory.classList.add("open");
  sumCategory.children[1].innerText = `${inputType.value} * ${prices[priceCategory]}`;
  sumCategory.children[2].innerText = `${
    inputType.value * prices[priceCategory]
  }$`;
  sumArr[0][`${priceCategory}`] = inputType.value * prices[priceCategory];
  totalSumHandler(priceCategory);
  if (inputType.value.length === 0 && sumCategory.classList.contains("open")) {
    sumCategory.classList.remove("open");
  }
};

productsInput.addEventListener("input", () => {
  sumHandler(productsInput, productsSum, "product");
});
ordersInput.addEventListener("input", () => {
  sumHandler(ordersInput, ordersSum, "order");
});

//SELECT HANDLERS
const selectHandler = (e) => {
  selectPackage.classList.toggle("open");
};

const selectOptionHandler = (e) => {
  const packageType = e.target.getAttribute("data-value");
  selectInput.innerText = e.target.innerText;
  packageSum.children[1].innerText = e.target.innerText;
  console.log(e.target.getAttribute("data-value"));
  packageSum.children[2].innerText = `${prices[`${packageType}`]}$`;
  packageSum.classList.add("open");
};

selectPackage.addEventListener("click", selectHandler);
selectDropdown.addEventListener("click", selectOptionHandler);

//CHECKBOX HANDLERS
const checkboxHandler = (e) => {
  if (e.target.getAttribute("id") === "accounting") {
    accountSum.classList.toggle("open");
    accountSum.children[1].innerText = `${
      prices[`${e.target.getAttribute("id")}`]
    }$`;
  } else {
    terminalSum.classList.toggle("open");
    terminalSum.children[1].innerText = `${
      prices[`${e.target.getAttribute("id")}`]
    }$`;
  }
};

accountInput.addEventListener("change", checkboxHandler);
terminalInput.addEventListener("change", checkboxHandler);

//TOTAL SUM

const totalSumHandler = (category) => {
  const sum = sumArr.reduce((acc, currVal) => {
    return acc + currVal[`${category}`];
  }, 0);
  console.log(sum);
};

// MOBILE NAVIGATION
burger.addEventListener("click", function () {
  burger.classList.toggle("burger-isActive");
  menu.classList.toggle("nav-menu");
  menu.classList.toggle("nav-menu-mobile");
});

navLinks.forEach(function (navLink) {
  navLink.addEventListener("click", function () {
    burger.classList.remove("burger-isActive");
  });
});
