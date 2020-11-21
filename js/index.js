"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Model;
(function (Model) {
    var Vehiculo = /** @class */ (function () {
        function Vehiculo(id, marca, modelo, precio) {
            this.id = id;
            this.marca = marca;
            this.modelo = modelo;
            this.precio = precio;
        }
        return Vehiculo;
    }());
    Model.Vehiculo = Vehiculo;
})(Model || (Model = {}));
/// <reference path="./Vehiculo.ts"/>
var Model;
(function (Model) {
    var Auto = /** @class */ (function (_super) {
        __extends(Auto, _super);
        function Auto(id, marca, modelo, precio, cantidadPuertas) {
            var _this = _super.call(this, id, marca, modelo, precio) || this;
            _this.id = id;
            _this.marca = marca;
            _this.modelo = modelo;
            _this.precio = precio;
            _this.cantidadPuertas = cantidadPuertas;
            return _this;
        }
        return Auto;
    }(Model.Vehiculo));
    Model.Auto = Auto;
})(Model || (Model = {}));
/// <reference path="./Vehiculo.ts"/>
var Model;
(function (Model) {
    var Camioneta = /** @class */ (function (_super) {
        __extends(Camioneta, _super);
        function Camioneta(id, marca, modelo, precio, cuatroXcuatro) {
            var _this = _super.call(this, id, marca, modelo, precio) || this;
            _this.id = id;
            _this.marca = marca;
            _this.modelo = modelo;
            _this.precio = precio;
            _this.cuatroXcuatro = cuatroXcuatro;
            return _this;
        }
        return Camioneta;
    }(Model.Vehiculo));
    Model.Camioneta = Camioneta;
})(Model || (Model = {}));
/// <reference path="../model/Auto.ts"/>
/// <reference path="../model/Camioneta.ts"/>
var Core;
(function (Core) {
    var ManagerEntity = /** @class */ (function () {
        function ManagerEntity() {
        }
        ManagerEntity.cargarLista = function (listVehiculos) {
            var table = document.getElementById('tCuerpo');
            this.cleanTable();
            if (listVehiculos != null && listVehiculos != undefined) {
                listVehiculos.forEach(function (l) {
                    var tr = document.createElement("tr");
                    var tdId = document.createElement("td");
                    var tdMarca = document.createElement("td");
                    var tdModelo = document.createElement("td");
                    var tdPrecio = document.createElement("td");
                    var tdButonEliminar = document.createElement("td");
                    var tdTypeObj = document.createElement("td");
                    tdId.textContent = l.id.toString();
                    //tdId.className = "invisibilitTd";
                    tdMarca.textContent = l.marca;
                    tdModelo.textContent = l.modelo;
                    tdPrecio.textContent = l.precio.toString();
                    tdButonEliminar.textContent = "Eliminar";
                    if (l != null && l instanceof Model.Auto) {
                        tdTypeObj.textContent = 'Auto';
                    }
                    else {
                        tdTypeObj.textContent = 'Camioneta';
                    }
                    tdTypeObj.className = "invisibilitTd";
                    tr.appendChild(tdId);
                    tr.appendChild(tdMarca);
                    tr.appendChild(tdModelo);
                    tr.appendChild(tdPrecio);
                    tr.appendChild(tdButonEliminar);
                    tr.appendChild(tdTypeObj);
                    tr.setAttribute("id", l.id.toString());
                    table === null || table === void 0 ? void 0 : table.appendChild(tr);
                });
            }
        };
        ManagerEntity.agregarVehiculo = function (marca, modelo, precio, type, cantidadPuertas, cuatroXcuatro) {
            var id = this.listVehiculos.reduce(function (idInicial, vehiculo) {
                if (vehiculo.id > idInicial) {
                    idInicial = vehiculo.id + 1;
                }
                return idInicial;
            }, 1);
            debugger;
            if (type === 'Auto' && cantidadPuertas != null) {
                console.log("entre auto");
                var auto = new Model.Auto(id, marca, modelo, precio, cantidadPuertas);
                this.listVehiculos.push(auto);
            }
            else if (cuatroXcuatro) {
                console.log("entre camioneta");
                var camioneta = new Model.Camioneta(id, marca, modelo, precio, cuatroXcuatro);
                this.listVehiculos.push(camioneta);
            }
            this.cargarLista(this.listVehiculos);
            console.log(this.listVehiculos);
        };
        ManagerEntity.takeDataDom = function () {
            var _a, _b, _c, _d, _e, _f;
            var marca = (_a = document.getElementById('marca')) === null || _a === void 0 ? void 0 : _a.value;
            var modelo = (_b = document.getElementById('modelo')) === null || _b === void 0 ? void 0 : _b.value;
            var precio = (_c = document.getElementById('precio')) === null || _c === void 0 ? void 0 : _c.value;
            var tipo = (_d = document.getElementById('tipo')) === null || _d === void 0 ? void 0 : _d.value;
            var cantPuertas = (_e = document.getElementById('cantPuertas')) === null || _e === void 0 ? void 0 : _e.value;
            var cuatroxcuatro = (_f = document.getElementById("cuatro")) === null || _f === void 0 ? void 0 : _f.value;
            if (marca != '' && modelo != '' &&
                precio != '' && tipo != '') {
                this.agregarVehiculo(marca, modelo, Number(precio), tipo, Number(cantPuertas));
            }
        };
        ManagerEntity.cleanTable = function () {
            var table = document.getElementById('tCuerpo');
            for (var i = 0; i < table.rows.length; i++) {
                table.deleteRow(i);
            }
        };
        ManagerEntity.listVehiculos = [];
        return ManagerEntity;
    }());
    Core.ManagerEntity = ManagerEntity;
})(Core || (Core = {}));
/// <reference path="./core/manejador.ts"/>
var ManagerEntity = Core.ManagerEntity;
window.addEventListener('load', function () {
    var btnAlt = document.getElementById('btAlta');
    btnAlt === null || btnAlt === void 0 ? void 0 : btnAlt.addEventListener("click", function () {
        showPopUp();
        var btn = document.getElementById('btnSave');
        var close = document.getElementById('closePopUp');
        btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", function () {
            ManagerEntity.takeDataDom();
            cleanForm();
            closePopUp();
        });
        close === null || close === void 0 ? void 0 : close.addEventListener("click", function () {
            //deberia limpiar el form
            cleanForm();
            closePopUp();
        });
    });
    filterListCheckbox();
});
function filterListCheckbox() {
    var checkId = document.getElementById('checkId');
    var checkMarca = document.getElementById('checkMarca');
    var checkModelo = document.getElementById('checkModelo');
    var checkPrecio = document.getElementById('checkPrecio');
    checkId === null || checkId === void 0 ? void 0 : checkId.addEventListener('click', function () {
        if ($('checkId').checked) {
            $('columnId').className = "invisibilitTd";
        }
        else {
            $('columnId').className = "";
        }
    });
    checkMarca === null || checkMarca === void 0 ? void 0 : checkMarca.addEventListener('click', function () {
        if ($('checkMarca').checked) {
            $('columnMarca').className = "invisibilitTd";
        }
        else {
            $('columnMarca').className = "";
        }
    });
    checkModelo === null || checkModelo === void 0 ? void 0 : checkModelo.addEventListener('click', function () {
        if ($('checkModelo').checked) {
            $('columnModelo').className = "invisibilitTd";
        }
        else {
            $('columnModelo').className = "";
        }
    });
    checkPrecio === null || checkPrecio === void 0 ? void 0 : checkPrecio.addEventListener('click', function () {
        if ($('checkPrecio').checked) {
            $('columnPrecio').className = "invisibilitTd";
        }
        else {
            $('columnPrecio').className = "";
        }
    });
}
function $(id) {
    return document.getElementById(id);
}
function showPopUp() {
    $("containerPopup").hidden = false;
}
function closePopUp() {
    $("containerPopup").hidden = true;
}
function cleanForm() {
    document.getElementById('marca').value = '';
    document.getElementById('modelo').value = '';
    document.getElementById('precio').value = '';
    document.getElementById('tipo').value = '';
    document.getElementById('cantPuertas').value = '';
    document.getElementById("cuatro").value = '';
}
