<template>
  <div class="search-info">
    <h3>What can I enter in the field above ?</h3>
    <div class="search-info__items">
      <div>https://steamcommunity.com/id/mattname</div>
      <div>76561197960287930</div>
      <div>mattname</div>
      <div>https://steamcommunity.com/profiles/76561197960287930</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchInfo'
};
</script>

<style lang="scss" scoped>
.search-info {
  padding-top: 30px;
  h3 {
    font-family: 'FredokaOne';
    font-size: 1.8rem;

    text-align: left;
    padding-left: 10px;
    color: #ffffff;
  }
  .search-info__items {
    padding-top: 5px;
    padding-right: 10px;
    overflow: hidden;
    position: relative;
    font-family: 'FredokaOne';
    font-size: 1.8rem;
    line-height: 3rem;
    text-align: left;
    color: #ffffff;
    display: flex;
    flex-wrap: wrap;

    div {
      cursor: pointer;
      margin-left: 10px;
      margin-top: 10px;
      flex-shrink: 1;
      flex-grow: 0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      border-radius: 2px;
      border: 2px solid #f9d132;
      font-size: 1.5rem;
      padding-left: 10px;
      padding-right: 10px;
    }
  }
}
</style>
