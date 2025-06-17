export const button=`
<label for="darkSwitch" class="relative inline-block w-11 h-6 cursor-pointer">
  <input type="checkbox" id="darkSwitch" class="peer sr-only"/>
  <span class="absolute inset-0 bg-gray-200 rounded-full transition-colors duration-200 ease-in-out peer-checked:bg-blue-600 dark:bg-neutral-700 dark:peer-checked:bg-blue-500 peer-disabled:opacity-50 peer-disabled:pointer-events-none"></span>
  <span class="absolute top-1/2 start-0.5 -translate-y-1/2 size-5 bg-white rounded-full shadow-sm !transition-transform duration-200 ease-in-out peer-checked:translate-x-full dark:bg-neutral-400 dark:peer-checked:bg-white"></span>
</label>
`

export function toogleDark(){
    const html = document.querySelector('html');
const darkButton = document.querySelector('#darkSwitch');
darkButton.addEventListener("change",()=>{
    if (darkButton.checked){
        html.classList.add("dark")
    }else{
        html.classList.remove(["dark"])
    }
})
}
