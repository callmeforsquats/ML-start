import torch
import numpy as np
from PIL.Image import Image
from settings import settings

class Model:
    
    def load_model(self):
        self.net=torch.jit.load("myNet.pt",map_location="cpu")

    def predict(self,image:Image)->str:
        if not self.net:
            raise 
        arr=np.asarray(image.convert("RGB"))
        x=torch.tensor(arr).float()/255
        x=x.permute(2,0,1).unsqueeze(0).contiguous()
        y=self.net(x)
        return settings.CLASSES[np.argmax(y.detach())]


myNet=Model()