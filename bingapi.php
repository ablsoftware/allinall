<?php
$json_string = file_get_contents('https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=2&mkt=zh-CN');
$data = json_decode($json_string, true);
$url = 'https://cn.bing.com'.$data['images'][0]['url'];
header("Location:{$url}"); 
?>
<script>
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?4d78b7db01edd15d04b1b13bbe323be9";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
</script>
