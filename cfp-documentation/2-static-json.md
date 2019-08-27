# Lesson 2

The objetive of this lesson is to load a mocked API from the front end

Add a JSON file with the API mocked data in `client/js/compra.json` with a JSON writen on it.
This JSON must have an array of the stored data.

In the `carrito.js` file:

1. add an `async function` (`load`) which is called on page load
2. this function must call `fetch` with the url `js/compra.json` and readed as a JSON
3. the received JSON array must be used to fill the global array and then the DOM table refreshed
