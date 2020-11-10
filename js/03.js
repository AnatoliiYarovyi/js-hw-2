const findLongestWord = function (string = '') {
  const masString = string.split(' ');
  // console.log(masString);
  let longestWord = masString[0];
  // console.log(longestWord);
  for (let i = 1; i < masString.length; i += 1) {
    if (longestWord.length < masString[i].length) {
      longestWord = masString[i];
    }
  }
  return longestWord;
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// 'jumped'

console.log(findLongestWord('Google do a roll'));
// 'Google'

console.log(findLongestWord('May the force be with you'));
// 'force'

// -------------------------------------------------------------------------------------------------
// ========================= Задача 2-3 ====================
// Поиск самого длинного слово в строке с пробелами
// Напиши функцию findLongestWord(string = ""), которая принимает параметром произвольную строку
// (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.
