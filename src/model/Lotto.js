import Validator from '../utils/validator.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    Validator.validateLotteryNumbers(numbers);
  }

  getLottoNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
