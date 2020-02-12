export default function voice(arr, value) {

    for (var i = 0; i < 6; i++){
        for (var j = 0; j < 6; j++){
            if (arr[i][j].audio == value)
                return [i, j];
            }
        }
    }