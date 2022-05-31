export const fetchGtts = (msg)=>{
    
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
       console.log(data.path);
       return data.path;
   })
   .catch((err)=>{
       console.log(err.message)
   })
}




export const fetchVoice =(msg)=>{

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
            "Authorization": "Bearer 455144f0-7373-11ec-93e9-e97a50a66297"
        },
        body : getData()
     })
     .then((res)=>{
         return res.json();
     })
     .then((data)=>{
            console.log(data.path);
            return data.path
            
     })
     .catch((err)=>{
         console.log(err.message);
     })
}



