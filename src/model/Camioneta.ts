/// <reference path="./Vehiculo.ts"/>

namespace Model{
    export class Camioneta extends Vehiculo{
        constructor(public id:number,public marca:string,public modelo:string,public precio:number,public cuatroXcuatro:boolean) {
            super(id,marca,modelo,precio);
        }
    }
}