var bod = document.getElementById('body');
var colorGot = document.getElementById('colorgiven');
var clickbtn = document.getElementById('clickme');


var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9' , 'a', 'b', 'c', 'd', 'e', 'f'];

function randomValue(items){
     return items[Math.floor(Math.random()*numbers.length)]
}



clickbtn.addEventListener('click',function(){
    var hexValue = '';
    for (var i = 0; i < 6; i++){
        hexValue = hexValue + randomValue(numbers);
    }
    colorGot.innerHTML = '#' + hexValue;
    colorGot.style.color = '#' + hexValue;
    bod.style.backgroundColor = '#' + hexValue;
})



