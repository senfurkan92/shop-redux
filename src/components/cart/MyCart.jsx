import { useSelector, useDispatch } from 'react-redux'
import { useMemo } from 'react' 
import MyCartItem from './MyCartItem'
import AppBtn from '../ui/AppBtn'
import { submitOrder } from '../../store/slices/order-slice'

export default function MyCart() {

    const dispatch = useDispatch()

    const cartItems = useSelector((state) => state.cart.items)

    const total = useMemo(() => cartItems.reduce((p,c) => {
        p += c.amount * c.cost
        return p
    },0))

    const btnClickHandler = () => {
        const payload = {
            cartItems,
            total,
        }
        dispatch(submitOrder(payload))
    }

    return (
        <div>
            {
                cartItems.map((x) => 
                    <div className='mb-4 border-b border-base-content' key={x.id}>
                        <MyCartItem 
                            item={x}
                        />
                    </div>
                )
            }
            <div className='flex justify-around items-center mb-4'>
                <div className='text-warning font-semibold text-3xl'>
                    TOTAL :
                </div>
                <div className='text-success font-semibold text-2xl'>
                    $ {total.toFixed(2)}
                </div>
            </div>
            <div className='text-center'>
                <AppBtn 
                    config={'w-56 hover:bg-success hover:text-success-content'}
                    borderColor={'bg-base-300'}
                    textColor={'text-success'}
                    onClick={() => btnClickHandler()}
                >
                    SUBMIT
                </AppBtn>
            </div>
        </div>
    )

}