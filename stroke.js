try{
    Vencord.Api.MessageEvents.removePreSendListener(strokeSpeak)
}catch(err){
    console.warn(err)
}
var strokeSpeak = Vencord.Api.MessageEvents.addPreSendListener((_, data) => {
    let regex = /stroke:([\d-]+)/
    let chars = "`1234567890-=qwertyuiop[]\\asdfghjkl;'zxcvbnm,.~!@#$%^&*()_+QWERTYUIOPASDFGHJKL:\"ZXCVBNM<>?".split("")
    let randInt = (min,max)=>{return Math.floor(Math.random() * (max+1 - min) ) + min;}

    while(regex.test(data.content)){
        let c = parseFloat(regex.exec(data.content)[1])
        if(c<0)c=randInt(0,Math.abs(c))
	if(c>=2000)c=2000
        let stroke = ""
        for(let i = 0;stroke.length<c;i++){
            stroke+=chars[randInt(0,chars.length)]
            if(randInt(0,8)==1)stroke+=" "
            if(randInt(0,20)==1)stroke+="\n"
        }
        data.content = data.content.replace(regex,stroke.replaceAll("undefined",""))
    }
})
