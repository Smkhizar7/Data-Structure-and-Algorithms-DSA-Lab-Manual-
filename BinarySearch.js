//  Binary Search on sorted array
function find(arr,value){
    var Beg=0; End = (arr.length - 1),mid = 0;
    while(Beg<=End){
        mid = Math.floor((Beg+End)/2);
        if(value == arr[mid]){
            return mid;
        }
        else if(value > arr[mid]){
            Beg = mid +1;
        }
        else if(value < arr[mid]){
            End = mid - 1;
        }
    }
    return "Not Found!";
}
var array = [];
var len = +prompt("Enter length of Array");
for(var i = 0; i < len;i++){
    var num = +prompt("Enter value of Index : "+i);
    array[i] = num;
}
array.sort();
var a = +prompt("Enter number to find");
var b = find(array,a);
console.log(b);