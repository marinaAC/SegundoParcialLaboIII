/// <reference path="../model/Auto.ts"/>
/// <reference path="../model/Camioneta.ts"/>

namespace Core {
    export class ManagerEntity {
        static listVehiculos:Array<any>=[];

        static cargarLista(listVehiculos:Array<any>) {
            let table = <HTMLTableElement>document.getElementById('tCuerpo');
            this.cleanTable();
            if(listVehiculos!= null && listVehiculos != undefined){
                listVehiculos.forEach(l => {
                    let tr = document.createElement("tr");
                    let tdId = document.createElement("td");
                    let tdMarca = document.createElement("td");
                    let tdModelo = document.createElement("td");
                    let tdPrecio = document.createElement("td");
                    let tdButonEliminar = document.createElement("td");
                    let tdTypeObj = document.createElement("td");
                    tdId.textContent = l.id.toString();
                    //tdId.className = "invisibilitTd";
                    tdMarca.textContent=l.marca;
                    tdModelo.textContent =l.modelo;
                    tdPrecio.textContent =l.precio.toString();
                    tdButonEliminar.textContent = "Eliminar";
                    if(l != null && l instanceof Model.Auto){
                        tdTypeObj.textContent = 'Auto';
                    }else {
                        tdTypeObj.textContent = 'Camioneta';
                    }
                    tdTypeObj.className = "invisibilitTd";
                    tr.appendChild(tdId);
                    tr.appendChild(tdMarca);
                    tr.appendChild(tdModelo);
                    tr.appendChild(tdPrecio);
                    tr.appendChild(tdButonEliminar);
                    tr.appendChild(tdTypeObj);
                    tr.setAttribute("id",l.id.toString());
                    table?.appendChild(tr);
                });
            }
        }

        static agregarVehiculo(marca:string, modelo:string,precio:number,type:string,cantidadPuertas?:number,cuatroXcuatro?:boolean){
            let id = this.listVehiculos.reduce((idInicial,vehiculo)=>{
                if(vehiculo.id>idInicial){
                    idInicial = vehiculo.id +1;
                }
                return idInicial;
            },1);
            debugger
            if(type==='Auto' && cantidadPuertas != null){
                console.log("entre auto");
                let auto = new Model.Auto(id,marca,modelo,precio,cantidadPuertas);
                this.listVehiculos.push(auto);
            }else if(cuatroXcuatro){
                console.log("entre camioneta")
                let camioneta = new Model.Camioneta(id,marca,modelo,precio,cuatroXcuatro);
                this.listVehiculos.push(camioneta);
            }
            this.cargarLista(this.listVehiculos);
            console.log(this.listVehiculos)
        }

        static takeDataDom(){
            let marca = (<HTMLInputElement>document.getElementById('marca'))?.value;
            let modelo = (<HTMLInputElement>document.getElementById('modelo'))?.value;
            let precio = (<HTMLInputElement>document.getElementById('precio'))?.value;
            let tipo = (<HTMLInputElement>document.getElementById('tipo'))?.value;
            let cantPuertas = (<HTMLInputElement>document.getElementById('cantPuertas'))?.value;
            let cuatroxcuatro =(<HTMLInputElement> document.getElementById("cuatro"))?.value;
            if(marca != '' && modelo!= '' &&
                precio != '' && tipo != ''){
                    this.agregarVehiculo(marca,modelo,Number(precio),tipo,Number(cantPuertas));
            }
        }

        private static cleanTable(){
            let table = <HTMLTableElement>document.getElementById('tCuerpo');
            for(var i = 0; i < table.rows.length; i++) {
                table.deleteRow(i);
            }
        }

    }
}