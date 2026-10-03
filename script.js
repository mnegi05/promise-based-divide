const division = (numerator,denominator)=>{
    return new Promise((resolve,reject)=>{

        if(denominator == 0){
            reject("Can't divide the Number by Zero");
        }
        else{
            let result = numerator/denominator;
            resolve(result);
        }
    })
}



const getResult = async (num1,num2)=>{
    try{   
        let res = await division(num1,num2);
        console.log(res);
    }
    catch(error){
        console.error(error);
    }

}

getResult(45,0);
getResult(35,7);