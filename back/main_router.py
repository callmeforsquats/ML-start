from fastapi import APIRouter
from model_router import router as model
from settings import settings

router = APIRouter(prefix=settings.API_PREFIX)
router.include_router(model)
@router.get("/hello")
async def hello():
    return {"message":"her sosi"}