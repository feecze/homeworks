let letters = [
    '', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', ''
]
function chess() {
    let table = document.createElement('table');
    for (i = 0; i < 10; i++) {
        let tr = document.createElement('tr');
        for(j = 0; j < 10; j++) {
            let td = document.createElement('td');
            tr.appendChild(td);
                if (i !== 0 && i !== 9) {
                    if (j !== 0 && j !== 9) {
                        if (j % 2 === 0 && i % 2 === 0) {
                            blackSquare(td);
                        }else if(j % 2 !== 0 && i % 2 !== 0) {
                            blackSquare(td);
                        }
                    }else {
                        appendValue(td, letters[i]);
                    }
                }else {
                    if (j !== 0 && j !== 9) {
                        appendValue(td, j);
                    }
                }
        }
        table.appendChild(tr);
    }
    document.body.appendChild(table);
}
function appendValue(node, value) {
    node.textContent = value;
    node.classList.add('chess_title');
}
function blackSquare(node) {
    node.classList.add('black_square')
}
chess();
