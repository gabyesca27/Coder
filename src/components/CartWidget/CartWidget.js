import cart from "../../assets/pictures/cart-fill.svg"

const CartWidget = () => {
    return (
        <div>
            <img src={cart} alt='0' />
            <span className="badge badge-num badge-primary badge-pill">14</span>
        </div>
    )
}

export default CartWidget