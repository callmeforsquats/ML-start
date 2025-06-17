from pydantic_settings import BaseSettings,SettingsConfigDict


class Settings(BaseSettings):


    CLASSES:list[str]=["airplane",
                  "automobile",
                  "bird",
                  "cat",
                  "deer",
                  "dog",
                  "frog",
                  "horse",
                  "ship",
                  "truck"]

    PORT:int=7777

    HOST:str="0.0.0.0"

    API_PREFIX:str="/api"

    model_config = SettingsConfigDict(
        env_file=".env",
        case_sensitive=False,
    )
settings=Settings()