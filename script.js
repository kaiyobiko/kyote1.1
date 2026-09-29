let chart = null;



function num(id){

return Number(
document.getElementById(id).value
)
||0;

}




let currentTotal = 0;




function showResult(){


let scores = [


{
name:"英語",
value:
num("c_eng")
+
num("d_eng")
},


{
name:"数学",
value:
num("c_math1")
+
num("c_math2")
+
num("d_math")
},


{
name:"国語",
value:
num("c_jap")
+
num("d_jap")
},


{
name:"理科①",
value:
num("c_sci1")
+
num("d_sci1")
},


{
name:"理科②",
value:
num("c_sci2")
+
num("d_sci2")
},


{
name:"社会①",
value:
num("c_soc1")
+
num("d_soc1")
},


{
name:"社会②",
value:
num("c_soc2")
+
num("d_soc2")
},


{
name:"情報",
value:
num("c_info")
}


];




// 合計点計算

currentTotal = 0;


scores.forEach(function(item){

currentTotal += item.value;

});



document.getElementById("total")
.innerHTML =
"総合得点　"
+
currentTotal
+
"点";



// 点数順に並び替え

scores.sort(

function(a,b){

return b.value-a.value;

}

);




// 円グラフ

if(chart){

chart.destroy();

}



chart =
new Chart(

document.getElementById("chart"),

{

type:"pie",

data:{

labels:

scores.map(function(item){

return item.name;

}),


datasets:[{

data:

scores.map(function(item){

return item.value;

})

}]

}

}

);


}




function showRate(){


let minimum =
num("minimum");



if(minimum<=0){

document.getElementById("rate")
.innerHTML =
"合格最低点を入力してください";

return;

}



let rate =
(currentTotal / minimum)
*100;



document.getElementById("rate")
.innerHTML =
"得点率　"
+
rate.toFixed(1)
+
"%";


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


document.getElementById("rate")
.innerHTML="";



if(chart){

chart.destroy();

chart=null;

}


currentTotal=0;


}
