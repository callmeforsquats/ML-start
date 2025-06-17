import {button,toogleDark} from "./darkButton.js"
import {inputbox,inputHandle} from "./inputFile.js"
import { attemptButton, handleAttempt } from "./prediction.js"
document.querySelector('#app').innerHTML = 
  // <div class="flex">
  //   <h1 class="dark:font-swanston dark:text-gray-200 dark:normal-case text-2xl m-5 font-bold italic">Netty</h1>
  //   ${button}
  // </div>
  `
  <div class="flex flex-col justify-between shadow-[0px_0px_20px_0px] dark:shadow-blue-500 dark:bg-gray-800 m-auto mt-auto mb-auto w-4/5 rounded-2xl bg-white  min-h-100 shadow-gray-600">
      <div class="flex justify-between p-5 pt-3 items-center">
        <div class="flex items-center">
        <img width="64" src="/assets/ml.png" class="dark:invert-90 mr-3"/>
        <h1 class=" dark:text-gray-200 dark:normal-case text-4xl font-bold italic">Netty</h1>
        </div>
        ${button}
      </div>
      <div class="flex-grow">
        <div class="h-full p-5 flex justify-center">  
          
          ${inputbox}
          <div id="imageContainer" class="flex flex-col hidden w-full flex-grow ">
            <div class="flex justify-evenly w-full flex-grow">
              <div class="p-5 pl-10 flex flex-col items-center">
                <h3 class="dark:text-gray-200 text-2xl font-bold">Your image in original</h3>
                <div class="flex justify-center items-center flex-1/2"><img width="100" class="img2"/></div>
              </div>
              <div class="flex flex-col justify-center items-center"><svg class="dark:text-gray-200" width="64" height="64" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="var(--ci-primary-color, currentColor)" d="M254.3,496H216.025l-.008-143.937H16v-192H216.007L216,16.048l38.688.035L494.636,256.318ZM48,320.063H248.015l.007,137.006,201.342-200.8L248,54.672l.008,137.391H48Z" class="ci-primary"/></svg></div>
              <div class="p-5 pr-10 flex flex-col justify-between items-center">
                <h3 class="dark:text-gray-200 text-2xl font-bold">How Netty sees that</h3>
                <div class="flex justify-center items-center flex-1/2"><img class="img1"/></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="predCont"flex transition-all duration-300 class="flex hidden w-full flex-grow p-5">
        <div class="flex-1/2 flex items-center justify-center">
        <h1 class="dark:text-gray-200 text-2xl font-bold mr-4" id="prediction"></h1>
        <img id="predImg" class="dark:invert-90" width="64"/>
        </div>
        <div class="flex-1/2 flex items-center justify-center">${attemptButton}</div>
      </div>
    </div>
  </div>

  `
toogleDark()
inputHandle()
handleAttempt()