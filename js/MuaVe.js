const closed = document.getElementById(".close-popup");
closed.addEventListener("click", function name(params) {
  document.getElementById("popup").style.display = "none";
  document.body.style = "overflow: auto";
});

const openButtons = document.querySelectorAll(".open-popup");
openButtons.forEach((button) => {
  button.addEventListener("click", function () {
    document.getElementById("popup").style.display = "flex";
    document.body.style = "overflow: hidden";
  });
});

const continuetobook = document.getElementById("continuetobook");
continuetobook.addEventListener("click", function name(params) {
  window.location.href = 'ThanhToan.html';
});

const popupChosseContent = document.querySelectorAll(".popupChosseContent");
popupChosseContent.forEach((div) => {
  div.addEventListener("click", function () {
    const tien = this.querySelector(".popChosseHeader p").textContent;
    const tongtien = document.getElementById("tongtien");
    tongtien.textContent = tien;
  });
});
