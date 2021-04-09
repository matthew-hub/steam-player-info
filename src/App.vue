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
@font-face {
  font-family: FredokaOne;
  src: url('./assets/fonts/FredokaOne-Regular.ttf');
}

@font-face {
  font-family: SourceSansPro-Bold;
  src: url('./assets/fonts/SourceSansPro-Bold.ttf');
}

@font-face {
  font-family: SourceSansPro-Semi;
  src: url('./assets/fonts/SourceSansPro-SemiBold.ttf');
}

html,
body {
  width: 100%;
  height: 100%;
}

#app {
  position: relative;
  display: block;
  text-align: center;
  font-size: 1.4rem;
  color: #ffffff;
  background-color: #000000;
  height: 100%;
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
  min-width: 375px;
  width: 100%;
  height: 100%;
}
</style>
