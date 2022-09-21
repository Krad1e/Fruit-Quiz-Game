var count  = 1;
var value = document.getElementById("apple").value;
var fruitName = "Apple";

function ifThen(answer){
    if(value == answer){
        document.body.style.backgroundColor = "green";
        document.getElementById("con").innerHTML = "Correct. " + fruitName;
    } else {
        document.body.style.backgroundColor = "red";
        document.getElementById("con").innerHTML = "False. This a " + fruitName;
    }
}

function resetPage(){
    document.body.style.backgroundColor = "white";
    document.getElementById("con").innerHTML = "";
    if(count == 0){
        document.getElementById("bgImg").src = "images/apple.jpg";
        fruitName = "Apple";
        value++
    }
    else if(count == 1) {
        document.getElementById("bgImg").src = "images/banana.jpg";
        fruitName = "Banana";
        value++
    }
    else if(count == 2){
        document.getElementById("bgImg").src = "images/blueberries.jpg";
        fruitName = "Blueberry";
        value++
    }
    else if(count == 3) {
        document.getElementById("bgImg").src = "images/pineapple.jpg";
        fruitName = "Pineapple";
        value++
    }
    else if(count > 3){
        count = 0;
        value = document.getElementById("apple").value;
        document.getElementById("bgImg").src = "images/apple.jpg";
        fruitName = "Apple";
    }
    count++;
}
