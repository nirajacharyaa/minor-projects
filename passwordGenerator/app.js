// selectors
const result = document.querySelector(".result");
const passLength = document.querySelector(".length");
const randomNumber = document.querySelector(".number");
const randomSymbol = document.querySelector(".symbol");
const randomLowerCase = document.querySelector(".lowerCase");
const randomUpperCase = document.querySelector(".upperCase");
const generateBtn = document.querySelector(".generate");
const copy = document.querySelector(".copy");

// eventListeners

generateBtn.addEventListener("click", () => {
  const length = +passLength.value;
  const hasLower = randomLowerCase.checked;
  const hasUpper = randomUpperCase.checked;
  const hasNumber = randomNumber.checked;
  const hasSymbol = randomSymbol.checked;

  result.innerText = generatePassword(
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol,
    length
  );
});

const generatePassword = (lower, upper, number, symbol, length) => {
  let password = "";
  const typesCount = lower + upper + symbol + number;
  console.log(typesCount);
  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
  );
  console.log("typesArr: ", typesArr);
  if (typesCount == 0) {
    return "";
  }
  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach((type) => {
      const funcName = Object.keys(type)[0];
      console.log("funcName:", funcName);
      password += randomFunction[funcName]();
    });
  }
};

// generators function

const getRandomLower = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

const getRandomUpper = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};
const getRandomNumber = () => {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};

const getRandomSymbol = () => {
  const symbols = "!@#$%&*{}[].,=<>^";
  return symbols[Math.floor(Math.random() * 18)];
};

// object

const randomFunction = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};
