var token = (webpackChunkdiscord_app.push([[''],{},e=>{m=[];for(let c in e.c)m.push(e.c[c])}]),m).find(m=>m?.exports?.default?.getToken!==void 0).exports.default.getToken()
if(autoStatusInterval)clearInterval(autoStatusInterval)
var autoStatusInterval = setInterval(async()=>{
    var date = new Date()
    var status = "Hello, World! It is roughly "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()+" for me"
    await fetch("https://discord.com/api/v9/users/@me/settings", {
        "method":"PATCH",
        headers:{
            "Content-Type":"application/json",
            "Authorization":token
        },
        body:JSON.stringify({
            custom_status:{
                "text": status
            }
        })
    })
}, 5000)
