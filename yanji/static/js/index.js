function notice(txt){$(".notice").css("transform","scale(1)");$(".noticetxt").html(txt);$('.mask').fadeIn(500)}
function upload(){if(document.getElementById("fileinput").files[0].size>10240000){notice("图片必须在10M以内，请重新选择~")}else{$("#loading").attr("style","")
$(".mask").fadeIn(200)
var xhr=new XMLHttpRequest();xhr.open('post','//imgcdn.simsoft.top/upimg.php');xhr.withCredentials=true;xhr.onload=function(){$("#loading").attr("style","transform:scale(0)")
if(JSON.parse(xhr.responseText).success==true){$('.upsuccess').css('transform','scale(1)');$('.mask').fadeIn(500)
$('#prvimg').attr("src",JSON.parse(xhr.responseText).url)
$('#imgurl').html(JSON.parse(xhr.responseText).url)}
else{notice(JSON.parse(xhr.responseText).msg)}}
var data=new FormData(document.querySelector('#upform'));xhr.send(data);}}