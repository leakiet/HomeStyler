import './CartItem.css'

function CartItem({ product, deleteCart, onQuantityChange }){
    return (
        <ul className="cartItem-format cartlist-main">
            <img src={product.image[0]} alt="" className="cartItem-product-icon"/>
                <li>{product.name}</li>
                <li>${product.price}</li>
                <li className="cartItem-quantity">
                    <button onClick={() => onQuantityChange('decrement', product.id)}>-</button>
                    <div>{product.quantity}</div>
                    <button onClick={() => onQuantityChange('increment', product.id)}>+</button>
                </li>
                <li>${product.price*product.quantity}</li>               
                <li><i className='bi bi-x-circle-fill cartItem-remove-icon' onClick={()=>{deleteCart(product.id)}}/></li>
        </ul>
    )
} export default CartItem;