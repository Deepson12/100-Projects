const input = document.querySelector('input');


const addtoDisplay = (value) => {
    input.value += value;
}

const clearDisplay = ()=>{
    input.value = '';
}

const calculate =() =>{
   try{
    input.value = eval(input.value);
   }catch(error){
    input.value = 'Error';
   }
}