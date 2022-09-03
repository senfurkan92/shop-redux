export default function AppBtn({children, onClick, bgColor, config, borderColor, textColor}) {
    const onClickHandler = () => {
        if(!!onClick) {
            onClick()
        }
    }

    const _class = `py-1 px-4 rounded-md ${bgColor? bgColor : 'bg-base-100'} ${textColor? textColor : 'text-base-content'} border ${borderColor ? borderColor : 'border-base-content'} ${config ? config : ''} active:opacity-50`

    return (
        <button 
            className={_class}
            onClick={onClickHandler}
        >
            {children}
        </button>
    )
}