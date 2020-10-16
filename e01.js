function bubblesort(newArray, firstIndex, secondIndex){

    let bubble = newArray[firstIndex]
    newArray[firstIndex] = newArray[secondIndex];
    newArray[secondIndex] = bubble
}
function bubbletri(newArray){
    
    var length = newArray.length,
    i, a, end;
    
    for (i = 0; i < length; i++){
        for (a = 0, end = length-i; a < end; a++){
            if (newArray[a] > newArray[a + 1]){
                bubblesort(newArray, a, a + 1);
            }
        }
    }
    return newArray;
} console.log(bubbletri([1, 9, -8, 2, -3, 20, 16]));