# Свёрточная нейронная сеть Netty для распознавания изображений
<p align="center"><img src="https://media.proglib.io/wp-uploads/2018/03/network.jpg" width="500"></p>


![Статус разработки](https://img.shields.io/badge/Статус%20разработки-Finished-green)

## Содержание
- [Что Зачем и Почему](#почему)
- [Команда проекта](#команда-проекта)
- [Технологии](#технологии)
- [Использование](#использование)
- [Разработка](#разработка)
- [Требования](#требования)
- [Тестирование](#тестирование)
- [To do](#to-do)



## Почему 
<img src="https://s.1rnd.ru/section/newsInText/upload/images/news/intext/000/053/256/j2d-sctpkng_605decdcc841e.jpg" width="500">

Мне давно была интересна отрасль Artificial Intelegence (AI). однако прежде, чем разбираться в этой теме, и решил укрепить свою базу в математике и программировании. На данный момент, я считаю, я готов начать непосредственное знакомоство с этой темой.
Я хочу разобраться в мире машинного обучения, начиная с простейших классических алгоритмов и заканчивая нейросетевыми моделями. Чекпоинтом моего обучения как раз и должен будет стать данный проект.

### Основные цели проекта:
- Практика программирования и использования передовых технологий для разработки
- Изучение алгоритмов машинного обучения и основ искусственного интеллекта.
- Практическое применение искусственного интеллекта.
- Сделать процесс использования искусственного интеллекта удобнее и прозрачнее для пользователей.


## Команда проекта

**Главный и единственный разработчик: Сиволодский Андрей Павлович**  
ML-engeneer,ML-Ops,Backend,Frontend,Tester - студент **ОГУ**, группа **23ПМИ(б)ППКС**.  
***До связи***
- <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/160px-Gmail_icon_%282020%29.svg.png" width="30"> [boooler56@gmail.com](mailto:booler56@gmail.com) 
- <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/225px-Telegram_2019_Logo.svg.png" width="30"> [tracknthrow](https://t.me/tracknthrow)


## Технологии

### [Python](https://www.python.org)   <img src="https://www.python.org/static/img/python-logo-large.c36dccadd999.png?1646853871" width="30">
### [PyTorch](https://pytorch.org)   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnolsTNaqsfuThXKXDbNzrOtMH1jG9sV6lJArLeRIfWsf7HJlA2lalKJgTx4QTLz-9LI4&usqp=CAU" width="30">
### [FastAPI](https://fastapi.tiangolo.com/)   <img src="https://fastapi.tiangolo.com/img/favicon.png" width="30">
### [Numpy](https://numpy.org)   <img src="https://numpy.org/images/logo.svg" width="30">
### [Java Script](https://learn.javascript.ru)   <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/120px-Unofficial_JavaScript_logo_2.svg.png" width="30">
### [Vite](https://vite.dev)   <img src="https://vite.dev/logo.svg" width="30">
### [Tailwind](https://tailwindcss.com/) <img src="https://codekitapp.com/images/help/free-tailwind-icon@2x.png" width="30">


## Использование

### вариант №1- виртуальные окружения
 Для этого способа у вас на компьютере должны быть установлены <b>Python</b> и <b>NodeJS</b>
1) Выполните следующие команды:
```bash
  git clone https://github.com/callmeforsquats/ML-start.git  
  cd ml-start/back
  python -m venv venv
  venv/Scripts/activate
  pip install -r requirements.txt
  cd ../front
  npm install
```
2) Затем откройте два терминала:  
   В первом перейдите в папку `.../ml-start/back` и выполните команду `python -m main`  
   Во втором перейдите в папку `.../ml-start/back` и выполните команду `npm run dev`
3) откройте браузер и перейдите по адресу  `http://127.0.0.1:7777`
### вариант №2 - через Docker
Для этого способа у вас на компьютере должен быть установлен <b>Docker</b>
1) Запустите <b>Docker</b>
2) Выполните команды:
   ```cmd
   git clone https://github.com/callmeforsquats/ML-start.git
   cd ml-start
   docker compose up
   ```
3) откройте браузер и перейдите по адресу  `http://127.0.0.1:7777`

Просто следуйте этим простым шагам и вы сможете воспользоваться нашей нейросетью! 😊
## Разработка

На данный момент проект находится на стадии составления технического задания (ТЗ), продумывания архитектуры и исследования предметной области. Я активно работаю над планированием функционала и проектированием системы, чтобы предоставить пользователям качественный и удобный продукт.

Этот раздел будет постепенно дополняться в процессе разработки                  ![Процесс разработки](https://img.shields.io/badge/Процесс%20разработки-100%25-green)

### Требования
Для того чтобы воспользоваться моделью достаточно иметь интернет и браузер

## Тестирование

Тестирование будет проходить в процессе разработки, с акцентом на проведение масштабного тестирования непосредственно перед выпуском продукта. На каждом этапе разработки будет проводиться юнит-тестирование для проверки корректности отдельных компонентов.

Виды тестирования которые будут использоваться:
- **Функциональные тесты**: для проверки правильного функционирования системы и её отдельных модулей.
- **Исследовательские тесты**: для выбора наиболе лучшей модели и лучшего метода её обучения.



## To do
- [x] Добавить README
- [x] Составить ТЗ
- [x] Продумать Архитектуру Приложения
- [x] Приступить к разработке
- [x] Провести полное тестирование проекта




