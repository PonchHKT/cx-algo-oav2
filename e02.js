function SortByInsertion(indexArr) {
    let o = indexArr.length;
        for (let i = 1; i < o; i++) {
            
            let current = indexArr[i];
            let j = i-1; 
            while ((j > -1) && (current < indexArr[j])) {
                indexArr[j+1] = indexArr[j];
                j--;
            }
            indexArr[j+1] = current;
        }
    return indexArr;
}

let indexArr = [8, 5, 2, 7, 4, 6, 1, 3];
SortByInsertion(indexArr);
console.log(indexArr);