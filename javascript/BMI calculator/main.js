const form = document.getElementById("myForm");


form.addEventListener("submit", (e)=>{
    e.preventDefault();

    const formData = new FormData(form);
    const weight = parseFloat( formData.get('weight'))
    const height = parseFloat(formData.get('height'));

    const result = weight/(height*height)

    const resultArea = document.getElementById('result');

 
    if(result < 18.5){
        resultArea.textContent = 'You are Underweight'
    }else if(result >= 18.5 && result <=24.9){
        resultArea.textContent = 'You are Normal Weight'
    }else if(result >= 24.9 && result <=29){
        resultArea.textContent = 'You are Overweight'
    }else{
        resultArea.textContent = 'You are Obese'
    }
    
})