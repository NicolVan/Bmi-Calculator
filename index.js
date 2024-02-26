
function bmiResult(){
    let button = document.querySelector("#btm");
    let height = parseInt(document.querySelector("#height").value);
    let weight = parseInt(document.querySelector("#weight").value);
    let result = document.querySelector("#result");


    if(height === "" || isNaN(height))
    result.innerHTML = "Provide a correct value";
    else if(weight === "" || isNaN(weight))
    result.innerHTML = "Provide a correct value";
    else{
         let bmi = ((weight / (height*height)) * 10000 ).toFixed(2);
         console.log(bmi);

         if (bmi <= 18.49)result.innerHTML = "Podvyziva" + " " + bmi;
         else if(bmi > 18.50 &&  bmi <= 24.99)result.innerHTML = "Normalna hmotnost" + " " + bmi;
         else if(bmi > 25.00 && bmi <= 29.99)result.innerHTML = "Mierna nadvaha" +" " + bmi;
         else if(bmi >30 && bmi <= 34.99)result.innerHTML = "Obezita 1. stupna" + " " + bmi;
         else if(bmi >35 && bmi <= 39.99)result.innerHTML = "Obezita 2. stupna" + " " + bmi;
         else {
            result.innerHTML= "Obezita 3. stupna" + " " + bmi;
         }



    }




 }

