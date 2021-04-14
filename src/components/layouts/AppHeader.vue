<template>
  <header class="app-header">
    <AppTitle />
    <AppInfo />
    <SearchBar>
      <template v-slot:input>
        <input
          ref="steamInput"
          v-model.trim="steamInput"
          type="text"
          class="input-bar__search"
          spellcheck="false"
          placeholder="Your profile url, vanityid or steamid"
          @keyup.enter="handleInput"
        />
      </template>
      <template v-slot:player-status>
        <div class="player-status" v-bind:class="{ loading: playerStatus === 'loading...' }">{{ playerStatus }}</div>
      </template>
    </SearchBar>
  </header>
</template>

<script>
import AppTitle from '@/components/AppTitle.vue';
import AppInfo from '@/components/AppInfo.vue';
import SearchBar from '@/components/SearchBar.vue';
import steamAPI from '@/API/steam-api';

export default {
  props: {
    playerStatus: {
      type: String
    }
  },
  name: 'AppHeader',
  data() {
    return {
      steamInput: ''
    };
  },
  components: {
    AppTitle,
    AppInfo,
    SearchBar
  },

  methods: {
    handleInput(e) {
      e.preventDefault();
      e.target.blur();
      const inputData = steamAPI.parseInputData(this.steamInput);
      this.$emit('emitHandleInput', inputData);
    }
  },
  mounted() {
    this.$refs.steamInput.focus();
  }
};
</script>

<style lang="scss" scoped>
.app-header {
  position: relative;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 1fr auto auto;
  padding-top: 20%;
  justify-items: center;
}
</style>
