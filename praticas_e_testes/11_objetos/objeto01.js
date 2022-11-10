let amigo = {nome: 'Kevin', 
            sexo: 'M',
            peso: 73.4,
            engordar(p){
                console.log('Engordou')
                this.peso += p
            }}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)