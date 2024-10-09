import debounce from "https://esm.sh/lodash.debounce@4.0.8";

export function guanabara(btn) {
	function posicaoAleatoria(verificarFixo = false) {
		if (verificarFixo && btn.style.position !== "fixed") {
			return;
		}

		btn.style.position = "fixed";

		const randomX = Math.floor(
			Math.random() * (window.innerWidth - btn.getBoundingClientRect().width),
		);
		const randomY = Math.floor(
			Math.random() * (window.innerHeight - btn.getBoundingClientRect().height),
		);

		btn.style.top = `${randomY}px`;
		btn.style.left = `${randomX}px`;
	}

	window.addEventListener(
		"resize",
		debounce(() => {
			posicaoAleatoria(true);
		}, 500),
	);

	setInterval(() => {
		posicaoAleatoria(true);
	}, 15000);
}
