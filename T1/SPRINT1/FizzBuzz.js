const numero = 10;

for(const i = 0; i < numero; i++ ){
    if(numero % 3 === 0){
        if(numero % 5 === 0){
            console.log("FizzBuzz ,")
        }else{
            console.log("Fizz ,")
        };
    }else if(numero % 5 === 0){
        console.log("Buzz ,");
    }else{
        console.log(numero + " ,");
    }
};