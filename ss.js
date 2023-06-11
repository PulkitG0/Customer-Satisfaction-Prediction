console.log("Hello World");
function updatetime(){
    time=new Date();
    //console.log(time);
    document.getElementById('time').innerHTML=time;
}
setInterval(updatetime,1000);
