


var uguale = document.getElementById("uguale");
var cls = document.getElementById("cls");

cls.addEventListener("click",function(){

    document.getElementById("risultato").innerHTML = " ";
})

uguale.addEventListener("click",function(){
    
    var num1 = document.getElementById("numero1").value;
    var num2 = document.getElementById("numero2").value;
    var oper = document.getElementsByName("op");

    console.log(num1);
    console.log(num2);

    for(let i=0; i<oper.length;i++){
       
        if(oper[i].checked){
           
                if(oper[i].id=="addizione"){
                   
                    num1 = parseInt(num1);
                    num2 = parseInt(num2);
                    let ris = num1+num2;
                    document.getElementById("risultato").innerHTML = ris;
                    
                }
                else  if(oper[i].id=="sottrazione"){

                    num1 = parseInt(num1);
                    num2 = parseInt(num2);
                    let ris = num1-num2;
                    document.getElementById("risultato").innerHTML = ris;
                }
                else if(oper[i].id=="moltiplicazione"){

                    num1 = parseInt(num1);
                    num2 = parseInt(num2);
                    let ris = num1*num2;
                    document.getElementById("risultato").innerHTML = ris;
                }
                else if(oper[i].id=="divisione"){

                    num1 = parseInt(num1);
                    num2 = parseInt(num2);
                    let ris = num1/num2;
                    document.getElementById("risultato").innerHTML = ris;
                }
        }
    }
})



