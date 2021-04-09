<template>
  <main class="app-main">
    <SearchInfo />
  </main>
</template>

<script>
import SearchInfo from '@/components/SearchInfo.vue';

export default {
  name: 'AppMain',
  components: {
    SearchInfo
  }
};
</script>

<style lang="scss" scoped>
.app-main {
  min-height: 360px;
  padding-top: 60px;
}
</style>
