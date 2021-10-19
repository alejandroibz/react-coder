import "./itemCount.css";

export const ItemCount = () => {
    return (
        <div className="containerItemCount">
            <div className="itemCountInfo">
                <h4>Zapatillas Nike XXX</h4>
                <p>Precio:<span>31000</span></p>
            </div>
            <div className="itemCount">
                <span className="btnMenos">-</span>
                <span className="count">0</span>
                <span className="btnAgg">+</span>
            </div>
        </div>
    );



}