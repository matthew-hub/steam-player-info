<template>
  <header class="app-header">
    <AppTitle />
    <AppInfo />
    <SearchBar>
      <input
        v-model.trim="steamInput"
        type="text"
        class="input-bar__search"
        spellcheck="false"
        placeholder="Your profile url, vanityid or steamid"
        @keyup.enter="handleInput"
      />
    </SearchBar>
  </header>
</template>

<script>
import AppTitle from '@/components/AppTitle.vue';
import AppInfo from '@/components/AppInfo.vue';
import SearchBar from '@/components/SearchBar.vue';
import steamAPI from '@/API/steam-api';

export default {
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
      // e.targe.blur = 'none';
      const inputData = steamAPI.parseInputData(this.steamInput);
      console.log('[inputData]:', inputData);

      this.$emit('emitHandleInput', inputData);
      // this.steamInput = '';
    },
    sendInput() {
      console.log('[aaa]:', this.steamInput);

      this.$emit('created', this.steamInput);
    }
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
  // padding-top: 160px;
  justify-items: center;
}
</style>
