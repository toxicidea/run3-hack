let rawSave={};Object.defineProperty(Object.prototype,'softEarned',{configurable:!0,get(){return this},set(value){rawSave=this;Object.defineProperty(this,'softEarned',{configurable:!0,enumerable:!0,writable:!0,value:value,})},});function loadSave(e=localStorage['/0-run-3/play:Run3']){localStorage['/0-run-3/play:Run3']=e;location.reload()}
let multi=!0
function changeSave(save=localStorage['/0-run-3/play:Run3'],rsave=rawSave){return{change:function(rawName,changeto){let split=save.split(":")
for(let i=0;i<split.length;i++){if(split[i].includes(rawName)){split[i]=split[i].replaceAll(rsave[rawName],changeto)}}
if(multi===!0){localStorage['/0-run-3/play:Run3']=split.join(":")}
return split.join(":")},multi:function(e=!1){multi=e}}}
