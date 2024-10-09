/**
 * O método jogar recebe a escolha do backend e chama o método jogar()
 * de modo a passar a jogadaUsuario e retornar a resposta do backend.
 *
 * @param {OpcaoBackend} backendEscolhido
 * @param {Jogada} jogadaUsuario
 * @returns {ResultadoJogada}
 */
export function jogar(backendEscolhido, jogadaUsuario) {
	switch (backendEscolhido) {
		case "navegador": {
			const backend = new JogoBackendNavegador();
			return backend.jogar(jogadaUsuario);
		}

		case "api": {
			const backend = new JogoBackendApi();
			return backend.jogar(jogadaUsuario);
		}

		default: {
			throw new Error("Back-end inválido ou não suportado!");
		}
	}
}

export class JogoBackendNavegador {
	/**
	 * Método que realiza a lógica do jogo utilizando o navegador.
	 * @param {Jogada} jogadaUsuario
	 * @returns {ResultadoJogada}
	 */
	async jogar(jogadaUsuario) {
		/** @type {Jogada} */
		const jogadaComputador = {
			numero: Math.floor(Math.random() * 98),
			escolha: jogadaUsuario.escolha === "impar" ? "par" : "impar",
		};

		let soma;
		let escolhaCerta;
		let vencedor;

		soma = jogadaComputador.numero + Number.parseFloat(jogadaUsuario.numero);

		escolhaCerta = soma % 2 === 0 ? "par" : "impar";

		vencedor =
			jogadaUsuario.escolha === escolhaCerta ? "usuario" : "computador";

		/**
		 * a casa sempre ganha.
		 * chance de 1/3 para a casa sempre ganhar e de 2/3 para o jogo ser limpo.
		 */
		const casaGanha = Math.floor(Math.random() * 3) === 0;

		if (casaGanha) {
			console.debug("rs");

			if (vencedor !== "computador") {
				vencedor = "computador";
				escolhaCerta = jogadaComputador.escolha;
				jogadaComputador.numero++;
				soma++;
			}
		}

		/** @type {ResultadoJogada} */
		return {
			rs: casaGanha,

			soma,
			escolhaCerta,
			vencedor,

			jogador: {
				numero: jogadaUsuario.numero,
				escolha: jogadaUsuario.escolha,
			},

			computador: {
				numero: jogadaComputador.numero,
				escolha: jogadaComputador.escolha,
			},
		};
	}
}

export class JogoBackendApi {
	/**
	 * Método que realiza a lógica do jogo utilizando a API.
	 * @param {Jogada} jogadaUsuario
	 * @returns {ResultadoJogada}
	 */
	async jogar(jogadaUsuario) {
		throw new Error("Não implementado!");
	}
}

/**
 * @typedef {import("./types").Jogada} Jogada
 * @typedef {import("./types").JogadaEscolha} JogadaEscolha
 * @typedef {import("./types").IJogoBackend} IJogoBackend
 * @typedef {import("./types").OpcaoBackend} OpcaoBackend
 * @typedef {import("./types").ResultadoJogada} ResultadoJogada
 */
