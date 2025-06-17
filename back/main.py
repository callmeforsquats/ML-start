from fastapi import FastAPI
import uvicorn
from main_router import router as main_router
import colorama
from contextlib import asynccontextmanager
from model import myNet
from settings import settings
from fastapi.middleware.cors import CORSMiddleware

colorama.init()


@asynccontextmanager
async def lifespan(app:FastAPI):
    myNet.load_model()
    yield

app = FastAPI(lifespan=lifespan)
app.include_router(main_router)



app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_credentials=["*"],
    allow_headers=["*"]
)

if __name__ =="__main__":
    uvicorn.run("main:app",host=settings.HOST,port=settings.PORT)

