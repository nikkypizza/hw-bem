## Задание «БЭМ»

### Как запустить

```
git clone git@github.com:nikkypizza/hw-bem.git
cd hw-bem
npm i
npm start
```

Скрипт `npm start` запускает локальный сервер на **3000** порту.
Вот [Pages оригинальной страницы](https://nikkypizza.github.io/shri-2018-II-task-1/surveillance.html) и [репо на GitHub](https://github.com/nikkypizza/shri-2018-II-task-1) для сравнения.

Построил работу через [Create React App](https://github.com/facebook/create-react-app).

---

Перевел станицу "Видеонаблюдение" на React <sup>(не без багов)</sup>. Раньше в React не работал. Все еще пытаюсь понять как организовать работу с `bem-core`, `bem-di` и разбивать код на разные платформы.

В компоненте `PageHeader` попробовал реализовать разделение на платформы с помощью пакета `react-device-detect` и интерактивность при нажатии на `..MenuToggler` и пока не в восторге от того, что у меня из этого вышло.

Добавил `./build` в репо, думал в таком случае смогу проверить работу в [GH-Pages](https://nikkypizza.github.io/hw-bem/build/), но этого не произошло.

Изучаю фреймворк и работа над заданием все еще в процессе :open_hands: