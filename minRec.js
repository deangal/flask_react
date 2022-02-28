let arr = []

function randomArr(){

    for (let i = 0; i < 10; i++){
        arr.push(Math.floor(Math.random() * 30))
       
    }
    console.log(arr);
}
randomArr()

function minRec(randomArr,smallest){
    
    if(randomArr.length == 0 ){
       
        console.log("smallest value in array: ",smallest);
        return
    } 
   let first = randomArr.shift()
   if(first < smallest || smallest == undefined){
       smallest = first
   } 

   minRec(randomArr,smallest)
}

minRec(arr)
