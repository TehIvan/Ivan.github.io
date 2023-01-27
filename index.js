const buttons = document.querySelectorAll(".f-option");
const container = document.querySelector(".portfolio");

let selected = null;

for (const btn of buttons) {
  btn.onclick = () => {
    if (selected != null) {
      selected.classList.remove("selected");
    }

    let value = btn.attributes.getNamedItem("data-type").value;

    renderPage(value);

    selected = btn;
    btn.classList.add("selected");
  };
}

function renderPage(tag = null) {
  fetch("/data.json")
    .then((res) => res.json())
    .then((data) => {
      let json = data;

      if (tag != null) {
        json = data.filter((r) => r.tag == tag);

        console.log(json)
      }

      container.innerHTML = json.map(r => {
        return createDiv(r);
      }).join("");
    });
}

function createDiv(r) {
  return `<div class="p-item"><h2>${r.title}</h2></div>`
}

renderPage();