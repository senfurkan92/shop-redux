import AppBtn from "../ui/AppBtn"
import { FaPlus, FaMinus } from 'react-icons/fa'
import { useState } from "react"
import { useDispatch } from 'react-redux'
import { addToCart } from '../../store/slices/cart-slice'

export default function MealCard({item}) {

    const dispatch = useDispatch() 

    const [amount, setAmount] = useState(1)

    const increase  = () => {
        setAmount((v) => v+1)
    } 

    const decrease = () => {
        if (amount > 1){
            setAmount((v) => v-1)
        }
    } 

    const add = () => {
        const payload = {
            item,
            amount
        }
        dispatch(addToCart(payload))
    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl image-full h-full opacity-90 hover:opacity-100 transition-all">
            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
            <div className="card-body relative">
                <h2 className="card-title">{item.title}</h2>
                <p>{item.description}</p>
                <div className="card-actions flex justify-end items-center">
                    <div className=" bg-base-100 py-1 px-4 rounded-md">
                        <div className="flex justify-between items-center">
                            <button className="cursor-pointer active:opacity-50" onClick={decrease}>
                                <FaMinus/>
                            </button>
                            <div className="mx-4 w-5 text-center font-semibold select-none">
                                {amount}
                            </div>
                            <button className="cursor-pointer active:opacity-50" onClick={increase}>
                                <FaPlus/>
                            </button>
                        </div>
                    </div>
                    <AppBtn
                        borderColor={'border-warning'}
                        bgColor={'bg-base-300'}
                        onClick={() => add()}
                    >
                        <span className="italic font-semibold select-none">
                            Add to Cart
                        </span>
                    </AppBtn>
                </div>
                <div className="text-success text-2xl absolute top-3 right-3 rotate-12 font-semibold italic select-none">
                    $ {item.cost.toFixed(2)}
                </div>
            </div>
        </div>
    )
}