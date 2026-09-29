let chart = null;



function num(id){

return Number(
document.getElementById(id).value
)
||0;

}



function showResult(){


let english =
num("c_eng")
+
num("d_eng");



let math =
num("c_math1")
+
num("c_math2")
+
num("d_math");



let japanese =
num("c_jap")
+
num("d_jap");



let science =
num("c_sci1")
+
num("c_sci2");



let society =
num("c_soc1")
+
num("c_soc2");



let info =
num("c_info");



let total =
english
+
math
+
japanese
+
science
+
society
+
info;



document.getElementById("total")
.innerHTML =
"総合得点　"
+
total;



if(chart){

chart.destroy();

}



chart =
new Chart(

document.getElementById("chart"),

{

type:"pie",

data:{

labels:[

"英語",
"数学",
"国語",
"理科",
"社会",
"情報"

],

datasets:[{

data:[

english,
math,
japanese,
science,
society,
info

]


}]

}


}

);


}




function resetForm(){


document
.querySelectorAll("input")
.forEach(

function(input){

input.value="";

}

);



document.getElementById("total")
.innerHTML="";



if(chart){

chart.destroy();

chart=null;

}


}