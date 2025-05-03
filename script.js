let btn=document.querySelector("#btn");
let content=document.querySelector("#content");
let voice=document.querySelector("#voice");

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text);
    text_speak.rate=1;
    text_speak.pitch=1;
    text_speak.volume=1;
    text_speak.lang="hi-IN";
    window.speechSynthesis.speak(text_speak);//Jo bhi likha hoga usse bolega 
}

function wishMe(){
    let day=new Date();
    let hours=day.getHours();
    console.log(hours);
    if(hours>=2 && hours<12){
        //speak("Hi user very Good Morning");
    }
    else if(hours>=12 && hours<16){
        speak("Hi user Good Afternoon");
    }
    else{
       // speak("Hi user Good Evening");
    }
}
window.addEventListener('load',()=>{
    wishMe();
})
let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new SpeechRecognition();
recognition.onresult=(event)=>{
    let currntIndex=event.resultIndex
    let transcript=event.results[currntIndex][0].transcript //humne fetch kiya h jo hm bol rhe the wo kaha store ho rha tha console.log(event) krke chek kiya
    content.innerText=transcript;
    takeCommand(transcript.toLowerCase());
}

btn.addEventListener("click",()=>{
    recognition.start();
    btn.style.display="none";
    voice.style.display="block";
})

function takeCommand(message){ 
    btn.style.display="flex"
    voice.style.display="none"
    if(message.includes("hello")){
        speak("Hi, how can i assist you today?")
    }
    else if(message.includes("who are you")){
        speak("I am Virtual assistant designed and developed by vansh")
    }
    else if(message.includes("aastha chandel")){
        speak("She's the girlfriend of vansh jakhar and she loves him so much")
    }
    else if(message.includes("open youtube")){
        speak("Opening youtube")
        setTimeout(()=>{
            window.open("https://www.youtube.com")
        },2000);
    }
    else if(message.includes("open google")){
        speak("Opening google")
        setTimeout(()=>{
            window.open("https://www.google.com")
        },2000);
    }
    else if(message.includes("open instagram")){
        speak("Opening instagram")
        setTimeout(()=>{
            window.open("https://www.instagram.com")
        },2000);
    }
    else if(message.includes("open calculator")){
        speak("Opening calculator")
        setTimeout(()=>{
            window.open("calculator://")
        },2000);
    }
    else if(message.includes("time")){
        let time=new Date().toLocaleString(undefined, {hour:"numeric", minute: "numeric"})
        speak(time);
    }
    else{
        speak(`this is what i found regarding ${message}`)
        window.open(`https://www.google.com/search?q=${message}`)
    }

}
