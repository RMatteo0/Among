document.addEventListener("DOMContentLoaded", () => {
	const loginBtn = document.getElementById("login-btn");

	function afficherPseudo() {
		const pseudo = localStorage.getItem("pseudo");
		if (pseudo) {
			loginBtn.textContent = `Sous le compte de ${pseudo}`;
		} else {
			loginBtn.textContent = "S'identifier";
		}
	}

	loginBtn.addEventListener("click", () => {
		const pseudo = prompt("Entrez votre pseudo :");
		if (pseudo && pseudo.trim()) {
			localStorage.setItem("pseudo", pseudo.trim());
			afficherPseudo();
		}
	});

	afficherPseudo();
});

function change_couleur (type_element,couleur) {
	var element = document.querySelectorAll(type_element);
	for (var i = 0; i <element.length; i++){
		element[i].style.color = couleur ;
			}
}

window.addEventListener('DOMContentLoaded', function () {
    const couleurSauvegardee = localStorage.getItem('textColor');
    if (couleurSauvegardee) {
        change_couleur('p, h1, h2, h3, h4, li, nav, ul, button, a', couleurSauvegardee);
    }
});
