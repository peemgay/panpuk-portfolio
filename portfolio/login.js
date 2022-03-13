const queryString = window.location.search;

console.log(queryString);

const urlParams = new URLSearchParams(queryString);
const UsernameCon = urlParams.get('username');
const passwordCon = urlParams.get('password');

window.onload = loginLoad;

function loginLoad(){
	var form = document.getElementById("myLogin");
 	form.onsubmit = checkLogin;
}

function checkLogin(){
	var username = document.forms["myLogin"]["username"];
    var password = document.forms["myLogin"]["password"];
	if(username.value != UsernameCon || password.value != passwordCon)
	{
		alert("ล็อคอินไม่สำเร็จ, กรุณากรอกใหม่อีกครั้ง");
		return false;
	}
	else
	{
		alert("ล็อคอินสำเร็จ");
	}
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
}			