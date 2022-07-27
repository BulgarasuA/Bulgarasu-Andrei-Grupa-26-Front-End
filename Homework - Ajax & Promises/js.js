console.log("---Display data ----");
function fetchData() {
  fetch("https://reqres.in/api/users")
    .then((response) => {
      if (!response.ok) {
        throw Error("Error");
      }
      return response.json();
    })
    .then((data) => {
      const html = data.data
        .map((user) => {
          return `
          <div class="user">
          <p><img src="${user.avatar}" alt="${user.first_name}"</p>
          <p>Name : ${user.first_name}</p>
          <p>Email : ${user.email}</p>
          </div>`;
        })
        .join("");
      document
        .querySelector("#containerID")
        .insertAdjacentHTML("afterbegin", html);
    })
    .catch((error) => {
      console.log(error);
    });
}
fetchData();

console.log("----Post data----");

function postData() {
  fetch("https://reqres.in/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "morpheus",
      job: "leader",
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw Error("Error");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
}
postData();

console.log("---Delete data---");

function deleteData() {
  fetch("https://reqres.in/api/users/2", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw Error("Error");
      }
      return response;
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
}
deleteData();
