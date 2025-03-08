const input = document.getElementById("price");
input.addEventListener("input", function (e) {
  let value = e.target.value;
  value = value.replace(/[^0-9]/g, "");
  if (value === "") {
    e.target.value = "";
    return;
  }
  const formattedValue = parseInt(value).toLocaleString("vi-VN");
  e.target.value = formattedValue;
});

const airline = document.getElementById("airline");
const img = document.getElementById("airline-img");
airline.addEventListener("input", function (e) {
  let value = e.target.value.trim().toLowerCase();
  let image = "";
  switch (value) {
    case "vietnam":
      image = "/image/airlines/vietnam.webp";
      break;
    case "vietjet":
      image = "/image/airlines/vietjet.webp";
      break;
    case "pacific":
      image = "/image/airlines/pacific.webp";
      break;
    case "bamboo":
      image = "/image/airlines/bamboo.webp";
      break;
    default:
      image = "";
      break;
  }
  img.src = image;
});

document.addEventListener("DOMContentLoaded", function () {
  const table = document.getElementById("flights-table");
  table.addEventListener("click", function (e) {
    if (e.target && e.target.classList.contains("book")) {
      window.location.href = "MuaVe.html";
    }
  });
});

const addFlight = document.getElementById("addFlight");
addFlight.addEventListener("click", function name(params) {
  document.getElementById("id04").style.display = "flex";
});

const closeAddFlight = document.getElementById("closeAddFlight");
closeAddFlight.addEventListener("click", function (params) {
  document.getElementById("id04").style.display = "none";
});
function closeModal() {
  document.getElementById("id04").style.display = "none";
}
const addFlightData = document.getElementById("addFlightData");
addFlightData.addEventListener("click", function () {
  const start = document.getElementById("start").value;
  const end = document.getElementById("end").value;
  const airline = document.getElementById("airline").value;
  const scheduleInput = document.getElementById("schedule").value;
  let price = document.getElementById("price").value;
  price = price + " VND";
  if (!start || !end || !airline || !scheduleInput || !price) {
    alert("Vui lòng nhập đầy đủ thông tin.");
    return;
  }
  const routes = start + " → " + end;
  let schedule = new Date(scheduleInput).toLocaleString("vi-VN", {
    weekday: "long",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
  schedule = schedule.replace("/", " thg ").replace("/", " ");
  const table = document.getElementById("flights-table");
  const row = table.insertRow(-1);
  const routesCell = row.insertCell(0);
  const airlineCell = row.insertCell(1);
  const scheduleCell = row.insertCell(2);
  const priceCell = row.insertCell(3);
  const controlCell = row.insertCell(4);

  routesCell.textContent = routes;
  airlineCell.textContent = airline;
  scheduleCell.textContent = schedule;
  priceCell.textContent = price;
  controlCell.innerHTML =
    '<button class="book" style="margin-right: 5px;">Đặt ngay</button><button class="delete">Xóa</button>';
  closeModal();
});

document.addEventListener("DOMContentLoaded", function () {
  const table = document.getElementById("flights-table");
  table.addEventListener("click", function (event) {
    if (event.target.className === "delete") {
      event.target.closest("tr").remove();
    }
  });
});
