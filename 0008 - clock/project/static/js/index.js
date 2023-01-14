const interval = setInterval(()=>{
    let time = new Date();

    let hour = time.getHours() < 10 ? "0"+time.getHours():time.getHours();
    let minute = time.getMinutes() < 10 ? "0"+time.getMinutes():time.getMinutes();
    let second = time.getSeconds() < 10 ? "0"+time.getSeconds():time.getSeconds();
    let ampm = hour < 12? "am":"pm";
    
    $("#clock").text(hour+":"+minute+":"+second+" "+ampm);
}, 1000);