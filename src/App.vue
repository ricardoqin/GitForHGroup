<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
document.documentElement.style.fontSize=window.innerWidth/750*100+'px'
</script>

<style>
body,p,h1,h2,h3,h4,h5,h6,ul,li,dl,dt,dd,input,form{
  margin:0;
  padding:0;

}
body,html{
  width:100%;
  height:100%;
}
html{
  font-size:50px;
}
li{
  list-style: none;
}
a{
  text-decoration: none;
}
img{
  border:none;
  display:block;
}
input{
  border:none;
}


</style>
