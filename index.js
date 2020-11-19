// Add your code here
function submitData(name, email) {
  let data = {
    name: name,
    email: email,
  };

  let config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify(data),
  };

  return fetch("http://localhost:3000/users", config)
    .then((res) => res.json())
    .then((json) => renderDOM(json.id))
    .catch((err) => renderDOM(err.message));
}

function renderDOM(json) {
  let body = document.querySelector("body");
  console.log(body);
  console.log(json);
  body.innerHTML = json;
}
