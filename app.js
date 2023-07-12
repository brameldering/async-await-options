// Option 1: Simplest form, handle all events in one function
async function getUser1() {
  const response = await fetch("https://api.github.com/users/brameldering");
  const data = await response.json();
  console.log("Option 1: " + data.login);
}
getUser1();

// Option 2: With additional async/await function
async function getUser2() {
  const response = await fetch("https://api.github.com/users/brameldering");
  const data = await response.json();
  return data;
}
async function displayUser() {
  const user = await getUser2();
  console.log("Option 2: " + user.login);
}
displayUser();

// Option 3: With CallBack function
async function getUser3(cb) {
  const response = await fetch("https://api.github.com/users/brameldering");
  const data = await response.json();
  cb(data);
}
function callBack(user) {
  console.log("Option 3: " + user.login);
}
getUser3(callBack);
