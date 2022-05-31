
import { FETCH_PATH_FAILURE,FETCH_PATH_REQUEST,FETCH_PATH_SUCCESS } from "./actionTypes"

const fetchPathSuccess=(path)=>{
    return {
        type: FETCH_PATH_SUCCESS,
        payload:{path:path}
        }
}
const fetchPathRequest=(loading)=>{
    return{
        type: FETCH_PATH_REQUEST,
        payload:{loading:loading}
    }
}

const fetchPathFailure=(error)=>{
    return{
        type: FETCH_PATH_FAILURE,
        payload:{
            loading:false,
            error:error
        }
    }
}


export const fetchVoice =(msg)=>{
    return dispatch=>{
        dispatch(fetchPathRequest(true))
        const getData = ()=>{
            const data={
                Engine: 'neural', 
                VoiceId: 'ai2-en-IN-Alisha', 
                LanguageCode: 'en-IN', 
                Text: msg, 
                OutputFormat: 'mp3', 
                SampleRate: '48000', 
                Effect: 'default', 
                MasterSpeed: '0', 
                MasterVolume: '0', 
                MasterPitch: '0'
            };
            return JSON.stringify(data);
        }
    
        return fetch('https://developer.voicemaker.in/voice/api',{
            method : 'POST',
            headers :{
                "Content-Type": "application/json",
                "Authorization": "Bearer 7258a4a0-7f3c-11ec-a815-fb3a96097510"
            },
            body : getData()
         })
         .then((res)=>{
             return res.json();
         })
         .then((data)=>{
                
               dispatch(fetchPathSuccess(data.path))     
               dispatch(fetchPathRequest(false))     
                
         })
         .catch((err)=>{
             dispatch(fetchPathFailure(err.message))
         })
    }

    
}



export const fetchGtts = (msg)=>{
    console.log("in fetch gtts");
    console.log(msg);
    return dispatch=>{
        dispatch(fetchPathRequest(true))
        dispatch(fetchPathSuccess(""))
        const getData = ()=>{
            const data={
            text: msg
            };
            return JSON.stringify(data)
        }
        return fetch('http://127.0.0.1:5000/speak',{
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: getData()
        })
        .then((res)=>{
            if(!res.ok)
            {
                throw Error("Cannot connect to the resource")
            }
            return res.json();
        })
        .then((data)=>{

                console.log(data);
                dispatch(fetchPathSuccess(data.path))     
                dispatch(fetchPathRequest(false))     
        })
        .catch((err)=>{
                dispatch(fetchPathFailure(err.message))
        })
    }
}

