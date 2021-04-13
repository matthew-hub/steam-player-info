<!-- eslint-disable no-param-reassign -->
<template>
  <div class="player-box">
    <h2>Basic details:</h2>
    <div class="player-info" v-if="playerData.isPlayerLoaded !== 'error'">
      <div class="info-box" v-for="(value, name, index) in getPlayerInfo" v-bind:key="index">
        <div class="name">{{ name }}:</div>
        <div class="value-box">
          <!-- <div class="tooltip" v-on:click="(e) => changeState(e)">copy to clipboard!</div> -->
          <div class="tooltip" v-on:click="(e) => copytToClipboard(e, value)">copy to clipboard!</div>
          <div class="value">{{ value }}</div>
        </div>
      </div>
    </div>
    <div v-else>
      {{ playerData.error }}
    </div>
    <div class="player-bans">
      <div class="bans-box" v-for="(value, name, index) in getPlayerBans" v-bind:key="index">
        <div class="name">{{ name }}: {{ value }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    playerData: {
      type: Object
    }
  },

  name: 'PlayerInfo',

  computed: {
    getPlayerInfo() {
      const playerInfo = {
        status: this.playerData.basic.communityvisibilitystate === 3 ? 'public' : 'private',
        steamID: this.playerData.basic.steamid,
        name: this.playerData.basic.personaname,
        avatar: this.playerData.basic.avatarfull,
        profile: this.playerData.basic.profileurl
      };
      console.log('[this.playerData.basic.communityvisibilitystate]:', this.playerData.basic.communityvisibilitystate);

      if (this.playerData.basic.communityvisibilitystate === 3) {
        playerInfo.created = this.timeCreated(this.playerData.basic.timecreated);
      } else {
        playerInfo.created = 'private data';
      }
      return playerInfo;
    },

    getPlayerBans() {
      const playerBans = {
        'VAC Bans': this.playerData.bans.NumberOfVACBans,
        'Games Bans': this.playerData.bans.NumberOfGameBans,
        'Community Ban': this.playerData.bans.CommunityBanned === false ? 'No' : 'Yes',
        'Trade Ban': this.playerData.bans.EconomyBan === 'none' ? 'No' : 'Yes'
      };
      return playerBans;
    }
  },

  methods: {
    copytToClipboard(e, value) {
      if (!navigator.clipboard) {
        const selection = window.getSelection(); // retrun slected text range
        // return new Range object
        const range = document.createRange();
        // NOTE: sets the range to contain the content of a node (element)
        range.selectNodeContents(e.target.nextSibling);
        selection.removeAllRanges(); // delete all text ranges
        selection.addRange(range); // add range to selection
        document.execCommand('copy'); // add copy text to clipboard
        selection.removeAllRanges();
        return;
      }

      // supported
      // write text to clipboard | async function
      // NOTE: for future use
      navigator.clipboard.writeText(value).then(
        () => {
          // copy to clipboard succesfull!
        },
        // eslint-disable-next-line no-unused-vars
        (err) => {
          // copy to clipboard error!
        }
      );
    },

    // return created time form unix time
    timeCreated(time) {
      const date = new Date(time * 1000);
      return date.toLocaleString(); // return date in location format
    }
  }
};
</script>

<style lang="scss" scoped>
.player-box {
  overflow: hidden;
  font-family: 'FredokaOne';
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 10px;
  padding-right: 10px;
}
.player-info {
  overflow: hidden;
  padding-top: 20px;
  font-size: 1.8rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(315px, 365px));
  grid-template-rows: 1fr;
  justify-content: space-between;
  .info-box {
    position: relative;
    padding: 10px 0px;
    text-align: left;
    white-space: nowrap;
    display: flex;
    align-items: center;
    flex-grow: 1;
    justify-content: space-between;

    .hover {
      display: block;
    }

    .name {
      max-width: 80px;
      width: 100%;
      padding-right: 5px;
      user-select: none;
    }

    .value-box {
      overflow: hidden;
      position: relative;
      max-width: 240px;
      width: 100%;
      color: #f9d132;
      margin-left: 10px;
      text-align: left;
      border-radius: 2px;
      padding-left: 10px;
      padding-right: 10px;
      border: 2px solid #f9d132;
      .tooltip {
        display: none;
        outline: transparent;
        user-select: none;
      }

      .value {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      &:hover {
        cursor: pointer;
        background: #f9d132;
        color: #000;
        .value {
          position: absolute;
          top: 0;
          left: 0;
          z-index: -999;
          // for copy purpose
          width: 1px;
          height: 1px;
        }
        .tooltip {
          display: block;
        }
      }
    }
  }
}
.player-bans {
  padding-top: 30px;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  font-size: 1.7rem;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-left: -10px;
  .bans-box {
    position: relative;
    overflow: hidden;
    padding-top: 10px;
    flex-shrink: 0;
    .name {
      flex-basis: content;
      overflow: hidden;
      letter-spacing: 0.1rem;
      margin-left: 10px;
    }
  }
}
</style>
