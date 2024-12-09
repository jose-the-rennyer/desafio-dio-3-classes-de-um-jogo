class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        this.ataque;

        switch (this.tipo) {
            case "guerreiro":
                this.ataque = "espada"
            break;
            case "mago":
                this.ataque = "magia"
            break;
            case "monge":
                this.ataque = "artes marciais"
            break;
            case "ninja":
                this.ataque = "shuriken"
            break;
        }
    }

    atacar() {
        console.log(`O ${this.tipo} atacou usando ${this.ataque}`)
    }
}

const guerreiro = new Heroi("José rennyer", 23, "guerreiro")
const mago = new Heroi("Rhuan carlos", 24, "mago")
guerreiro.atacar()
mago.atacar()