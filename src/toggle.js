export function toggleSwitch() {
    const toggle = document.querySelector("#toggle");
    const toggleCircle = document.querySelector(".toggle-circle");
  
    toggle.addEventListener("change", function () {
      if (this.checked) {
        toggleCircle.classList.add("toggle-on");
      } else {
        toggleCircle.classList.remove("toggle-on");
      }
    });
  }
  