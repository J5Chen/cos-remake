
import styles from './CartList.module.css';

function CartList({ cartItems, removeCart, clearCart, updatePortal }) {
    return (
        <div>
            {cartItems.length === 0 ? (
                <p className={styles.empty}>Empty Cart</p>
            ) : (
                <div className={styles.cartView}>
                    {cartItems.map((item, index) => (
                        <div key={index} className={styles.cartItem}>
                            <div className={styles.text}>
                                <p>{item.quantity}</p>
                                <p>{item.name}</p>
                            </div>
                            <button onClick={() => removeCart(item.name)}>X</button>
                        </div>
                    ))}
                    <div className={styles.buttonDiv}>
                        <button onClick={() => {clearCart(); updatePortal('Checkout')}} className={styles.checkout}>Checkout</button>
                        <button onClick={() => clearCart()} className={styles.checkout}>Clear</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CartList;
