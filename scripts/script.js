let btn_send = document.querySelectorAll(".btn-send")[0];
let name_field = document.querySelectorAll(".name-field")[0];
btn_send.addEventListener("click",(e)=>{
    e.preventDefault();
    console.log(name_field.value);
});