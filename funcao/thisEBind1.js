const pessoa = {
    saudacao: "Bom Dia !",
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas : funcional e orientado a objetos

const falarDePessoa = pessoa.falar.bind(pessoa) 
falarDePessoa()

const falar2 = pessoa.falar
falar2()