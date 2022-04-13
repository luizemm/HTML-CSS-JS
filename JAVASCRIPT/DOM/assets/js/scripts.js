const darkModeBtn = document.getElementById('mode-selector');
const listaBtn = document.getElementsByTagName('button');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];
const titulo = document.getElementById('page-title');

const DARK_MODE_CLASS = 'dark-mode';

darkModeBtn.addEventListener('click', changeDarkMode);
darkModeBtn.style.cursor = 'pointer';

function changeDarkMode() {
	changeClasses();
	changeTexts();
}

function changeClasses() {
	body.classList.toggle(DARK_MODE_CLASS);
	footer.classList.toggle(DARK_MODE_CLASS);
	Array.from(listaBtn).forEach(btn => {
		btn.classList.toggle(DARK_MODE_CLASS);
	});	
}

function changeTexts() {
	const DARK_MODE_TEXT = 'Dark Mode';
	const LIGTH_MODE_TEXT = 'Ligth Mode';

	if(body.classList.contains(DARK_MODE_CLASS)){
		titulo.innerHTML = DARK_MODE_TEXT + ' ON';
		darkModeBtn.innerHTML = LIGTH_MODE_TEXT;
	} else {
		titulo.innerHTML = LIGTH_MODE_TEXT + ' ON';
		darkModeBtn.innerHTML = DARK_MODE_TEXT;
	}
}

