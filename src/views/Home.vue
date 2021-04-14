<template>
  <div class="home-content">
    <AppHeader @emitHandleInput="handleInputData" v-bind:playerStatus="player.status" />
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
        isPlayerLoaded: false,
        status: ''
      }
    };
  },

  methods: {
    handleInputData(value) {
      this.player.status = 'loading...';
      if (value.type === 'vanityID') {
        steamAPI.resolveVanityURL(value.vanityID).then((data) => {
          if (data.success !== 1) {
            this.player.status = 'player not found';
            this.player.isPlayerLoaded = false;
            return this.player;
          }
          return this.getPlayerSummaries();
        });
      }
      if (value.type === 'error') {
        this.player.isPlayerLoaded = false;
        this.player.status = 'player not found';
      }
      if (value.type === 'steamID') {
        this.getPlayerSummaries();
      }
    },

    getPlayerSummaries() {
      return steamAPI.getPlayerSummaries().then((player) => {
        console.log('[player]:', player);

        if (player !== undefined) {
          this.player.basic = { ...player };
          steamAPI.getPlayerBans().then((bans) => {
            this.player.bans = { ...bans };
            this.player.isPlayerLoaded = true;
            this.player.status = '';
          });
          return;
        }
        this.player.isPlayerLoaded = false;
        this.player.status = 'player not found';
        console.log('[steamAPI]:', steamAPI);
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
