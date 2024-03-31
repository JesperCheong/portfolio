function openTab(tabName) {
  for (const tabLink of tabLinks) {
    tabLink.classList.remove("active-link");
  }
  for (const tabContent of tabContents) {
    tabContent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabName).classList.add("active-tab");
}

function openMenu() {
  sideMenu.style.right = "0";
}

function closeMenu() {
  sideMenu.style.right = "-200px";
}

const tabLinks = document.getElementsByClassName("tab-links");
const tabContents = document.getElementsByClassName("tab-contents");
const sideMenu = document.getElementById("side-menu");

const scriptURL = 'https://script.google.com/macros/s/AKfycbwv3fxLj2CpMN9r67GQQusHeQavNGoFK_qRFMXcBaAQ0U3LCS5W8BN5FzC2Iiux2xhq/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})