import { useSelector} from 'react-redux'

export default function Notification(){
    const {notificationShow, notificationTitle, notificationMsg, notificationState} = useSelector((state) => state.ui)

    const colorCalculate = () => {
        let result = ''
        switch (notificationState) {
            case 'success':
                result = 'bg-success text-success-content'
                break;
            case 'error':
                result = 'bg-error text-error-content'
                break;
            case 'warning':
                result = 'bg-warning text-warning-content'
                break;
            default:
                result = 'bg-info text-info-content'
                break;
        }
        return result
    }

    const colorConfig = colorCalculate()

    return (
        notificationShow &&
        <div className={`fixed top-24 right-8 w-72 py-2 px-4 z-50 rounded-lg ${colorConfig}`}>
            <p className="font-bold uppercase">-{notificationTitle}-</p>
            <p className="font-semibold text-sm">{notificationMsg}</p>
        </div>
    )
}