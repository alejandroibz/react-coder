import "./cartWidget.css";
import logoCarrito from '../../img/carrito1.png';


const CartWidget =()=>{
    return(
        <div className="divCarrito">
            <img src={logoCarrito} alt="logo carrito png" className="imgCarrito"/>
            <p className="counter">0</p>
        </div>
    )
    
}

export default CartWidget;