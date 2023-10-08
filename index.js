let colorInput = document.querySelector(".pick-color-input");
let palleteInput = document.querySelector(".pallete-type");
const getColorSchemeBtn = document.querySelector(".get-color-scheme");
const colorPalleteEl = document.querySelector(".color-pallete");
let fetchHexCode = [];

//chatch the user selection

colorInput.addEventListener("change", function (e) {
  colorInput = e.target;
});

palleteInput.addEventListener("change", function (e) {
  palleteInput = e.target;
});

//fetch color palete from API based on user input and render it on page
getColorSchemeBtn.addEventListener("click", function () {
  let hex = colorInput.value.slice(1);
  let mode = palleteInput.value.toLowerCase();
  let url = `https://www.thecolorapi.com/scheme?hex=${hex}&mode=${mode}&count=6`;

  const options = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  fetch(url, options)
    .then((response) => response.json())
    .then((data) => {
      html = "";
      data.colors.forEach((color) => {
        //element.hex.value;

        html += 
        `<div class="color-container">
            <p class="color-rectangle" style="background-color:  ${color.hex.value}";></p>
            <p class="hex-code">${color.hex.value}</p>
        </div>`;
      });
      colorPalleteEl.innerHTML = html;
    });
});
