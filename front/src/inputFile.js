import {fun} from "./handleImage.js"
import { showPrediction } from "./prediction.js";
import { sendPicture } from "./requests.js";
export const inputbox=
`
<div id="drop-area" class="active:opacity-50 active:border-3 dark:border-gray-300 border-dashed transition-colors flex flex-col justify-center items-center border-2 rounded-3xl max-w-1/2 min-h-50 flex-1/2">
<svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
</svg>
<input type="file" id="fileElem" class=" hidden">
<div class="flex"><label class="" for="fileElem"><p class="hover:scale-105 transition-all text-blue-600 dark:text-blue-300 button cursor-pointer">Click to upload files</p></label><p class="dark:text-gray-300 ml-1">or drag and drop</p></div>
</div>

`
let input=document.querySelector("#fileElem")

let dropArea=document.querySelector("#drop-area");
let imgCont=document.querySelector("imgCont")
const highlight=(e)=>{
    dropArea.classList.add("active")
}
const unhighlight=(e)=>{
    dropArea.classList.remove("active")
}
function check_extension(filename){
    const exts=["png","jpeg","jpg","webp"]
    const arr=filename.split(".")
    console.log(arr[arr.length-1])
    if (exts.includes(arr[arr.length-1])){
        return true
    }
    return false
}
function handleFiles(files){
    console.log(files)
    if (check_extension(files[0].name)){
        document.querySelector("#predCont").classList.remove("hidden")
        dropArea.classList.add("hidden")
        imgCont.classList.remove("hidden")
        previewFile(files[0])
        const prediction=document.querySelector("#prediction")
        sendPicture(files[0]).then((res)=>{
            prediction.innerHTML=`It's ${res}`;
            showPrediction(res);
        })
    }else{
        alert("Можно загрузить только изображения")
    }
}
const handleDrop=(e)=>{
    const files=e.dataTransfer.files
    handleFiles(files)
    
}
function preventDefaults (e) {
    e.preventDefault()
    e.stopPropagation()
}
function previewFile(file){
    fun(file).then();
}
export const inputHandle=()=>{
    dropArea=document.querySelector("#drop-area");
    input=document.querySelector("#fileElem");
    imgCont=document.querySelector("#imageContainer")
    input.addEventListener("change",()=>{handleFiles(input.files)});
    ["dragenter","dragover","drop",'dragleave'].forEach(e=>{
        dropArea.addEventListener(e,preventDefaults,false)
        document.body.addEventListener(e,preventDefaults,false)
    });
    ["dragleave","drop"].forEach(e=>{
        dropArea.addEventListener(e,()=>{
            dropArea.classList.remove("active")
        })
    });
    ["dragenter","dragover"].forEach(e=>{
        dropArea.addEventListener(e,highlight,false)
    });
    ['dragleave', 'drop'].forEach(e => {
        dropArea.addEventListener(e, unhighlight, false)
    });
    dropArea.addEventListener("drop",handleDrop,false)
}











