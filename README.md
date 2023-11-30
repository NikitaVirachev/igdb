# IGDB

- [Копируемая страница](https://www.igdb.com/top-100/games)
- [Используемое API](https://api-docs.igdb.com/#examples)
- [Deploy](https://igdb-nv.netlify.app/)

## CORS Proxy

При испольовании IGDB API возникает проблема c CORS-заголовками. IGDB не предлагает их настройку, поэтому приложение не может напрямую взаимодействовать с API IGDB.

Для решения этого я настраивал прокси с помощью [CORS Anywhere](https://github.com/Rob--W/cors-anywhere).
