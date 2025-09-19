import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const user = [{ id: 1, name: "Aniket", age: 5 }];

function showMenu() {
  console.log("\nEmployee Management System");
  console.log("1. Add User");
  console.log("2. List User");
  console.log("3. Remove User");
  console.log("4. Exit");

  rl.question("Enter your choice: ", handleInput);
}

function handleInput(choice) {
  switch (choice) {
    case "1":
      handleAdd();
      break;
    case "2":
      handleList();
      break;
    case "3":
      handleRemove();
      break;
    case "4":
      rl.close();
      break;
    default:
      console.log("Invalid Choice");
      showMenu();
  }
}
showMenu();

function handleAdd() {
  rl.question("Enter your name: ", (name) => {
    rl.question("Enter your age: ", (age) => {
      user.push({
        id: Date.now(),
        name: name,
        age: age,
      });
      console.log("User Added");
      showMenu();
    });
  });
}

function handleRemove() {
  rl.question("enter user id yo remove: ", (id) => {
    user.forEach((u, i) => {
      if (u.id == id) {
        user.splice(i, 1);
        console.log("user remove: ", id);
      }
    });
    showMenu();
  });
}

function handleList() {
  user.forEach((u, i) => {
    console.log(i + 1 + ".", "Id:", u.id, "Name:", u.name, "Age:", u.age);
  });
  showMenu();
}
