from fastapi import UploadFile
from exceptions import WrongFileFormatException
from PIL import Image
import io

def get_resized_image(file:UploadFile)->Image:
    if not file.filename.endswith((".png",".jpg",".jpeg",".webp")):
        raise WrongFileFormatException
    image=Image.open(file.file)
    image=image.resize((32,32))
    return image

def image_to_bytes(image:Image):
    arr=io.BytesIO()
    image.save(arr,format="PNG")
    return arr.getvalue()

    