const fetchPromise = fetch("https://localhost:3001/data.json");

fetchPromise
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
