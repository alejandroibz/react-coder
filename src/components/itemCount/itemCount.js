import React, { useState } from "react";
import "./itemCount.css";

export const ItemCount = (props) => {

    const [valor, setValor] = useState(props.initial);

    // Función agregar stock
    function onAdd() {
        if (valor < props.stock) {
            setValor(parseInt(valor) + 1)
        } else {
            alert("No hay stock disponible")
        }
    }

    //Función quitar stock
    function onSubstract() {
        if (valor >= 1) {
            setValor(parseInt(valor) - 1)
        }

    }

    return (
        <div className="containerItemCount">
            <div className="itemCount">
                <button className="btnCount" onClick={onSubstract}>-</button>
                <input className="count" type="text" value={valor} />
                <button className="btnCount" onClick={onAdd}>+</button>
            </div>
            <div>
                <button className="aggCarrito">Agregar al carrito</button>
            </div>
        </div>
    );



}




