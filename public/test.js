const array = [5, 7, 8, 1, 4, 3, 2];

function absentNumber(array) {
    // let result;
    const length = array.length;
    const fullSumm = (length * (length + 1)) / 2;
    const summ = array.reduce((p, c) => p + c);
    console.log(fullSumm, summ, summ - fullSumm);
    return summ - fullSumm;
}