import logo from '../../assets/kindpng_6746080.png'
import CartBtn from '../cart/CartBtn'

export default function AppHeader() {
    return (
        <div className="flex justify-between items-center">
            <img src={logo} className="h-14"/>
            <CartBtn/>
        </div>
    )
}