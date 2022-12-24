export default class NewField {
  constructor(board) {
    this.board = board;
  }

  start() {
    const plaingField = document.querySelector('.board');
    for (let i = 0; i < this.board ** 2; i += 1) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      plaingField.prepend(cell);
    }
    const cellList = document.getElementsByClassName('cell');
    let index;
    let lastIndex = 0;
    const min = 0;
    const max = this.board ** 2 - 1;
    setInterval(() => {
      index = Math.floor(min + Math.random() * (max + 1 - min));
      if (index === lastIndex) {
        index += 1;
        if (index >= max) {
          index = 0;
        }
      }
      cellList[index].innerHTML = '<img src="goblin.png">';
      cellList[lastIndex].innerHTML = '';
      lastIndex = index;
    }, 1000);
  }
}

const play = new NewField(4);
play.start();
