export const attemptButton=`
<button id="attemptButton" type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Try Again</button>
`
export function handleAttempt(){
    const btn=document.querySelector("#attemptButton");
    const dropArea=document.querySelector("#drop-area")
    const imgCont=document.querySelector("#imageContainer")
    const predCont=document.querySelector("#predCont")
    btn.onclick=()=>{
        dropArea.classList.remove("hidden")
        imgCont.classList.add("hidden")
        predCont.classList.add("hidden")
        imgCont.querySelectorAll("img").forEach((img)=>{img.src=""})
        predCont.querySelectorAll("img").forEach((img)=>{img.src=""})
        predCont.querySelector("h1").innerHTML=""
    }
}
export function showPrediction(word){
    const predImg=document.querySelector("#predImg")
    predImg.src=`/assets/${word}.png`
}