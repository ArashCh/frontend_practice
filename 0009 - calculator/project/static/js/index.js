$(".btn--num").click((event)=>{
    let inputText = $("#input").val();
    $("#input").val(inputText + $(event.target).text());
});