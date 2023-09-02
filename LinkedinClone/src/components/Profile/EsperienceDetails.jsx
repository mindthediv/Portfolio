import { useEffect } from "react"
import Esperienze from "./Esperienze"
import { useSelector } from "react-redux"

const EsperienceDetails = ()=>{
    const experience = useSelector(state=>state.experience.content)
    useEffect(()=>{

    },[])
    useEffect(()=>{

    },[experience.length])
    return (<Esperienze />)
}

export default EsperienceDetails