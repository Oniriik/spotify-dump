<template>
  <div class="wrapper">
    <div v-if="this.user == null">
      <NotConnected />
    </div>
    <div v-if="this.user != null" class="profile-page">
      <div class="profile-user">
        <DisplayProfile v-if="this.user != null" :user="this.user" />
        <div class="btn-container">
          <div class="playlist-container profile-item">
            <p class="btn-text">Create a playlist with your dump</p>
            <button
              v-if="!isplaylistIsCreated"
              class="dl-btn"
              @click.="this.createplaylist()"
            >
              Create
            </button>
            <button v-else class="dl-btn playlist">
              <a :href="playlistUrl" target="_blank">Open</a>
            </button>
          </div>
          <div class="download-container center profile-item">
            <!-- <p class="btn-text" >Your dump image</p>
            <button class="dl-btn" @click.prevent="this.downloadImg()" >Download</button>
            <p class="ios">
              /!\<br>If the download doesnt work, screenshot the page.<br>We are working on this :/
            </p>
            <p class="ios ios2">
              <br>If the content isnt displayed properly please contact us.
            </p> -->
            <p class="ios">
              /!\<br />
              We have some issues with the download :/ <br />
              Please screenshot instead, we will fix it asap !
            </p>
          </div>
        </div>
        <p class="logout" @click="logout">Logout</p>
      </div>
      <div>
        <DisplayDump :tracks="this.user.top_tracks?.items" />
      </div>
      <!-- <DisplayTopTracks :tracks="this.user.top_tracks?.items"/> -->
    </div>
  </div>
</template>

<script>
import DisplayProfile from "@/components/DisplayProfile.vue";
import DisplayDump from "@/components/DisplayDump.vue";
// import DisplayTopTracks from '@/components/DisplayTopTracks.vue'
import NotConnected from "@/components/NotConected.vue";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";
const axios = require("axios").default;
const queryString = require("query-string");

export default {
  components: {
    DisplayProfile,
    NotConnected,
    DisplayDump,
  },
  data() {
    return {
      user: this.$store.state.user.data.images
        ? this.$store.state.user.data
        : null,
      isplaylistIsCreated: false,
      playlistUrl: "",
      isIOS: /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream,
    };
  },
  methods: {
    logout() {
      this.$store.dispatch("clearState");
      this.$router.push({ name: "home" });
    },
    downloadImg() {
      var clone = document.querySelector(".dump2");
      window.scrollTo(0, 0);
      html2canvas(clone, {
        scrollX: -window.scrollX,
        scrollY: -window.scrollY,
      }).then((canvas) => {
        var dataURL = canvas.toDataURL("image/png", 1.0);
        saveAs(this.convertBase64ToFile(dataURL, "dump.jpg"));
      });
    },
    convertBase64ToFile(base64String, fileName) {
      let arr = base64String.split(",");
      let mime = arr[0].match(/:(.*?);/)[1];
      let bstr = atob(arr[1]);
      let n = bstr.length;
      let uint8Array = new Uint8Array(n);
      while (n--) {
        uint8Array[n] = bstr.charCodeAt(n);
      }
      let file = new File([uint8Array], fileName, { type: mime });
      return file;
    },
    createplaylist() {
      var today = new Date();
      var date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
      axios
        .post(
          `https://api.spotify.com/v1/users/${this.$store.state.user.data.id}/playlists`,
          JSON.stringify({
            name: `My ${date} Dump`,
            description:
              "My monthly spotify dump profided by https://spotify-dump.xyz/",
            public: true,
          }),
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization:
                "Bearer " + this.$store.state.user.token.access_token,
            },
          }
        )
        .then((res) => {
          this.playlistUrl = res.data.external_urls.spotify;
          var tracks = [];
          this.$store.state.user.data.top_tracks.items.forEach((track) => {
            tracks.push(track.uri);
          });
          axios
            .post(
              `https://api.spotify.com/v1/playlists/${
                res.data.id
              }/tracks?uris=${encodeURI(tracks.join(","))}`,
              {},
              {
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                  Authorization:
                    "Bearer " + this.$store.state.user.token.access_token,
                },
              }
            )
            .then((res) => {
              this.isplaylistIsCreated = true;
            });
        });
    },
  },
  beforeMount() {
    this.$store.dispatch("updateCurrentPage", 1);
  },
};
</script>

<style scoped>
.ios {
  color: red;
  text-align: center;
  font-size: 0.6em;
}
.profile-item {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
.btn-text {
  color: white;
  text-align: center;
}
.btn-container {
  display: flex;
  flex-direction: column;
  gap: 1em;
}
.dl-btn {
  cursor: pointer;
  width: 100px;
  padding: 5px;
  border-radius: 10px;
  font-weight: 300;
  background-color: #1db954;
  border: none;
}
.dl-btn:active {
  color: white;
  background-color: #24f56d;
}
.playlist {
  cursor: pointer;
  color: white;
  background-color: #7241aa;
}
.profile-page {
  margin-top: 5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 1rem;
}
.download {
  color: white;
  text-transform: uppercase;
  text-decoration: underline;
  text-align: center;
}
.logout {
  cursor: pointer;
  margin-top: 30vh;
  color: white;
  font-size: 0.7rem;
  bottom: 0;
  width: 100%;
  text-transform: uppercase;
  text-align: center;
}
.logout-mobile {
  display: none;
  color: white;
  font-size: 0.7rem;
  bottom: 0;
  width: 100%;
  text-transform: uppercase;
  text-align: center;
  margin: 2em 0;
}
@media (max-width: 1000px) {
  .logout {
    display: none;
  }
  .logout-mobile {
    display: inherit;
  }
  .profile-page {
    margin-top: 2em;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
}
</style>