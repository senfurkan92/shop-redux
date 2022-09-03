import { FaPlus, FaMinus, FaTimes } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { increaseAmount, decreaseAmount, removeFromCart } from '../../store/slices/cart-slice'

export default function MyCartItem({item}) {
    const dispatch = useDispatch()

    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <div className=" w-48 h-48">
                <img className=" object-contain w-full h-full" src={item.img} alt="Movie"/>
            </div>
            <div className="card-body">
                <h2 className="card-title uppercase">{item.title}</h2>
                <div className="flex justify-between items-center w-24">
                    <button 
                        className="cursor-pointer active:opacity-50"
                        onClick={() => dispatch(decreaseAmount(item.id))}
                    >
                        <FaMinus/>
                    </button>
                    <div className="mx-4 w-5 text-center font-semibold select-none">
                        {item.amount}
                    </div>
                    <button 
                        className="cursor-pointer active:opacity-50"
                        onClick={() => dispatch(increaseAmount(item.id))}
                    >
                        <FaPlus/>
                    </button>
                </div>
                <p className="text-success font-bold">
                    ${item.cost.toFixed(2)} x {item.amount} = 
                    <span className="text-xl">${(item.cost * item.amount).toFixed(2)}</span>
                </p>
            </div>
            <div className="absolute top-0 right-0">
                <button 
                    className='px-2 py-1 bg-secondary text-secondary-content rounded-br-none rounded-bl-lg'
                    onClick={() => dispatch(removeFromCart(item.id))}
                >
                    <FaTimes></FaTimes>
                </button>
            </div>
        </div>
    )
}