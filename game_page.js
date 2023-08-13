


// The following page is UNDER CONSTRUCTION



mathematician1_name=localStorage.getItem('mathematician1_name');
mathematician2_name = localStorage.getItem('mathematician2_name');

mathematician1_score = 0;
mathematician2_score = 0;

document.getElementById('mathematician1_name').innerHTML = mathematician1_name + ":" ;
document.getElementById('mathematician2_name').innerHTML = mathematician2_name + ":" ;

document.getElementById('mathematician1_score').innerHTML = mathematician1_score ; 
document.getElementById('mathematician2_score').innerHTML = mathematician2_score ;

document.getElementById('player_question').innerHTML = "question turn -" + mathematician1_name ;
document.getElementById('player_answer').innerHTML = "answer turn - " + mathematician2_name ;


function send()
{
    get_word=document.getElementById('word').value ;
    word = get_word.toLowerCase();
    console.log('word in lower case =' +word);

     

    length_divide_2 = Math.floor(word.length/2);
    charAt2 = word.charAt(length_divide_2);
    console.log(charAt2);

    length_minus_1 = word.length - 1;
    charAt3 = word.charAt(length_minus_1);
    console.log(charAt3) ;

    
    remove_charAt2 = remove_charAt1.replace(charAt2 , '_');
    remove_charAt3 = remove_charAt2.replace(charAt3 , '_');
    console.log(remove_charAt3);

    question_word = "<h4 id = 'word display' > Q." + remove_charAt3 + " </h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_word + input_box + check_button ;
    document.getElementById('output').innerHTML = row ;
    document.getElementById('word').value = "" ;


    


}


function check()
{
    get_answer = document.getElementById('input_check_box').value;
    answer = get_answer.toLowerCase();
    console.log('answer in lower case-' + answer);
    if (answer == word) {
        if (answer_turn == "mathematician1") {
            mathematician1_score = mathematician1_score + 1 ;
            document.getElementById('mathematician1_score').innerHTML = mathematician1_score;
        }

        else {
            mathematician2_score = mathematician2_score + 1 ;
            document.getElementById('mathematician2_score').innerHTML = mathematician2_score ;
        }
    }

    if (question_turn == "mathematician1") {
        question_turn = "mathematician2"
        document.getElementById('player_question').innerHTML = "question turn-" + mathematician2_name ;
    }

    else {
         question_turn = "mathematician1"
         document.getElementById('player_question').innerHTML = "question turn-" + mathematician1_name ;
    }

    if (answer_turn == "mathematician1") {
        answer_turn = "mathematician2"
        document.getElementById('player_answer').innerHTML = 'answer turn-' + mathematician2_name ;
    }

    else {
        answer_turn = "mathematician1"
        document.getElementById('player_answer').innerHTML = "answer turn-" + mathematician1_name ;
    }
    document.getElementById("output").innerHTML = "" ;
}