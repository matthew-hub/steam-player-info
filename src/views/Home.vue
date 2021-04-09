<template>
  <div class="home-content">
    <AppHeader />
    <AppMain />
    <AppFooter />
  </div>
</template>

<script>
// @ is an alias to /src
import AppHeader from '@/components/layouts/AppHeader.vue';
import AppMain from '@/components/layouts/AppMain.vue';
import AppFooter from '../components/layouts/AppFooter.vue';

export default {
  name: 'Home',
  components: {
    AppHeader,
    AppMain,
    AppFooter
  }
};
</script>

<style lang="scss" scoped>
.home-content {
  padding: 20px;
  min-height: 100%;
  display: grid;
  grid-gap: 10px;
  background: linear-gradient(45deg, #010101 0%, #101010 40%, #101a1d 100%);
  background-repeat: no-repeat;
  grid-template-columns: minmax(335px, 800px);
  grid-template-areas: 'nav' 'main' 'footer';
  grid-template-rows: auto 1fr auto;
  justify-content: center;
}
</style>
