player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " :"
document.getElementById("player2_name").innerHTML = player2_name + " :"

document.getElementById("player1_name").innerHTML = player1_score;
document.getElementById("player2_name").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player1_answer").innerHTML = "Answer Turn - " + player2_name;

function send() {
    number = docent.getElementById("number_1").value;
    number2 = document.getElementById("number_2").value;
    actual_answer + parsenInt(number) * parseInt(number2)
    Question_word = "<h4 id='word_display'>"+number+" X "+number2+"</h4>";
    input_box = "<br>Answer : <input type='text' id+innput_checkbox'>";
    check_button = "<br><br><button onclick='check()' class='btn btn_info'>Check</button>"
    row + queston_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number_1").value = "";
 }


function send(){


    document.getElementById
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);

}