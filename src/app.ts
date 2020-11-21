/// <reference path="./core/manejador.ts"/>

const { ManagerEntity } = Core;



window.addEventListener('load', function(){

    var btnAlt = document.getElementById('btAlta');
    btnAlt?.addEventListener("click",function () {
        showPopUp();
        var btn = document.getElementById('btnSave');
        var close = document.getElementById('closePopUp');
        btn?.addEventListener("click",function () {
                ManagerEntity.takeDataDom();
                cleanForm()
                closePopUp();
            
           
        })
        close?.addEventListener("click",function () {
            //deberia limpiar el form
            cleanForm()
            closePopUp();
         })
    })
    filterListCheckbox();

})

function filterListCheckbox(){
    let checkId = document.getElementById('checkId');
    let checkMarca = document.getElementById('checkMarca');
    let checkModelo = document.getElementById('checkModelo');
    let checkPrecio = document.getElementById('checkPrecio');
    checkId?.addEventListener('click',function () {
        if($('checkId').checked ){
            $('columnId').className = "invisibilitTd";
        }else{
            $('columnId').className = ""
        }
        
    });
    checkMarca?.addEventListener('click',function () {
        if($('checkMarca').checked){

            $('columnMarca').className = "invisibilitTd";
        }else{
            $('columnMarca').className = ""
        }
    });
    checkModelo?.addEventListener('click',function () {
        
        if($('checkModelo').checked){
            $('columnModelo').className = "invisibilitTd";
        }else {
            $('columnModelo').className = ""
        }
    });
    checkPrecio?.addEventListener('click',function () {
        if($('checkPrecio').checked){
            $('columnPrecio').className = "invisibilitTd";
        }else{
            $('columnPrecio').className = ""
        }
    });

}

function $(id:any){
    return <HTMLInputElement>document.getElementById(id);
}

function showPopUp() {
    $("containerPopup").hidden = false;
}

function closePopUp() {
    $("containerPopup").hidden = true;
}




function cleanForm(){
    (<HTMLInputElement>document.getElementById('marca')).value = '';
    (<HTMLInputElement>document.getElementById('modelo')).value = '';
    (<HTMLInputElement>document.getElementById('precio')).value= '';
     (<HTMLInputElement>document.getElementById('tipo')).value= '';
    (<HTMLInputElement>document.getElementById('cantPuertas')).value= '';
    (<HTMLInputElement> document.getElementById("cuatro")).value= '';
}

