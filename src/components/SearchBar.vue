<template>
  <div class="search-bar">
    <div class="input-bar">
      <div class="input-bar__icon">
        <SearchIcon />
      </div>
      <slot name="input" />
    </div>
    <slot name="player-status" />
  </div>
</template>

<script>
import SearchIcon from '@/components/UI/SearchIcon.vue';

export default {
  name: 'SearchBar',
  components: {
    SearchIcon
  }
};
</script>

<style lang="scss" scoped>
.search-bar {
  position: relative;
  // overflow: hidden;
  padding-top: 20px;
  width: 100%;
  max-width: 600px;
  padding-left: 10px;
  padding-right: 10px;
  .input-bar {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 47px;
    border-radius: 2px;
    background: transparent;
    border: 3px solid #f9d132;
    box-shadow: 0px 0px 6px #ffd500;
    &__icon {
      padding-left: 12px;
      height: 21px;
    }
    &__search {
      padding-left: 15px;
      padding-right: 50px;
      background: transparent;
      outline: none;
      width: 100%;
      height: 100%;
      overflow: hidden;
      border: none;
      font-family: 'SourceSansPro-Bold';
      font-size: 1.6rem;
      color: #ffffff;
    }
    ::-webkit-input-placeholder {
      /* Chrome/Opera/Safari */
      color: #d8d8d8;
    }
    ::-moz-placeholder {
      /* Firefox 19+ */
      color: #d8d8d8;
    }
    :-ms-input-placeholder {
      /* IE 10+ */
      color: #d8d8d8;
    }
    :-moz-placeholder {
      /* Firefox 18- */
      color: #d8d8d8;
    }
  }

  .player-status {
    position: absolute;
    max-width: 600px;
    font-family: 'SourceSansPro-Bold';
    font-size: 1.6rem;
    padding: 10px;
    padding-top: 20px;
    left: 0;
    width: 100%;
    color: rgb(245, 41, 82);
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.5rem;
  }
  .loading {
    color: #f9d132;
  }
}
</style>
