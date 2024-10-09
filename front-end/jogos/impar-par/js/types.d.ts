export type JogadaEscolha = "impar" | "par";
export type JogadaPlayer = "usuario" | "computador";

export type Jogada = {
  numero: number;
  escolha: JogadaEscolha;
};

export type ResultadoJogada = {
  rs: boolean;

  soma: number;
  escolhaCerta: string;
  vencedor: JogadaPlayer;

  jogador: Jogada;
  computador: Jogada;
};

export type OpcaoBackend = "navegador" | "api";

export interface IJogoBackend {
  jogar(jogadaUsuario: Jogada): Promise<ResultadoJogada>;
}
