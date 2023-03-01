console.log("hey");

var mt1_in = document.getElementById("mt1_text");
var mt2_in = document.getElementById("mt2_text");
var final_in = document.getElementById("final_text");
var quizes_in = document.getElementById("quizes_text");
var lab_in = document.getElementById("lab_text");

let mt1=0.0;
let mt2=0.0; 
let final=0.0;
let quizes=0.0;
let lab=0.0;


mt1_in.onchange = function(){
    
    mt1 = Number(mt1_in.value);
    document.getElementById("total_text").innerHTML = Phys101_102(mt1, mt2, final, quizes, lab);
}
mt2_in.onchange = function(){
    
    mt2 = Number(mt2_in.value);
    document.getElementById("total_text").innerHTML = Phys101_102(mt1, mt2, final, quizes, lab);
}
final_in.onchange = function(){
    
    final = Number(final_in.value);
    document.getElementById("total_text").innerHTML = Phys101_102(mt1, mt2, final, quizes, lab);
}
quizes_in.onchange = function(){
    
    quizes = Number(quizes_in.value);
    document.getElementById("total_text").innerHTML = Phys101_102(mt1, mt2, final, quizes, lab);
}
lab_in.onchange = function(){
    
    lab = Number(lab_in.value);
    document.getElementById("total_text").innerHTML = Phys101_102(mt1, mt2, final, quizes, lab);
}



function Phys101_102(/*mt1=0.0, mt2=0.0, final=0.0, quizes=0.0, lab=0.0*/) {
    const MT_VAL = 20.0/100.0;
    const FINAL_VAL = 25.0/100;
    const LAB_VAL = 20.0/100;
    const QUIZES_VAL = 15.0/10;
    if(arguments.length == 5){
        return MT_VAL*(arguments[0]+arguments[1]) + FINAL_VAL*arguments[2] + LAB_VAL*arguments[4] + QUIZES_VAL*arguments[3];
        //return MT_VAL*(mt1+mt2) + FINAL_VAL*final + LAB_VAL*lab + QUIZES_VAL*quizes;
    }
    else if(arguments.length == 10){
        return MT_VAL*(arguments[0]+arguments[1]) + FINAL_VAL*arguments[2] + LAB_VAL*Phys101_102_Lab(arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9]) + QUIZES_VAL*arguments[3];
    }

    
    
}
/*function Phys101_102(mt1=0.0, mt2=0, final=0, quizes=0, exp1=0, exp2=0, exp3=0, proposal=0, report=0, vid=0) {
    const MT_VAL = 20.0/100;
    const FINAL_VAL = 25;
    const LAB_VAL = 20;
    const QUIZES_VAL = 15;
    console.log(typeof MT_VAL + " " + MT_VAL );
    return MT_VAL*(mt1+mt2) + FINAL_VAL*final + LAB_VAL*Phys101_102_Lab(exp1, exp2, exp3, proposal, report, vid) + QUIZES_VAL*quizes;
}*/
function Phys101_102_Lab( exp1=0.0, exp2=0.0, exp3=0.0, proposal=0.0, report=0.0, vid=0.0) {
    const EXP_VAL = 15/100.0;
    const PROPOSAL_VAL = 15/100.0;
    const REPORT_VAL = 30/100.0;
    const VID_VAL = 10/100.0;

    return (exp1+exp2+exp3)*EXP_VAL + PROPOSAL_VAL*proposal + REPORT_VAL*report + vid*VID_VAL;
    
}