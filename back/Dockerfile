FROM python:3.12-slim
WORKDIR /app
COPY requirements.txt ./
#RUN pip install torch &&\
RUN pip install --no-cache-dir -r requirements.txt &&\
    pip install torch --index-url https://download.pytorch.org/whl/cpu --no-cache-dir
COPY . .
EXPOSE 5555
CMD ["python","-m","main"]