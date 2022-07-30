const controllerspeso = {};
const e = require("express");

controllerspeso.getAll = (req, res) => {
    console.log(res);
}




controllerspeso.create = (req, res) => {
    const pesofinal=[];
    const peso_intermedio= [];
    const peso_inicial = {};
    let peso_mayor=0;
    const mayorpeso={};
    const peso_perdido = [];
    responsi={};
    let perdieron_peso = 0;

    const peso = req.body;
    
    let pesos = 0;

    for (let i = 0; i < peso["nombre"].length; i++) {
        const peso_final= peso["nombre"][i];

        let pesoultimo = (peso_final.n1 + peso_final.n2 + peso_final.n3 );

        let peso = {}
        peso.nombre = peso_final.nombre;
        peso.pesofinal= pesoultimo

        pesofinal.push(peso);
        
        if(pesoultimo < peso_inicial){
          pesos++
        }

        if (pesoultimo > peso_mayor) {
            peso_mayor = pesoultimo;
            mayorpeso['nombre'] = peso_final.nombre;
            mayorpeso['gano peso'] = peso_mayor;
        }

        let peso2 = {}
        //calcular el peso que perdieron 
        if (pesoultimo <= peso_inicial) {
            peso2.nombre = pesoultimo.nombre;
            peso2.perdieron_peso= peso_final;
            peso_perdido.push(peso2);
        }
        

        let peso_estandar = {}

        if (pesoultimo == peso_inicial) {
            peso_estandar['nombre'] = peso_final['nombre']; 
            peso_estandar.cumplio= pesoultimo
            peso_intermedio.push(peso_estandar);
        }
        
    }

    responsi.peso=peso;
    responsi.pesomayor=mayorpeso;
    responsi.pesoperdido=peso_perdido;
    responsi.peso_intermedio=peso_intermedio;
    responsi.personasquecumplen=pesos;

    res.json(responsi);



};

module.exports = controllerspeso;