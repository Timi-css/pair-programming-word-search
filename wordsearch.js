const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map((ls) => ls.join(""));
  //   console.log(horizontalJoin);
  for (l of horizontalJoin) {
    if (horizontalJoin.includes(word)) {
      return true;
    }
  }
  let array = [];
  for (let i = 0; i < letters[0].length; i++) {
    let col = [];
    for (let j = 0; j < letters.length; j++) {
      col.push(letters[j][i]);
      //   const verticalLetters = letters[i][j];
      //   col.push(verticalLetters);
    }
    array.push(col);
  }

  for (let index in array) {
    const arrayJoin = array[index].join("");
    // console.log(arrayJoin, word);
    if (arrayJoin === word) {
      return true;
    }
  }
  return false;
};

module.exports = wordSearch;

//   wordSearch(
//     [
//       ["A", "W", "C", "F", "Q", "U", "A", "L"], // horizontal - AWCFQUAL vertical - ASYHWBUOE
//       ["S", "E", "I", "N", "F", "E", "L", "D"], //SEINFELD
//       ["Y", "F", "C", "F", "Q", "U", "A", "L"], //YFCFQUA
//       ["H", "M", "J", "T", "E", "V", "R", "G"], //HMJTEVRG
//       ["W", "H", "C", "S", "Y", "E", "R", "L"], //WHCSYERL
//       ["B", "F", "R", "E", "N", "E", "Y", "B"], //BFRENEYB
//       ["U", "B", "T", "W", "A", "P", "A", "I"], //UBTWAPAI
//       ["O", "D", "C", "A", "K", "U", "A", "S"], //ODCAKUAS
//       ["E", "Z", "K", "F", "Q", "U", "A", "L"], //EZKFQUAL
//     ],
//     "WEFMHFBDZ"
//   );
