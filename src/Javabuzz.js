class Javabuzz {
  isDivisibleByThree (number) {
    return this._isDivisibleBy(number, 3)
  }

  isDivisibleByFive (number) {
    return this._isDivisibleBy(number, 5)
  }

  isDivisibleByFifteen (number) {
    return this._isDivisibleBy(number, 15)
  }

  _isDivisibleBy (number, divisor) {
    return (number % divisor === 0)
  }

  says (number) {
    if (this.isDivisibleByFifteen(number)) {
      return 'Javabuzz'
    }

    if (this.isDivisibleByThree(number)) {
      return 'Java'
    }

    if (this.isDivisibleByFive(number)) {
      return 'Buzz'
    }
    return number
  }
}

const javaBuzz = new Javabuzz()

for (let i = 1; i <= 100; i++) {
  console.log(javaBuzz.says(i))
}
