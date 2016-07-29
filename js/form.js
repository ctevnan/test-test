$(document).ready(function() {
$("#submit").click(function() {
var method = $("method").val();
var userID = $("#userID").val();
var currentDB = $("currentDB").val();
var mode = $("mode").val();
var halberdApiUrl = "http://matchapi.halberdtechnologies.com/api/Database?userID=TestFolder&database=VPNVerify888&mode=match";
if (method == '' || userID == '' || currentDB == '' || mode == '' || halberdApiUrl == '') {
  alert("Insertion failed. Some fields are empty.");
} else {
//returns successful data submission message when the entered info is stored in db
$.post("form.php", {
method1: method,
userID1: userID,
currentDB1: currentDB,
mode1: mode,
halberdApiUrl1: halberdApiUrl
}, function (data) {
alert(data);
$('#form')[0].reset(); //reset form fields
});
}
});
});  