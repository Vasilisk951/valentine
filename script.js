const btnYes = document.querySelector('.yes');
const btnNo = document.querySelector('.no');

let btnYesFontSize = 1;
let btnNoFontSize = 1;

btnNo.addEventListener('click', doYesMore);

function doYesMore() {
  btnYesFontSize += 0.2;
  btnYes.style.fontSize = btnYesFontSize + 'em';

  btnNoFontSize -= 0.25;
  btnNo.style.fontSize = btnNoFontSize + 'em';
  console.log(btnNoFontSize)
  if (btnNoFontSize <= 0) {
    btnNo.style.display = 'none';
  }
}

btnYes.addEventListener('click', buttonYesPushed);

function buttonYesPushed() {
  location.href = './page2.html';
}