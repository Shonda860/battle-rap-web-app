const toggle = document.getElementById('toggle');
const sidePanel = document.querySelector('.side-panel');

toggle.addEventListener('click', function() {
  sidePanel.classList.toggle('open');
});