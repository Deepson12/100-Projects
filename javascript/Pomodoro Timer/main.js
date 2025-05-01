const timer = document.querySelector(".timer")
const startBtn = document.getElementById("start")
const stopBtn = document.getElementById("stop")
const resetBtn = document.getElementById("reset")

let timeleft = 1500
let time;

const unitConverter = ()=>{
    let minute = Math.floor(timeleft / 60);
    let second = timeleft % 60;

    timer.textContent = `${minute.toString().padStart(2, "0")} : ${second.toString().padStart(2, "0")}`
}


const updateTimer = () =>{
     time = setInterval(()=>{

        
        timeleft--
        
       unitConverter()

        if(timeleft === 0){
            clearInterval(time);
            alert("Time's Up!!!!");
            timeleft = 1500;
            unitConverter()
        }
    }, 1000)



}

startBtn.addEventListener("click", ()=>{
    updateTimer()
})

stopBtn.addEventListener("click", ()=>{
    clearInterval(time)
})

resetBtn.addEventListener("click",()=>{
    clearInterval(time)
    timeleft =1500
    unitConverter()
})