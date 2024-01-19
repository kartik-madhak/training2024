const res = { name: "ABC", address: "address" };

res.forEach((key, value) => {
  document.getElementById("result").innerHTML += key + ": " + value;
});
