const points = document.getElementById('points');
const godlins = document.getElementById('godlins');

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
        this.randomGoblin();
    }

    randomGoblin() {
        let hitGoblin = -1;
        let wingClick = 0;
        const cellList = document.querySelectorAll('.cell');
        let lastIndex = 0;
        const max = this.board ** 2 - 1;
        const interval = setInterval(() => {
            let index = Math.floor(Math.random() * (this.board + 1));
            if (index === lastIndex) {
                index += 1;
                if (index >= max) {
                    index = 0;
                }
            }
            cellList[lastIndex].innerHTML = '';
            cellList[index].innerHTML = '<img src="goblin.png">';
            // cellList[index].classList.add('img');
            lastIndex = index;

            hitGoblin++;
            godlins.innerText = `Пропущено гоблинов ${hitGoblin}`;
            if (hitGoblin === 5) {
                alert(`Игра окончена, пропущено ${hitGoblin} гоблинов `);
                clearInterval(interval);
                cellList.item(lastIndex).innerHTML = ' ';
            }
        }, 1000);

        document.addEventListener('click', (event) => {
            const eventTarget = event.target;
            console.log(eventTarget)

            if (eventTarget.closest('img')) {
                // console.log('Попал')
                wingClick++;
                hitGoblin--;
                console.log(wingClick)
                points.innerText = `Баллов ${wingClick}`;
                cellList.item(lastIndex).innerHTML = ' ';
            }
            // else {
            //     console.log('Промах')
            // }
        });
    }
}