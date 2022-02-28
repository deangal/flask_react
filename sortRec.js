let arr = []

function randomArr(){

    for (let i = 0; i < 10; i++){
        arr.push(Math.floor(Math.random() * 30))
       
    }
    console.log(arr);
}
randomArr()

function sortRec(randomArr,sorted){
    if(randomArr.length == 0 ){
       
        console.log(sorted);
        return
    } 
    
    let min = Math.min(...randomArr); 
    randomArr.splice(randomArr.indexOf(min),1)
    sorted.push(min)
  

   sortRec(randomArr,sorted)
}
    


sortRec(arr,[])