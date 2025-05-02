const inputBlock = document.querySelector(".block");
const searchInput = document.querySelector("#search");
const resultList = document.querySelector("#results");

const inputBtn = document.querySelector("#submit");

const nextBtn = document.querySelector("#next")
const prevBtn = document.querySelector("#prev")


// searchForm.addEventListener("submit", (e)=>{
//     e.preventDefault();
//     dataFetch();
    
// })

let offset = 0;

inputBtn.addEventListener("click", ()=>{
    dataFetch();
})

nextBtn.addEventListener("click", ()=>{
    offset+=10;
    dataFetch();
})

prevBtn.addEventListener("click", ()=>{
    offset-=10;
    dataFetch();
})

const dataFetch = async ()=>{
    let searchValue = searchInput.value.trim();
    const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${searchValue}&offset=${offset}&apiKey=835ef9ffbc054eabbb190fcd8f39b170`)
    const data = await response.json();

    showResult(data.results)


}

const showResult = ( results)=>{
    let html = ''
    results.forEach(result => {
        html += `
         <div>
            <img src="${result.image}" alt="${result.title}">
            <h3>${result.title}</h3>
             
        </div> 
        `
    });

    resultList.innerHTML = html
}


