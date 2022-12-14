import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import {CartContext} from '../../context/CartContext'
import "./cartWidget.scss";


export const CartWidget = () => {
    const {cartCant} = useContext(CartContext)
    return(
        <Link to="/cart">
            <ShoppingCartIcon sx={{ fontSize: 25 }} />
            <span className={cartCant() > 0 ? "cartView" : "cartHide"}>{cartCant()}</span>
        </Link>
    )
}