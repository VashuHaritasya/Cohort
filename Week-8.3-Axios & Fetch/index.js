// function main() {
//   fetch("https://sum-server.100xdevs.com/todos").then(async (response) => {
//     const json = await response.json();
//     console.log(json);
//     // await resposne.text()
//   });
// }
// main();

async function main() {
  const response = await fetch("https://sum-server.100xdevs.com/todos");
  const json = await response.json();
  console.log(json.todos.length);
}

main();

// axios

const axios = require("axios");

async function main() {
  const response = await fetch("https://sum-server.100xdevs.com/todos", {
    method: "PUT",
  });
  const json = await response.json();
  console.log(json.todos.length);
}

async function main() {
  const response = await axios.PUT("https://sum-server.100xdevs.com/todos");
  console.log(response.data.todos.length);
}

main();
