(()=>{
    const time = new Date();

    const hour = time.getHours() < 10 ? "0"+time.getHours():time.getHours();
    const minute = time.getMinutes() < 10 ? "0"+time.getMinutes():time.getMinutes();
    const second = time.getSeconds() < 10 ? "0"+time.getSeconds():time.getSeconds();
    const ampm = hour < 12? "am":"pm";
    
    $(".clock_digital").text(hour+":"+minute+":"+second+" "+ampm);
})();


const interval = setInterval(()=>{
    const time = new Date();

    const hour = time.getHours() < 10 ? "0"+time.getHours():time.getHours();
    const minute = time.getMinutes() < 10 ? "0"+time.getMinutes():time.getMinutes();
    const second = time.getSeconds() < 10 ? "0"+time.getSeconds():time.getSeconds();
    const ampm = hour < 12? "am":"pm";
    
    $(".clock_digital").text(hour+":"+minute+":"+second+" "+ampm);
}, 1000);