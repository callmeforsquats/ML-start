
function fileToDataUri(field) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      resolve(reader.result);
    });
    reader.readAsDataURL(field);
  });
}

function pixelateImage(originalImage,pixelatedImage, pixelationFactor) {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  
  const originalWidth = originalImage.width;
  const originalHeight = originalImage.height;

  const canvasWidth = originalWidth;
  const canvasHeight = originalHeight;
  
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;

  context.drawImage(originalImage, 0, 0, originalWidth, originalHeight);
  
  const originalImageData = context.getImageData(
    0,
    0,
    originalWidth,
    originalHeight
  ).data;

  if (pixelationFactor !== 0) {
    for (let y = 0; y < originalHeight; y += pixelationFactor) {
      for (let x = 0; x < originalWidth; x += pixelationFactor) {
        // extracting the position of the sample pixel
        const pixelIndexPosition = (x + y * originalWidth) * 4;

        // drawing a square replacing the current pixels
        context.fillStyle = `rgba(
          ${originalImageData[pixelIndexPosition]},
          ${originalImageData[pixelIndexPosition + 1]},
          ${originalImageData[pixelIndexPosition + 2]},
          ${originalImageData[pixelIndexPosition + 3]}
          )`;
        context.fillRect(x, y, pixelationFactor, pixelationFactor);
      }
    }
  }
  
  pixelatedImage.src = canvas.toDataURL();
}

async function fun (file){
  const fileInput = document.querySelector("#fileElem");
  console.log(fileInput)
  const pixelatedImage = document.querySelector(".img1");
  console.log(pixelatedImage)
  const normalImage=document.querySelector(".img2");
  console.log(normalImage)
  // storying a copy of the original image
  const originalImage = pixelatedImage.cloneNode(true);
  // showing the uploaded image
  pixelatedImage.classList.add("hidden")
  pixelatedImage.src = await fileToDataUri(file);
  // storing the original image
  originalImage.classList.add("hidden")
  originalImage.src = await fileToDataUri(file);
  normalImage.src=originalImage.src
  normalImage.height=256;
  normalImage.width=256
  originalImage.width=256;
  originalImage.height=256;
  pixelateImage(originalImage,pixelatedImage,8);
  pixelatedImage.classList.remove("hidden")
  //originalImage.classList.add("hidden")
  //return false;
}
export {fun}