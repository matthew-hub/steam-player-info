<template>
  <div class="search-bar">
    <div class="input-bar">
      <div class="input-bar__icon">
        <SearchIcon />
      </div>
      <input
        v-model="steamInput"
        type="text"
        class="input-bar__search"
        spellcheck="false"
        placeholder="Your profile url, vanityid or steamid..."
      />
    </div>
  </div>
</template>

<script>
import SearchIcon from '@/components/UI/SearchIcon.vue';

export default {
  name: 'SearchBar',
  data() {
    return {
      steamInput: ''
    };
  },
  components: {
    SearchIcon
  }
};
</script>

<style lang="scss" scoped>
.search-bar {
  position: relative;
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
    // border-radius: 5px;
    background: transparent;
    border: 3px solid #f9d132;
    box-shadow: 0px 0px 6px #ffd500;
    &__icon {
      padding-left: 12px;
      height: 21px
    }
    &__search {
      padding-left: 15px;
      padding-right: 50px;
      background-color: none;
      color: #ffffff;
      background: transparent;
      outline: none;
      width: 100%;
      height: 100%;
      overflow: hidden;
      border: none;
      font-family: 'SourceSansPro-Bold';
      font-size: 1.6rem;
      color: #d8d8d8;
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
}
</style>
