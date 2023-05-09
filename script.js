

let tips=[];
let total=[];

let tipsValue,totalAmount;

function calcTip(tip){
    
    if(tip >50 && tip <300){
        return tip*0.15;
    }
    else{
        return tip*0.20;
    }

}

const bills=[22,295,176,440,37,105,10,1100,86,52]


for(let i=0; i<bills.length;i++){


   const tip = calcTip(bills[i])

   tips.push(tip);

   total.push(tip + bills[i])
    

}

console.log(bills,tips,total);


// the function calcAverage is to calculate the average of any given array

function calcAverage(arr){

    let totalSum=0;

    for(let i=0;i<arr.length;i++){
        totalSum = totalSum + arr[i]; 
    }

    console.log('totalSum',totalSum)

        return totalSum/arr.length;

}

let averageValue = calcAverage(bills);

console.log("checkValue",averageValue);