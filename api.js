let btn = document.querySelector("button");
btn.addEventListener("click", async function () {
  let fact = await getfacts();
  console.log(fact);
  let p = document.querySelector("p");
  p.innerText = fact;
});
let url = "https://catfact.ninja/fact";
async function getfacts() {
  try {
    let res = await axios.get(url);
    return res.data.fact;
  } catch (e) {
    console.log(e);
    return "no facts you ,bastard";
  }
}
