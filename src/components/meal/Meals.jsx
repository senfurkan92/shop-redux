import MealCard from "./MealCard"
import { useDispatch, useSelector } from 'react-redux'
import { fetchMeals } from '../../store/slices/meal-slice'
import { useEffect } from "react"

export default function Meals() {

    const mealList = useSelector((state) => state.meal.list)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchMeals())
    }, [])

    return (
        <div className="flex justify-center align-center flex-row flex-wrap">
            {
                mealList.map(x => (
                <div className="p-2" key={x.id}>
                    <MealCard
                        item={x}
                    />
                </div>
                ))
            }
        </div>
    )
}