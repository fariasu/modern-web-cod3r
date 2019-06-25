    // Comportamentos
    const podeLimpar = (state) => ({
        limparCasa: (horario) => {
            if(state.temRodo) {
                console.log(`Começando a limpar a casa às ${horario}`);
                console.log('...');
                console.log('Terminei de limpar, agora vou passar o rodo');
                console.log('beep boop....');
            } else {
                console.log('Estou varrendo a casa!');
                
            }
        }
    })
     
    const podeCacarRatos = (state) => ({
        despejarRatoeiras: (qtd) => {
            if(state.qtdRatoeiras > qtd) {
                console.log(`Despejando ${qtd} ratoeiras`)
                state.qtdRatoeiras -= qtd
            } else {
                console.log('Comprar mais ratoeiras')
            }
        } 
    })
     
    const podeCacarBaratas = (state) => ({
        atropelar: (tipoDeRotina) => {
            if(tipoDeRotina == 'intensa') {
                console.log('atropelando sem piedade beep boop');
            } else if(tipoDeRotina == 'leve') {
                console.log('atropelando com carinho, desculpe-me barata... beep boop');
            }
        } 
    })
     
     
    // Variações de tipos de robos
    const limpador = () => {
        const state = {
            temRodo: true
        }
     
        return Object.assign({}, podeLimpar(state))
    }
     
    const limpadorCacadorDeRatos = () => {
        const state = {
            temRodo: false, 
            qtdRatoeiras: 30
        }
     
        return Object.assign({}, podeLimpar(state), podeCacarRatos(state))
    }
     
     
    // Instâncias
    const cleaner3000 = limpador()
    cleaner3000.limparCasa('10:30')
     
     
    // Mata Ratos e Limpa Casas(MRLC)
    const MRLC8000 = limpadorCacadorDeRatos()
     
    MRLC8000.despejarRatoeiras(20)
    MRLC8000.limparCasa('10:00')