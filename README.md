# recruitment-task

Po sklonowaniu repozytorium, zainstaluj wszystkie pakiety z pliku **package.json**. Użyj do tego komendy: 

```yarn install ```
## Lista planet - vue.js


Zadanie polega na utworzeniu strony wyświetlającej listę planet. 

Lista powinna zostać pobrana z zewnętrznego API znajdującego się pod tym adresem: https://swapi.dev/api/planets.

Do pobrania danych z API wykorzystaj **AJAX**.

Zapytania z API idą czasem bardzo długo, więc należałoby dodać loading. 

Każdy element listy powinien być ostylowany oraz powinien zawierać następujące parametry:
* name
* rotation_period
* climate
* gravity
* created
* url

Dodatkowym plusem będzie stworzenie paginacji oraz filtrowania aktualnej strony po którymś z parametrów.

Możesz wykorzystać bibliotekę komponentów **Element UI**. 

Finalny projekt zapisz jako repozytorium w w githubie i udostępnij nam link.

W zadaniu staraj się zwracać uwagę na dobre praktyki oraz na to żeby aplikacja była responsywna.

Jeśli nie uda Ci się zrobić zadania na czas lub będziesz miał problem z komunikacją z API, możesz skupić się tylko na ostylowaniu listy dla jakichś statycznych danych oraz na responsywności.

---
### Wykorzystane technologie 🚀

- [Vue.js](https://vuejs.org/)
- [Element UI](https://element.eleme.io/#/en-US)
- SCSS
- Flexbox

### Trochę o zadaniu

Zadanie raczej nie należało do najtrudniejszych, ale jak to zwykle bywa parę rzeczy wymagało chwili zastanowienia i "przewertowania" stron dokumentacji. Starałem się nie mieszać w szkielecie otrzymanym w zadaniu i wykorzystałem vue2 (options API) zamiast preferowanego Vue3 i composition API (w połączeniu z typescriptem). Użyłem wskazanej biblioteki **Element UI** do szybszego ostylowania niektórych elementów. Nie jestem zwolennikiem takich gotowców, ale w zasadzie wydaje mi się, że w dłuższej perspektywie może to faktycznie ułatwić pracę. Muszę na pewno popracować nad testami, który to temat tylko pobieżnie poruszyłem w tym projekcie. 
