from fastapi import APIRouter
from fastapi import UploadFile
from utils import get_resized_image
from model import myNet


router=APIRouter(prefix="/router")


@router.post("/clf")
async def classify_image(file:UploadFile):
    img=get_resized_image(file)
    return myNet.predict(img)