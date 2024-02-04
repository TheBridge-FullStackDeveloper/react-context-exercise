Excersice react context - beers 🍻
En este ejercicio tendrás que crear una aplicación en React que permita listar todas las cevezas que nos devuelve la API de punkapi.com

Esta aplicación va a tener dos páginas: El index / y el detalle de una cerveza en /details/:beerId

Las informaciones tendrán que ser guardadas y compartidas con el React context

Instalar las dependencias con npm i

Usar la api de punkapi 👉 https://api.punkapi.com/v2/beers
Crear un context donde guardar la respuesta de la petición
Crear una página index en el path / donde vamos a listar todas las cervezas que hemos conseguido con la petición, en la lista hay que mostrar el name de la cerveza y la imagen de la cerveza de image_url
Crear una página /details/:beerId que se mosrtará al hacer click en una cerveza de la lista, estos son los detalles que hay que mostrar: name, tagline, first_brewed, description, image_url and abv