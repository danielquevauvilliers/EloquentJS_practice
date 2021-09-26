let size = 12;
let firstRow = "";
let secondRow = "";
do {
    firstRow += " ";
    secondRow += "#";
    if (firstRow.length >= size) {
        break;
    }
    firstRow += "#";
    secondRow += " ";
} while (firstRow.length < size);

for (let i = 0; i < size; i++) {
    if (i % 2 === 0) {
        console.log(firstRow);
    } else {
        console.log(secondRow);
    }
}