

let Question1 , Question2 , Question3;
let val1, val2, val3;




const all= document.querySelectorAll(".choice-grid div");
add();



function add(){
    for(const ans of all) 
    ans.addEventListener('click', selezione)
}


function selezione(event){
    const object = event.currentTarget;
    object.classList.remove("deseleziona");
    object.classList.add("seleziona");
    const checkbox = object.querySelector(".checkbox");
    checkbox.src = "images/checked.png";


    switch(object.dataset.questionId){

        case "one":

            Question1 = object.dataset.questionId;
            val1 = object.dataset.choiceId;
            break;

        case "two":

            Question2 = object.dataset.questionId;
            val2 = object.dataset.choiceId;
            break;

        case "three":

            Question3 = object.dataset.questionId;
            val3 = object.dataset.choiceId;
            break;

    }

    result_p(object.dataset.questionId, object.dataset.choiceId);

}

function result_p(Id, Val) {

    for(const ans of all) {

        if(ans.dataset.questionId == Id && ans.dataset.choiceId != Val) {

            ans.classList.remove("seleziona");

            ans.classList.add("deseleziona");

            ans.querySelector(".checkbox").src = "images/unchecked.png";

        }

    }



    q_Completed();

}


function q_Completed(){
    if(Question1 && Question2 && Question3){
        for(let ans of all)
        ans.removeEventListener('click',selezione);

        if(val1 === val2 || val1 === val3) f_result(1);
        else if(val2 === val1 || val2 === val3) f_result(2);
        else if(val1 !== val2 && val2 !== val3)f_result(3);
    }
}


const Final_A = document.querySelector("#Final_Answers");
const reset_q = Final_A.querySelector("button");
reset_q.addEventListener("click", restart);

function f_result(v){
    Final_A.classList.remove('hidden');
    if(v === 2){
        Final_A.querySelector("h1").textContent = RESULTS_MAP[val2].title;
        Final_A.querySelector("p").textContent = RESULTS_MAP[val2].contents;
    }
    else{
        Final_A.querySelector("h1").textContent =  RESULTS_MAP[val1].title;
        Final_A.querySelector("p").textContent =  RESULTS_MAP[val1].contents;
    }

}

function restart(){
    add();
    Question1= undefined; Question2=undefined; Question3=undefined;
    for(let ans of all){
        ans.classList.remove("seleziona");
        ans.classList.remove("deseleziona");
        ans.querySelector(".checkbox").src="images/unchecked.png";
        Final_A.classList.add("hidden");


        window.scrollTo(0,0);
    }



}