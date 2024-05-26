try{
    Vencord.Api.MessageEvents.removePreSendListener(owoSpeak)
}catch(err){
    console.warn(err)
}
var owoSpeak = Vencord.Api.MessageEvents.addPreSendListener((_, data) => {
    let randInt = (min,max)=>{return Math.floor(Math.random() * (max+1 - min) ) + min;}
    data.content = data.content.toLowerCase()

    data.content = data.content.replace(/(?<=i love )([^\s]+)/g,"kissing boys")

    
    
    var replaceList = {
        "wtf":"what the floof",
        
        "fuck":"floof",
        "god":"joe",
        "perfect":"purrfect",
        "lmao":"hehe~",
                love: "wuv",
        night: "nyanight",
        day: "nyaday",
        "good morning": "nyamorning",
        "good night": "nyanight",
        "goodbye": "bai-bai",
        "thank you": "thanks a bunch",
        "excuse me": "pwease",
        "please": "pwease",
        "sorry": "sowwy",
        "okay": "owkay",
        "ok": "owkay",
        "yes": "yesh",
        "no": "nuu",
        "awesome": "awesomu",
        "fantastic": "fantastico",
        "beautiful": "beautifur",
        "ugly": "uggwy",
        "stupid": "stoopid",
        "smart": "smort",
        "cool": "kewl",
        drug: "funny substance",
        straight: "gay",
        with:"wif",
                "hello": "hewo",
        hi: "hai",
        bite: "nom",
        bye: "bai",
        adios: "bai",
        the: "teh",
        this: "dis",
        what: "wat",
        with: "wif",
        your: "ur",
        you: "chu",
        that: "dat",
        "  ": " uwu ",
        thanks: "thx",
        yeah: "yah",
        "uwu? owo!":"owo?!",
        "owo! uwu?":"owo!?",
        "are":"is",
        "r": "w",
        "l": "w",
        "?": " uwu?",
        "!": " owo!",


    }
    var funnyLilFaces = [":3","owo","uwu","jadkvjsÆ█µ",">_<","x_x"]
    Object.keys(replaceList).forEach(e=>{
        data.content = data.content.replaceAll(e,replaceList[e])
    })
    var addFace = true
    funnyLilFaces.forEach(e=>{
        if(randInt(0,10)==1)return
        if(data.content.includes(e))addFace = false
    })

    // for(let i =0;i<randInt(1,Math.floor(data.content.length/10));i++){
    //     let temp = data.content.split("")
    //     temp.splice(randInt(0,temp.length-1),0,"w")
    //     data.content = temp.join("")
    // }
    
    if(addFace==true)data.content += " "+funnyLilFaces[randInt(0,funnyLilFaces.length-1)]
    data.content = data.content.replaceAll(" jadkvjsÆ█µ","~")


})
