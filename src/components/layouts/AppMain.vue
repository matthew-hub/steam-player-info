<template>
  <main class="app-main">
    <SearchInfo v-show="!playerData.isPlayerLoaded" />
    <PlayerInfo v-if="playerData.isPlayerLoaded" v-bind:playerData="playerData" />
  </main>
</template>

<script>
import SearchInfo from '@/components/SearchInfo.vue';
import PlayerInfo from '@/components/PlayerInfo.vue';

export default {
  props: {
    playerData: {
      type: Object
    }
  },
  name: 'AppMain',
  components: {
    SearchInfo,
    PlayerInfo
  }
};
</script>

<style lang="scss" scoped>
.app-main {
  min-height: 360px;
  padding-top: 30px;
}
</style>
