const inputCheck = document.querySelectorAll(".input");

inputCheck.forEach(function (input) {
  input.addEventListener("input", function () {
    var inputValue = this.value;
    var pInput = this.nextElementSibling;

    if (inputValue === "") {
      pInput.innerHTML = "như trên CMND (không dấu)";
      pInput.style.color = "#687176";
    } else if (/^[a-zA-Z]+$/.test(inputValue)) {
      pInput.innerHTML = "như trên CMND (không dấu)";
      pInput.style.color = "#687176";
    } else {
      pInput.innerHTML = "Rất tiếc, vui lòng chỉ nhập chữ (a-z)!";
      pInput.style.color = "#ed090e";
    }
  });
});

var p_email = document.getElementById("p_email");
document.getElementById("ip-email").addEventListener("input", function () {
  var ip_email = this.value;
  if (ip_email === "") {
    p_email.innerHTML = "VD: email@example.com";
    p_email.style.color = "#687176";
  } else if (/^[a-z0-9]+@[a-z]+\.[a-z]+$/.test(ip_email)) {
    p_email.innerHTML = "VD: email@example.com";
    p_email.style.color = "#687176";
  } else {
    p_email.innerHTML = "Email không hợp lệ hoặc đã được sử dụng!";
    p_email.style.color = "#ed090e";
  }
});

var p_phone = document.getElementById("p_phone");
document.getElementById("ip-phone").addEventListener("input", function () {
  var ip_phone = this.value;
  if (ip_phone === "") {
    p_phone.innerHTML =
      "VD: +84 901234567 trong đó (+84) là mã quốc gia và 901234567 là số di động";
    p_phone.style.color = "#687176";
  } else if (/^0\d{9}$/.test(ip_phone)) {
    p_phone.innerHTML =
      "VD: +84 901234567 trong đó (+84) là mã quốc gia và 901234567 là số di động";
    p_phone.style.color = "#687176";
  } else {
    p_phone.innerHTML = "Số điện thoại không hợp lệ hoặc đã được sử dụng!";
    p_phone.style.color = "#ed090e";
  }
});
