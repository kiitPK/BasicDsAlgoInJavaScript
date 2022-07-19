function outer() {
  let counter = 0;
  function inner() {
    counter++;
    console.log(counter);
  }
  return inner;
}

const cn = outer();
cn();
cn();
cn();
cn();
 