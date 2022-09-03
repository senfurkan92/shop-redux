import { FaTimes } from 'react-icons/fa'

export default function Modal({children, show, closeAction}) {
    return (
        show &&
        <div 
            className="fixed w-screen h-screen top-0 right-0 z-40 bg-slate-500/50"
        >
            <div 
                className="absolute md:w-1/2 w-9/12 bg-base-300 rounded-lg p-4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-h-[80vh] overflow-y-auto border border-base-content"
            >
                <div>
                    {children}
                </div>
                <div className="absolute top-0 right-0">
                    <button 
                        className='px-2 py-1 bg-error text-error-content rounded-br-none rounded-bl-lg'
                        onClick={() => closeAction()}
                    >
                        <FaTimes></FaTimes>
                    </button>
                </div>
            </div>
        </div>
    )
}