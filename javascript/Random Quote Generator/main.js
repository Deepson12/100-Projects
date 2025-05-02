//      To get the apiKey, login to API ninja and paste your API key below
//      https://www.api-ninjas.com/api/quotes



const apiKey = "";//Paste the API key here
const apiUrl = 'https://api.api-ninjas.com/v1/quotes';

const quote = document.getElementById("quote");
const author = document.getElementById("author");

const nextBtn = document.getElementById("nextBtn")

const checkQuote = async ()=>{
    const response = await fetch(apiUrl, {
        headers: {
            'X-Api-Key': apiKey
        }
    })

    let data = await response.json();

    quote.textContent = `"${data[0].quote}"`
    author.textContent = `- ${data[0].author}`
}

nextBtn.addEventListener("click", ()=>{
    checkQuote();
})
checkQuote();