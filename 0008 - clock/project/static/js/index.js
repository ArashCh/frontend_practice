(()=>{
    const time = new Date();

    const hour = time.getHours() < 10 ? "0"+time.getHours():time.getHours();
    const minute = time.getMinutes() < 10 ? "0"+time.getMinutes():time.getMinutes();
    const second = time.getSeconds() < 10 ? "0"+time.getSeconds():time.getSeconds();
    const ampm = hour < 12? "am":"pm";
    
    // for digital clock
    $(".clock_digital").text(hour+":"+minute+":"+second+" "+ampm);
    // for analog clock
    $("#analogHour").css("transform", "rotate("+(parseInt(hour)-12)*30+"deg)");
    $("#analogMin").css("transform", "rotate("+parseInt(minute)*6+"deg)");
    $("#analogSec").css("transform", "rotate("+parseInt(second)*6+"deg)");
})();


const interval = setInterval(()=>{
    const time = new Date();

    const hour = time.getHours() < 10 ? "0"+time.getHours():time.getHours();
    const minute = time.getMinutes() < 10 ? "0"+time.getMinutes():time.getMinutes();
    const second = time.getSeconds() < 10 ? "0"+time.getSeconds():time.getSeconds();
    const ampm = hour < 12? "am":"pm";
    
    // for digital clock
    $(".clock_digital").text(hour+":"+minute+":"+second+" "+ampm);
    // for analog clock
    $("#analogHour").css("transform", "rotate("+(parseInt(hour)-12)*30+"deg)");
    $("#analogMin").css("transform", "rotate("+parseInt(minute)*6+"deg)");
    $("#analogSec").css("transform", "rotate("+parseInt(second)*6+"deg)");
}, 1000);