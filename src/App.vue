<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{margin:0;padding:0;-webkit-tap-highlight-color:rgba(0,0,0,0);
-webkit-text-size-adjust:none;-webkit-user-select:none;-ms-user-select:none;user-select:none;font-family:Arial, "微软雅黑";}
img{border:none;max-width:100%;vertical-align:middle;}
h1,h2,h3,h4,h5,h6{font-size:100%;}
input,textarea{-webkit-user-select:text;-ms-user-select:text;user-select:text;-webkit-appearance:none;font-size:1em;line-height:1.5em;}
table{border-collapse:collapse;}
input,select,textarea{outline:none;border:none;background:none;}
a{outline:0;cursor:pointer;}
a:link,a:active{text-decoration:none;}
a:visited{text-decoration:none;}
a{text-decoration:none;-webkit-touch-callout:none;}
em,i{font-style:normal;}
li,ol{list-style:none;}
html{font-size:16px;}
.clear{clear:both;height:0;font-size:0;line-height:0;visibility:hidden; overflow:hidden;}
.fl{float:left;}
.fr{float:right;}
body{ margin:0 auto;max-width:640px; min-width:320px;background-color: #f1f1f1;color:#555;height:100%;}
a{color: #000;text-decoration: none}
.clearfix{overflow: hidden;clear: both;}
</style>
