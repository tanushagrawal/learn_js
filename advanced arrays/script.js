const array = [1, 2, 3, 4, 5]

const squares = array.map((i) => i * i);

const filtered = array.filter((i) => i < 4);

const reduced = array.reduce((accumulator, i) => accumulator + i, 5);