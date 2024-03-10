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
const totalPrice = document.querySelector(".total__price");

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

const sumArr = [
  {
    product: 0,
    order: 0,
    package: 0,
    accounting: 0,
    terminal: 0,
  },
];

const inputSumHandler = (inputType, sumCategory, priceCategory) => {
  if (inputType.value >= 0 && Number.isInteger(+inputType.value)) {
    sumCategory.classList.add("open");
    sumCategory.children[1].innerText = `${inputType.value} * ${prices[priceCategory]}$`;
    sumCategory.children[2].innerText = `${
      inputType.value * prices[priceCategory]
    }$`;
    sumArr[0][`${priceCategory}`] = inputType.value * prices[priceCategory];
    totalSumHandler();
  }

  if (inputType.value.length === 0 && sumCategory.classList.contains("open")) {
    sumCategory.classList.remove("open");
  }
};

productsInput.addEventListener("input", () => {
  inputSumHandler(productsInput, productsSum, "product");
});
ordersInput.addEventListener("input", () => {
  inputSumHandler(ordersInput, ordersSum, "order");
});

//SELECT HANDLERS
const selectHandler = (e) => {
  selectPackage.classList.toggle("open");
};

const selectOptionHandler = (e) => {
  const packageType = e.target.getAttribute("data-value");
  selectInput.innerText = e.target.innerText;
  packageSum.children[1].innerText = e.target.innerText;
  packageSum.children[2].innerText = `${prices[`${packageType}`]}$`;
  sumArr[0].package = prices[`${packageType}`];
  totalSumHandler();
  packageSum.classList.add("open");
};

selectPackage.addEventListener("click", selectHandler);
selectDropdown.addEventListener("click", selectOptionHandler);

//CHECKBOX HANDLERS

const checkboxHandler = (e, checkboxType, checkboxName) => {
  if (e.target.checked) {
    checkboxType.classList.add("open");
    checkboxType.children[1].innerText = `${
      prices[`${e.target.getAttribute("id")}`]
    }$`;
    sumArr[0][`${checkboxName}`] = prices[`${checkboxName}`];
    totalSumHandler();
  } else {
    checkboxType.classList.remove("open");
    sumArr[0][`${checkboxName}`] = 0;
    totalSumHandler();
  }
};

accountInput.addEventListener("change", (e) => {
  checkboxHandler(e, accountSum, "accounting");
});
terminalInput.addEventListener("change", (e) => {
  checkboxHandler(e, terminalSum, "terminal");
});

//TOTAL SUM
const totalSumHandler = () => {
  let totalProductsPrice =
    sumArr[0].product +
    sumArr[0].order +
    sumArr[0].package +
    sumArr[0].accounting +
    sumArr[0].terminal;
  if (totalProductsPrice !== 0) {
    totalSum.classList.add("open");
    totalPrice.innerText = `${totalProductsPrice}$`;
  } else {
    totalSum.classList.remove("open");
  }

  console.log(totalProductsPrice);
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
