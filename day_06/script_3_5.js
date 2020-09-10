describe("pow", function () {
  function makeTest(x, n) {
    let expected = x ** n;
    it(`${x} в степени ${n} будет ${expected}`, function () {
      assert.equal(pow(x, n), expected);
    });
  }

  describe("возводит x в степень 3", function () {
    for (let x = 1; x <= 5; x++) {
      makeTest(x, 3);
    }
  });

  describe("возводит x в степень 4", function () {
    for (let x = 1; x <= 5; x++) {
      makeTest(x, 4);
    }
  });
  describe("возводит x в степень 4", function (){
    makeTest(2, 0);
    makeTest(2, -1);
    makeTest(2, ds);
  });
});
