function fibonacci(n) {
  console.log(`-----${n}-----`);
  if (n === 0) return [0];
  if (n === 1) return [0, 1];

  const previous = fibonacci(n - 1);
  console.log(`kocak: ${previous}`);
  return [...previous, previous[previous.length - 1] + previous[previous.length - 2]];
}

const numberForFibonacci = 10;
console.log(`Deret Fibonacci hingga elemen ${numberForFibonacci} adalah:`);
for (let i = 0; i <= numberForFibonacci; i++) {
  fibonacci(i);
}


// Jangan hapus kode di bawah ini!
export default fibonacci;
