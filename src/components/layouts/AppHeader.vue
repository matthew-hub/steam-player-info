<template>
  <header class="app-header">
    <AppTitle />
    <AppInfo />
    <SearchBar />
  </header>
</template>

<script>
import AppTitle from '@/components/AppTitle.vue';
import AppInfo from '@/components/AppInfo.vue';
import SearchBar from '@/components/SearchBar.vue';

export default {
  name: 'AppHeader',
  components: {
    AppTitle,
    AppInfo,
    SearchBar
  }
};
</script>

<style lang="scss" scoped>
.app-header {
  position: relative;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 1fr auto auto;
  padding-top: 150px;
  justify-items: center;
}
</style>
