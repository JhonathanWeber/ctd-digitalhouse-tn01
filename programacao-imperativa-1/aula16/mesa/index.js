// TN01 PI - Jhonathan Weber, Alisson Pinho, Jose Neto, Felipe Cabuto

let fizzBuzz = (n1, n2) => {
  for (let i = 1; i <= 100; i++) {
    if ((i % n1 == 0) && !(i % n2 == 0)) {
      console.log(`${i} - Fizz`);
    } else if (!(i % n1 == 0) && (i % n2 == 0)) {
      console.log(`${i} - Buzz`);
    } else if (i % n1 == 0 && i % n2 == 0) {
      console.log(`${i} - FizzBuzz`);

    } else {
        console.log(i);
    }
  }
};

fizzBuzz(3, 5);
