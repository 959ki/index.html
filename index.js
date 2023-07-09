
function showPassword() {
    var passwordField = document.getElementById("password");
    if (passwordField.type === "password") {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
}
var btnSubmit = document.getElementById("btnSubmit");

// تعريف وظيفة الاستجابة عند الضغط على الزر
function handleSubmit() {
  // قم بوضع الأوامر التي ترغب في تنفيذها عند الضغط على الزر هنا
  console.log("تم الضغط على الزر إرسال");
}
btnSubmit.addEventListener("click", handleSubmit);