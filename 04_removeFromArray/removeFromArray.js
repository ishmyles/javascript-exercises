const removeFromArray = function (array, ...removeList) {
  const notInRemoveList = (num) => !removeList.includes(num);
  return array.filter(notInRemoveList);
};

// Do not edit below this line
module.exports = removeFromArray;
