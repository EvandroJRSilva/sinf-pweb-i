import { use, useState } from "react";

function Quadrado({valor, quadradoClicado}) {
    return <button className="square" onClick={quadradoClicado}>{valor}</button>
}

function Quadro({xEhProximo, quadrados, jogada}) {
    function clicado(i) {
        if (quadrados[i] || calculaVencedor(quadrados)){
            return;
        }
        
        const proximosQuadrados = quadrados.slice();
        if (xEhProximo){
            proximosQuadrados[i] = "X";
        } else{
            proximosQuadrados[i] = "O";
        }
        jogada(proximosQuadrados);
    }

    const vencedor = calculaVencedor(quadrados);
    let status;
    if (vencedor) {
        status = 'Vencedor: ' + vencedor;
    } else{
        status = "Próximo jogador: " + (xEhProximo ? 'X' : 'O');
    }

    return (
        <>
            <div className="status">{status}</div>
            <div className="board-row">
                <Quadrado valor={quadrados[0]} quadradoClicado={() => clicado(0)} />
                <Quadrado valor={quadrados[1]} quadradoClicado={() => clicado(1)} />
                <Quadrado valor={quadrados[2]} quadradoClicado={() => clicado(2)} />
            </div>
            <div className="board-row">
                <Quadrado valor={quadrados[3]} quadradoClicado={() => clicado(3)} />
                <Quadrado valor={quadrados[4]} quadradoClicado={() => clicado(4)} />
                <Quadrado valor={quadrados[5]} quadradoClicado={() => clicado(5)} />
            </div>
            <div className="board-row">
                <Quadrado valor={quadrados[6]} quadradoClicado={() => clicado(6)} />
                <Quadrado valor={quadrados[7]} quadradoClicado={() => clicado(7)} />
                <Quadrado valor={quadrados[8]} quadradoClicado={() => clicado(8)} />
            </div>
        </>
    );
}

export default function Jogo(){
    const [xEhProximo, setXEhProximo] = useState(true);
    const [historico, setHistorico] = useState([Array(9).fill(null)]);
    const [jogadaAtual, setJogadaAtual] = useState(0);
    const jogoAtual = historico[jogadaAtual];

    function passaJogada(proximosQuadrados){
        const proximoHistorico = [...historico.slice(0, jogadaAtual + 1), proximosQuadrados];
        setHistorico(proximoHistorico);
        setJogadaAtual(proximoHistorico.length - 1);
        setXEhProximo(!xEhProximo);
    }

    function pularPara(proximaJogada){
        setJogadaAtual(proximaJogada);
        setXEhProximo(proximaJogada % 2 === 0);
    }

    const jogadas = historico.map((quadrados, jogada) => {
        let descricao;
        if (jogada > 0){
            descricao = "Ir para a jogada #" + jogada;
        } else{
            descricao = "Voltar para o início do jogo";
        }

        return (
            <li key={jogada}>
                <button onClick={() => pularPara(jogada)}>{descricao}</button>
            </li>
        );
    });
    
    return (
        <div className="game">
            <div className="game-board">
                <Quadro xEhProximo={xEhProximo} quadrados={jogoAtual} jogada={passaJogada} />
            </div>
            <div className="game-info">
                <ol>{jogadas}</ol>
            </div>
        </div>
    );
}

function calculaVencedor(quadrados) {
    const linhas = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6], 
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < linhas.length; i++){
        const [a, b, c] = linhas[i];
        if (quadrados[a] && quadrados[a] === quadrados[b] && quadrados[a] === quadrados[c]){
            return quadrados[a];
        }
    }
    return null;
}