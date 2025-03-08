function disableButton() {
  var button = document.getElementById("addPassword");
  button.disabled = true;
}
function enableButton() {
  var button = document.getElementById("addPassword");
  button.disabled = false;
}
function disableButton1() {
  var button = document.getElementById("signup");
  button.disabled = true;
}
function enableButton1() {
  var button = document.getElementById("signup");
  button.disabled = false;
}
const openSignup = document.getElementById("openSignup");
openSignup.addEventListener("click", function () {
  document.getElementById("id01").style.display = "flex";
});
const closeSignup = document.getElementById("closeSignup");
closeSignup.addEventListener("click", function () {
  document.getElementById("id01").style.display = "none";
});

const openSignin = document.getElementById("openSignin");
openSignin.addEventListener("click", function () {
  document.getElementById("id03").style.display = "flex";
});
const closeSignin = document.getElementById("closeSignin");
closeSignin.addEventListener("click", function () {
  document.getElementById("id03").style.display = "none";
});

const signinUser = document.getElementById("signinUser");
const loader = document.getElementById("loader");
const pContinue = document.getElementById("pContinue");
const signinPassword = document.getElementById("signinPassword");
const continueSignin = document.getElementById("continue");
const userSignin = document.getElementById("userSignin");
signinUser.addEventListener("input", function () {
  signinPassword.style.display = "none";
  userSignin.innerHTML = "";
  if (signinUser.value.length >= 4) {
    loader.style.display = "block";
    pContinue.style.display = "none";
    setTimeout(function () {
      if (signinUser.value === "admin") {
        signinPassword.style.display = "block";
        continueSignin.style.display = "none";
        userSignin.innerHTML = "";
      } else {
        loader.style.display = "none";
        pContinue.style.display = "block";
        signinPassword.style.display = "none";
        continueSignin.style.display = "flex";
        userSignin.innerHTML = "Tên người dùng không hợp lệ.";
      }
    }, 2000);
  }
});

const signinForm = document.getElementById("signinForm");
signinForm.addEventListener("click", function name(params) {
  if (document.getElementById("passwordSignin").value == 1) {
    alert("Đăng nhập thành công.");
  } else {
    alert("Mật khẩu không chính xác.");
  }
});

const addPassword = document.getElementById("addPassword");
addPassword.addEventListener("click", function () {
  var ip_user = document.getElementById("ip-user").value;
  var ip_email = document.getElementById("ip-email").value;
  var ip_phone = document.getElementById("ip-phone").value;
  if (ip_user === "" || ip_email === "" || ip_phone === "") {
    alert("Vui lòng nhập đầy đủ thông tin");
  } else {
    document.getElementById("id02").style.display = "flex";
    document.getElementById("id01").style.display = "none";
  }
});

const closeSignupPassword = document.getElementById("closeSignupPassword");
closeSignupPassword.addEventListener("click", function () {
  document.getElementById("id02").style.display = "none";
  document.getElementById("id01").style.display = "flex";
});
var modal = document.getElementById("id01");
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

var p_user = document.getElementById("user");
var ip_user_cf = document.getElementById("ip-user2");
document.getElementById("ip-user").addEventListener("input", function () {
  ip_user = this.value;
  ip_user_cf.value = ip_user;
  if (ip_user === "") {
    p_user.innerHTML = "";
  } else if (/^[a-zA-Z0-9]{4,}$/.test(ip_user)) {
    p_user.innerHTML = "";
    enableButton();
  } else {
    p_user.innerHTML = "Tên người dùng " + ip_user + " không khả dụng!";
    disableButton();
  }
});

var p_email = document.getElementById("email");
document.getElementById("ip-email").addEventListener("input", function () {
  var ip_email = this.value;
  if (ip_email === "") {
    p_email.innerHTML = "";
  } else if (/^[a-z0-9]+@[a-z]+\.[a-z]+$/.test(ip_email)) {
    p_email.innerHTML = "";
    enableButton();
  } else {
    p_email.innerHTML = "Email không hợp lệ hoặc đã được sử dụng!";
    disableButton();
  }
});

var p_phone = document.getElementById("phone");
document.getElementById("ip-phone").addEventListener("input", function () {
  var ip_phone = this.value;
  if (ip_phone === "") {
    p_phone.innerHTML = "";
  } else if (/^0\d{9}$/.test(ip_phone)) {
    enableButton();
    p_phone.innerHTML = "";
  } else {
    p_phone.innerHTML = "Số điện thoại không hợp lệ hoặc đã được sử dụng!";
    disableButton();
  }
});

var p_password = document.getElementById("password");
document.getElementById("ip-password").addEventListener("input", function () {
  var ip_password = this.value;
  if (ip_password === "") {
    p_password.innerHTML = "";
    disableButton1();
  } else if (
    /^[A-Za-z0-9!@#$%^&*]{8,}$/.test(ip_password) &&
    (/^(?=.*?[A-Za-z])(?=.*?[0-9])/.test(ip_password) ||
      /^(?=.*?[A-Za-z])(?=.*?[#?!@$%^&*-])/.test(ip_password) ||
      /^(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/.test(ip_password))
  ) {
    p_password.innerHTML = "";
    enableButton1();
  } else {
    p_password.innerHTML =
      "Mật khẩu phải dài ít nhất 8 ký tự.\n" +
      "Mật khẩu phải chứa hai trong số các ký tự sau: chữ cái, số hoặc ký hiệu!";
    disableButton1();
  }
});
