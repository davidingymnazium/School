function limit (string, limit) {  
    return string.substring(0, limit)
  }
function podmínka(obj, typ){
    if(!(obj instanceof typ) ){
        throw new Error(`nesplnit podmínky`)
    }
}

class Kniha {
    constructor (název, autor, signatura, poznámka) {
        this.název = název;
        this.autor = autor;
        this.signatura = signatura;
        this.poznámka = poznámka;
    }
}

class Seznam {
    constructor (){
        this.seznam = []
    }
    
    VLOZ(knížka){
        podmínka(knížka, Kniha)
        this.seznam.push(knížka)
    }

    HLEDEJ(knížka){
        podmínka(knížka, Kniha)

        výsledek = this.seznam.filter((název) => {
            let nález = název.toString().toLowerCase()
            return nález && (knížka.název.toLowerCase().includes(nález) || knížka.autor.toLowerCase().includes(název) || knížka.signatura.toLowerCase.includes(název))
        })
        return výsledek
    }

    VYMAZ(knížka){
        podmínka(knížka, Kniha)

        new_seznam = this.seznam.filter((signatura) => {
            let sign = signatura.toString().toLowerCase()
            return sign && knížka.signatura.toLowerCase().includes(sign)
        })

        return new_seznam
    }

    OPRAV(knížka, atribut, data){
        podmínka(knížka, Kniha)
        switch (atribut) {
            case "název":
                knížka.název = data
                break;
            case "autor":
                knížka.autor = data
                break;
            case "signatura" :
                knížka.signatura = data
                break;
            case "poznámka" :
                knížka.poznámka = data
                break;
            default:
                break;
        }
    }

}

