@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&display=swap');
:root{
    --cor-de-fundo: #1E1E1E;
    --verde: #6FFF57;
    --cor-de-texto: #850000;
    --botao-ativo: #00fff2;
    --texto-ativo: #00fff2;
    --fundo-posbotao: #000000;
    --botao-inativo: linear-gradient(to left, rgb(131, 0, 0), rgb(34, 34, 34),rgba(34, 34, 34, 0.884), rgb(0, 125, 139));;
    --texto-fundo: linear-gradient(to left, rgba(0, 0, 0, 0.291), rgba(35, 35, 35, 0.591), rgba(0, 0, 0, 0.291));; 
    --texto-fundo-mouse: rgb(0, 255, 251);
    --verde: lightgreen;
}

body{
    background-color: var(--cor-de-fundo);
    color: var(--cor-de-texto);
    font-family: "Jacquarda Bastarda 9", serif;
    font-weight: 400;
    font-size: 50px;
    font-style: normal;
}
.botao:first-child{
    border-radius: 40px 40px 0 0    
}

.botao:last-child{
    border-radius: 40px 40px 0 0;
}

.titulo-principal{
    background: var(--texto-fundo);
    border-bottom: 4px solid var(--texto-ativo);
    border-right: 4px solid var(--texto-ativo);
    border-left: 4px solid var(--texto-ativo);
    border-top: 4px solid var(--texto-ativo);    
    font-family: "Jacquarda Bastarda 9", serif;
    text-align: center;
    width: 70%;
}

.botao{
    font-family: "Jacquarda Bastarda 9", serif;
    color: var(--botao-ativo);
    font-size: 20px;
    justify-content: center;        
    align-items: center;
    padding: 1em;
    border-bottom: 2px solid var(--botao-ativo);
    border-right: 2px solid var(--botao-ativo);
    border-left: 2px solid var(--botao-ativo);
    border-top: 2px solid var(--botao-ativo);
    width: 100%;
    display: flex;
    background: var(--botao-inativo);
}

.botao:hover{
    transition: 1.5s;
    background-color: var(--texto-fundo-mouse);
    opacity: 1;
    width: 130%;
    border-bottom: 10px solid var(--botao-ativo);
}

.botao:last-child{
    border-radius: 40px 40px 0 0;
}

 .botao:first-child{
        border-radius: 40px 40px 0 0;
    }

.botoes{
    display: block;
}

.botao.ativo{
    background-color: var(--botao-ativo);
    border-bottom: 4px solid var(--botao-ativo);
}

.abas-textos{
    background: var(--texto-fundo);
    padding: 40px;
    border-radius: 0 0 40px 40px;
    border-bottom: 2px solid var(--botao-ativo);
    border-right: 2px solid var(--botao-ativo);
    border-left: 2px solid var(--botao-ativo);
    border-top: 2px solid var(--botao-ativo);
}

.aba-conteudo.ativo{
    display:block;
}

.aba-conteudo{
    display: none;
}

.aba-conteudo-titulo-principal{
    font-size: 40px;
    text-align: center;
}
.aba-conteudo-titulo-secundario{
    text-align: center;
    color: var(--botao-ativo);
}
    

.conteudo-principal{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;

}

.contador{
    display:flex;
    justify-content: center;
}

.contador-digito{
    padding: 0 16px;
    text-align:center;
}

.contador-digito-numero{
    font-size: 80px;
    margin:0;
}

@media screen and (min-width: 768px){
    .botoes {
        display: flex;
    }

    .botao:first-child {
        border-radius: 40px 0 0 0;
    }

    .botao:last-child {
        border-radius: 0 40px 0 0;
    }
}

