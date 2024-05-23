<script src="https://cdnjs.cloudflare.com/ajax/libs/fetch/3.6.2/fetch.min.js"></script>;
const getDatas = () => {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((jsonData) => console.log(jsonData))
    .catch((error) => {
      console.log(error);
    });
};
getDatas();
//write async code as synchronous way
const getData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const jsonData = await response.json();
    console.log(jsonData);
  } catch (error) {
    console.log(error);
  }
};
getData();
