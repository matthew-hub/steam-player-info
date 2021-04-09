<template>
  <footer class="app-footer">
    <Rights />
  </footer>
</template>

<script>
import Rights from '@/components/Rights.vue';

export default {
  name: 'AppFooter',
  components: {
    Rights
  }
};
</script>

<style lang="scss" scoped>
.app-footer {
  align-self: end;
  padding-top: 50px;
  display: block;
}
</style>
