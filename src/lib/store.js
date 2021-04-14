import { writable } from 'svelte/store';

class Game {
  constructor() {
    this.score = writable(12);
    this.picked = writable(null);
    this.housePicked = null;
  }

  generateHousePicked() {
    const randomValue = Math.floor(Math.random() * 3 + 1);

    switch (randomValue) {
      case 1:
        this.housePicked = 'rock';
        break;
      case 2:
        this.housePicked = 'paper';
        break;
      case 3:
        this.housePicked = 'scissors';
        break;
    }
  }

  get result() {
    let picked;

    this.picked.subscribe(value => (picked = value));

    if (
      (picked === 'paper' && this.housePicked === 'rock') ||
      (picked === 'rock' && this.housePicked === 'scissors') ||
      (picked === 'scissors' && this.housePicked === 'paper')
    ) {
      setTimeout(() => {
        this.score.update(value => {
          let score = value + 1;

          localStorage.setItem('score', score);

          return score;
        });
      }, 1000);

      return 'you win';
    }

    if (
      (picked === 'paper' && this.housePicked === 'scissors') ||
      (picked === 'rock' && this.housePicked === 'paper') ||
      (picked === 'scissors' && this.housePicked === 'rock')
    ) {
      setTimeout(() => {
        this.score.update(value => {
          let score = value - 1;

          localStorage.setItem('score', score);

          return score;
        });
      }, 1000);
      return 'you lose';
    }

    return 'draw';
  }
}

export const game = new Game();
