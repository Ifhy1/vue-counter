<template>
  <div class="not-found">
    <h1>
      404 <br />
      Not Found!!!
    </h1>
    <br />
    <p>The page you are looking for does not exist.</p>
    <br />
    <p>Go to the <router-link to="/counter">COUNTER</router-link> page.</p>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>
<style scoped>
.not-found {
  background: yellow;
  height: 80vh;
  width: 70vw;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  margin: 5% auto;
}
</style>
