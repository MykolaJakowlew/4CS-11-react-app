import { useEffect } from "react"
import classes from './main.module.css'
import { useNavigate } from "react-router-dom"
export const MainComponent = () => {

    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (!token) {
            navigate('/login')
        }
    }, [])

    return (<div className={classes.main}>main component</div>)
}