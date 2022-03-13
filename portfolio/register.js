window.onload = pageLoad;
var Input_regis = [];

function pageLoad() {
	var form = document.getElementById("myForm");
 	form.onsubmit = validateForm;
}

function validateForm() {
    var pass = document.forms["myForm"]["password"];
    var repass = document.forms["myForm"]["retypepassword"];
    if (pass.value == repass.value)
    {
        alert("สมัครสำเร็จ");
    }
    else if (pass.value != repass.value)
    {
        alert("สมัครไม่ถูกต้อง, โปรดลองอีกครั้ง");
        return false;
    }
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
}