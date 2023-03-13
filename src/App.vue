<template>
  <div id="app">
    <router-view />
  </div>
</template>


 <script>
 
export default {
 name: 'App',
  components: {
}
}
 </script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow: hidden;
}
button{
  cursor: pointer;
}
#app{
  background: purple;
  height: 100vh;
}
</style>
