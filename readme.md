# TEST: INTIVE-FDV

This project was developed for Intive-FDV. El proyecto está disponible en []() hosteado en Heroku y en []() se puede ver la documentación.

## Table of Contents
- [Specifications](#especificaciones)
- [Tecnologías utilizadas](#tecnologías-utilizadas)
- [Observaciones](#observaciones)
- [Posibles mejoras](#posibles-mejoras)
- [Setup](#setup)

## Specifications

Create a component or a components group that bring a form with:
- Name
- Surname
- Country (taken from a dropdown of countries)
- Year of birth

Once de form is saved, it should show a message that says:
    **"Hello {name} from {Country}, on {day} of {month} you will have {years}"**
Also has to show a list with all the records made.
For countries, the following API should be used: http://restcountries.eu/rest/v2/all.

Extra points if:
- When you click on one of the previous visitors, redraw de legend of the greeting.
- If standard coding is used (ES6/Eslint).
- If Flux is used.
- If it's Sass/Less
