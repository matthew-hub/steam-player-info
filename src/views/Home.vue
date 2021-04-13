<template>
  <div class="home-content">
    <AppHeader @emitHandleInput="handleInputData" />
    <AppMain v-bind:playerData="player" />
    <AppFooter />
  </div>
</template>

<script>
// @ is an alias to /src
import AppHeader from '@/components/layouts/AppHeader.vue';
import AppMain from '@/components/layouts/AppMain.vue';
import steamAPI from '@/API/steam-api';
import AppFooter from '../components/layouts/AppFooter.vue';

export default {
  name: 'Home',
  components: {
    AppHeader,
    AppMain,
    AppFooter
  },

  data() {
    return {
      player: {
        basic: {},
        bans: {},
        isPlayerLoaded: false
      }
    };
  },

  methods: {
    handleInputData(value) {
      if (value.type === 'vanityID') {
        steamAPI.resolveVanityURL(value.vanityID).then(() => {
          this.getPlayerSummaries();
        });
      }
      if (value.type === 'error') {
        this.player.isPlayerLoaded = 'error';
        this.player.error = value.message;
      }
      if (value.type === 'steamID') {
        this.getPlayerSummaries();
      }
    },

    getPlayerSummaries() {
      steamAPI.getPlayerSummaries().then((player) => {
        console.log('[steamAPI]:', steamAPI);
        this.player.basic = { ...player };
        return steamAPI.getPlayerBans().then((bans) => {
          this.player.bans = { ...bans };
          this.player.isPlayerLoaded = true;
        });
      });
    }
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
