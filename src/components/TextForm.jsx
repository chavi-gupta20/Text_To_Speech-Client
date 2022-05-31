import { useState,useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { useLocation } from 'react-router-dom'
import { fetchVoice,fetchGtts } from '../store/actions/actionCreator';
export default function TextForm(props) {

    const location = useLocation();
    const route =location.pathname;
    const dispatch=useDispatch();
    const path= useSelector(state=>state.path)
    const loading=useSelector(state=>state.loading)
    const error=useSelector(state=>state.error)
    
    useEffect(()=>{
       return(
            console.log("bad request")
       );
    },[error])
   
    useEffect(()=>{
        if(path==='' || !path)
        {
            return;
        }
        console.log(path)
        const music = new Audio(path+"?xyz="+new Date().getTime);
        music.load();
        music.play();
        music.addEventListener('loadeddata', () => {
        let duration = music.duration;
        console.log(duration);
        setTimeout(() => {
            setText("")
        }, duration*1000);
        })


        
    },[path])
   
     const handleClick = ()=>{
        if(route==='/voicemaker')
            dispatch(fetchVoice(text))
        else if(route==='/gtts')
            dispatch(fetchGtts(text))

    }

    const handleChange = (event) => {
        if(loading)
            return
        let newText = event.target.value;
        setText(newText)
    }

    const [text, setText] = useState("")
    return (
        <div className='text-form'>
            <h2>{props.heading}</h2>
            <textarea className="input" rows="8" value={text} onChange={handleChange}></textarea>
            <div className="speak-btn">
                <button onClick={handleClick} id="say-btn">SPEAK</button>
            </div>
            {loading && <div>Loading...</div>}
        </div>
    )
}
