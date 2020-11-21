/// <reference path="./Vehiculo.ts"/>

namespace Model{
    export class Auto extends Vehiculo {
        constructor(public id:number,public marca:string,public modelo:string,public precio:number,public cantidadPuertas:number) {
            super(id,marca,modelo,precio);
        }

    }
}