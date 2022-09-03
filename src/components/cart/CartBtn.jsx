import AppBtn from "../ui/AppBtn"
import { FaCartPlus } from 'react-icons/fa'
import Modal from "../ui/Modal"
import { useState } from "react"
import { useSelector } from 'react-redux'
import MyCart from "./MyCart"

export default function CartBtn() {
    const [showModal, setShowModal] = useState(false)

    const cartItemsCount = useSelector((state) => state.cart.items.length)

    return (
        <>
            <AppBtn
                config={'w-32 py-2'}
                onClick={() => setShowModal(true)}
            >
                <div className="relative">
                    <div className="flex justify-left items-center">
                        <FaCartPlus/>
                        <span>&nbsp; My Cart</span>
                    </div>
                    <div className="text-center rounded-full bg-warning text-warning-content absolute w-7 -top-1 -right-3 scale-75 font-bold">
                        {cartItemsCount}
                    </div>
                </div>
            </AppBtn>
            <Modal
                show={showModal}
                closeAction={() => setShowModal(false)}
            >
                <div className="text-center uppercase border-b pb-3 font-bold text-2xl border-warning mb-4 text-warning">
                    My Cart
                </div>
                <div>
                    <MyCart/>
                </div>
            </Modal>
        </>
    )
}