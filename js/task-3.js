// task-3

function getElementWidth(content, padding, border) {
  const a = parseFloat(content); // Так я перезаписав змінні (parseFloat краще, бо не ціле число)
  const b = parseFloat(padding); //
  const c = parseFloat(border); //

  return a + b * 2 + c * 2; // Підставив нові змінні
}

console.log(getElementWidth('50px', '8px', '4px')); // 74
console.log(getElementWidth('60px', '12px', '8.5px')); // 101
console.log(getElementWidth('200px', '0px', '0px')); // 200
