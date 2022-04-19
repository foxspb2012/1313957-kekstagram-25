const getRandomPositiveInteger = function (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

getRandomPositiveInteger(5, 57);

const checkStringLength = function (stringChecked, maxLength) {
  return stringChecked.length >= maxLength;
};

checkStringLength('Посмотрим работу данной функции со строкой длиной 52', 45);

