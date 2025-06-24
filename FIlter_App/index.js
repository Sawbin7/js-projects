let name = document.querySelector(".name");
let occupation = document.querySelector(".occupation");
let subBtn = document.querySelector(".submit");
let itemData = document.querySelector(".items-detail");
let userList = document.querySelector(".userList");
let jobList = document.querySelector(".jobList");
let searchText = document.querySelector(".searchText");

function getData() {
  let users = JSON.parse(localStorage.getItem("users")) || [];
  return users;
}

function store(name, job) {
  let users = getData();
  const newUser = {
    name: name,
    occupation: job,
  };

  users.push(newUser);

  localStorage.setItem("users", JSON.stringify(users));
}

subBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let userName = name.value;
  let userJob = occupation.value;
  store(userName, userJob);
  name.value = "";
  occupation.value = "";
});

function ListData() {
  let data = getData();

  if (data.length === 0) {
    console.log("Nothing Exist");
  } else {
    itemData.textContent = ` ${data.length} Data Exist `;

    for (let i = 0; i < data.length; i++) {
      let span = document.createElement("p");
      let p = document.createElement("p");
      span.textContent = data[i]["name"];
      p.textContent = data[i].occupation;
      userList.append(span);
      jobList.append(p);
    }
  }

  console.log(data);
}

ListData();

searchText.addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase();
  displaySearch(query);
});

function displaySearch(query) {
  let data = getData();
  userList.innerHTML = "<h3> Name </h3>";
  jobList.innerHTML = "<h3> Job </h3>";

  const filtered = data.filter((item) => {
    return (
      item.name.toLowerCase().includes(query) ||
      item.occupation.toLowerCase().includes(query)
    );
  });

  itemData.textContent = `${filtered.length} match found`;

  filtered.forEach((item) => {
    let nameEl = document.createElement("p");
    nameEl.textContent = item.name;

    let jobEl = document.createElement("p");
    jobEl.textContent = item.occupation;

    userList.append(nameEl);
    jobList.append(jobEl);
  });
}
