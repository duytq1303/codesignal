function matrixElementsSum(matrix) {
    let result = 0;
    for (let i = 0; i < matrix[0].length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            if (matrix[j][i] === 0) {
                break;
            }
            console.log(j)
            result += matrix[j][i];
        }
    }
    return result;
}
