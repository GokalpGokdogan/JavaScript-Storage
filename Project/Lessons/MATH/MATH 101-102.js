console.log("hey");

var mt1_in = document.getElementById("mt1_text");
var mt2_in = document.getElementById("mt2_text");
var final_in = document.getElementById("final_text");
var quizes_in = document.getElementById("quizes_text");
var hw_in = document.getElementById("hw_text");

let mt1=0.0;
let mt2=0.0; 
let final=0.0;
let quizes=0.0;
let hw=0.0;


mt1_in.onchange = function(){
    
    mt1 = Number(mt1_in.value);
    let score = Overall(mt1, mt2, final, quizes, hw).toFixed(1);
    document.getElementById("total_text").innerHTML = score;
    document.getElementById("letter_grade").innerHTML = giveLetterGrade(score);
}
mt2_in.onchange = function(){
    
    mt2 = Number(mt2_in.value);
    let score = Overall(mt1, mt2, final, quizes, hw).toFixed(1);
    document.getElementById("total_text").innerHTML = score;
    document.getElementById("letter_grade").innerHTML = giveLetterGrade(score);
}
final_in.onchange = function(){
    
    final = Number(final_in.value);
    let score = Overall(mt1, mt2, final, quizes, hw).toFixed(1);
    document.getElementById("total_text").innerHTML = score;
    document.getElementById("letter_grade").innerHTML = giveLetterGrade(score);
}
quizes_in.onchange = function(){
    
    quizes = Number(quizes_in.value);
    let score = Overall(mt1, mt2, final, quizes, hw).toFixed(1);
    document.getElementById("total_text").innerHTML = score;
    document.getElementById("letter_grade").innerHTML = giveLetterGrade(score);
}

hw_in.onchange = function(){
    
    hw = Number(hw_in.value);
    let score = Overall(mt1, mt2, final, quizes, hw).toFixed(1);
    document.getElementById("total_text").innerHTML = score;
    document.getElementById("letter_grade").innerHTML = giveLetterGrade(score);
}


function Overall(/*mt1=0.0, mt2=0.0, final=0.0, quizes=0.0, lab=0.0*/) {
    const MT_VAL = 80.0/300.0;
    const FINAL_VAL = 80.0/300;
    const HW_VAL = 10.0/100;
    const QUIZES_VAL = 15.0/10;
    if(arguments.length == 5){
        return MT_VAL*(arguments[0]+arguments[1]) + FINAL_VAL*arguments[2] + HW_VAL*arguments[4] + QUIZES_VAL*arguments[3];
    }
    else if(arguments.length == 10){
        return MT_VAL*(arguments[0]+arguments[1]) + FINAL_VAL*arguments[2] + HW_VAL*Overall(arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9]) + QUIZES_VAL*arguments[3];
    }

    
    
}

function giveLetterGrade(point){
        let x;
        switch(true){
            case point>=80 && point<=100:
                x="A"
                break;
            case point>=75 && point<80:
                x="-A"
                break;
            case point>=70 && point<75:
                x="+B"
                break;
            case point>=65 && point<70:
                x="B"
                break;
            case point>=60 && point<65:
                x="-B"
                break;
            case point>=55 && point<60:
                x="+C"
                break;
            case point>=50 && point<55:
                x="C"
                break;
            case point>=45 && point<50:
                x="-C"
                break;
            case point>=40 && point<45:
                x="+D"
                break;
            case point>=30 && point<40:
                x="D"
                break;
            case point>=0 && point<30:
                x="F"
                break;
            
        }
        x+=".";
        return x;
}

