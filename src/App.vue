<template>
  <header class="header">
  <div></div>
  <h1>Rick And Morty Database</h1>
  <ul class="header-links">
    <RouterLink to="/">Characters</RouterLink>
    <RouterLink to="/episodes">Episodes</RouterLink>
  </ul>
  </header>
  <RouterView/>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style scoped>

.header {
  background-color: #333;
  color: #fff;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-links {
  display: flex;
  gap: 20px;
}
</style>