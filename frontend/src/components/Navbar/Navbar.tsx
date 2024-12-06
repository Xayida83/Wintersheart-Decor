import { Link, useNavigate } from "react-router-dom"
import styles from './Navbar.module.css';
import { useCart } from '../../context/CartContext';



export const Navbar = () => {
  const navigate = useNavigate();
  const { calculateCartQuantity  } = useCart()
  
  return (
    <nav className={styles.navbar}>
      <div className={styles.linkContainer}>
        <Link to="/" className={styles.link}>Home</Link>
        <p onClick={() => navigate(-1)} className={styles.link}><span>❮</span> Go Back</p>
        <Link to="/cart" className={styles.link}>
        Cart {calculateCartQuantity() > 0 && <span className={styles.number}>({calculateCartQuantity()})</span>}
        </Link>
      </div>
    </nav>
  )
}