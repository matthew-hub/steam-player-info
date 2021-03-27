<template>
  <div id="app">
    <div class="app-wrapper">
      <router-view />
    </div>
  </div>
</template>

<script>
import '@/assets/css/reset.css';

export default {
  name: 'App'
};
</script>

<style lang="scss">

html {
  width: 100%;
  height: 100%;
}

body {
  width: 100%;
  height: 100%;
}

#app {
  position: relative;
  display: block;
  text-align: center;
  font-size: 1.4rem;
  color: #2c3e50;
  background: linear-gradient(45deg, #010101 0%, #101010 40%, #101a1d 100%);
  height: 100%;
  width: 100%;
  min-width: 375px;
}

a:link,
a:active,
a:visited {
  margin: 0;
  padding: 0;
  display: block;
  color: #ffffff;
  text-decoration: none;
  overflow: hidden;
  outline: none;
  -webkit-tap-highlight-color: transparent;
}

.app-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: minmax(375px, 1240px);
  grid-template-rows: 1fr;
  justify-content: center;
  padding: 20px;
}
</style>
