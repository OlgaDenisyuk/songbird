export default function find(arr, value) {

    for (var i = 0; i < 6; i++){
        for (var j = 0; j < 6; j++){
            if (arr[i][j].name == value)
                return [i, j];
            }
        }
    }