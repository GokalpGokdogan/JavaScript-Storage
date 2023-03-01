console.log("hey");

var mt1_in = document.getElementById("mt1_text");
var final_in = document.getElementById("final_text");
var project_in = document.getElementById("project_text");
var hw_in = document.getElementById("hw_text");
var lab_in = document.getElementById("lab_text");

let mt1=0.0;
let final=0.0;
let project=0.0;
let hw=0.0;
let lab = 0.0


mt1_in.onchange = function(){
    
    mt1 = Number(mt1_in.value);
    let score = Overall(mt1, final, lab, project, hw).toFixed(1);
    document.getElementById("total_text").innerHTML = score;
}
final_in.onchange = function(){
    
    final = Number(final_in.value);
    let score = Overall(mt1, final, lab, project, hw).toFixed(1);
    document.getElementById("total_text").innerHTML = score;
}
project_in.onchange = function(){
    
    project = Number(project_in.value);
    let score = Overall(mt1, final, lab, project, hw).toFixed(1);
    document.getElementById("total_text").innerHTML = score;
}

hw_in.onchange = function(){
    
    hw = Number(hw_in.value);
    let score = Overall(mt1, final, lab, project, hw).toFixed(1);
    document.getElementById("total_text").innerHTML = score;
}

lab_in.onchange = function(){
    
    lab = Number(lab_in.value);
    let score = Overall(mt1, final, lab, project, hw).toFixed(1);
    document.getElementById("total_text").innerHTML = score;
    
}


function Overall(/*mt1=0.0, mt2=0.0, final=0.0, quizes=0.0, lab=0.0*/) {
    const MT_VAL = 25.0/100.0;
    const FINAL_VAL = 25.0/100;
    const HW_VAL = 10.0/10;
    const PROJECT_VAL = 25.0/100;
    const LAB_VAL = 15.0/100;
    if(arguments.length == 5){
        return MT_VAL*(arguments[0]+arguments[1]) + LAB_VAL*arguments[2] + PROJECT_VAL*arguments[3] + HW_VAL*arguments[4];
    }
    
    
}