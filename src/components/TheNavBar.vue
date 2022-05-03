<template>
  <header>
    <nav>
      <div class="container">
        <div class="nav-content">
          <router-link :to="{ name: 'home' }" class="navbar-logoNav" @click.prevent="toggleMobileMenu()">
            <img
              class="logo"
              src="@/assets/img/whiteLogo.png"
              alt="whiteLogo"
              
            />
            <p>Dump for Spotify</p>
          </router-link>
          <div class="navbar-nav-desktop">
          <ul>
            <li>
              <router-link
                :to="{ name: 'home' }"
                @click.prevent="$emit('transitionDirection', this.currentPage,0)"
                >Home</router-link
              >
            </li>
            <li class="yourdump">
              <router-link
                :to="{ name: 'yourdump' }"
                @click.prevent="$emit('transitionDirection', this.currentPage,1)"
                >Your dump</router-link
              >
            </li>
            <li>
              <router-link
                :to="{ name: 'faq' }"
                @click.prevent="$emit('transitionDirection', this.currentPage,2)"
                >FAQ</router-link
              >
            </li>
            <li>
              <router-link
                :to="{ name: 'contact' }"
                @click.prevent="$emit('transitionDirection', this.currentPage,3)"
                >Contact</router-link
              >
            </li>
            </ul>
            <div class="underline-container">
                <div class="underline" v-bind:style="{marginLeft: 100 * currentPage + 'px'}"></div>
            </div>
            </div>
            <div class="burger" @click="toggleMobileMenu">
            <img src="@/assets/icons/bars-solid.svg" v-if="!isMobileShown" />
            <img src="@/assets/icons/xmark-solid.svg" v-else />
          </div>
        </div>
      </div>
    </nav>

    <div v-if="isMobileShown" class="mobile-nav">
      <router-link
        v-if="this.currentPage != 1"
        :to="{ name: 'yourdump' }"
        class="yourdump"
        @click.prevent="$emit('transitionDirection', this.currentPage,1);toggleMobileMenu()"
        >Your dump</router-link
      >
      <router-link 
        v-if="this.currentPage != 2" 
        :to="{ name: 'faq' }"
        @click.prevent="$emit('transitionDirection', this.currentPage,2);toggleMobileMenu()"
        >FAQ</router-link
      >
      <router-link
        v-if="this.currentPage != 3"
        :to="{ name: 'contact' }"
        @click.prevent="$emit('transitionDirection', this.currentPage,3);toggleMobileMenu()"
        >Contact</router-link
      >
    </div>
  </header>
</template>

<script>
export default {
  props: {
    currentPage: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      isMobileShown: false,
    };
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileShown = !this.isMobileShown;
    },
  },

  components: {},
  mouted() {
    console.log(this.currentPage);
  },
};
</script>
<style scoped>
nav {
  position: absolute;
  top: 0;
  width: 100%;
}
.yourdump {
  color: #1db954;
}
.nav-content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 1.5rem 0;
  width: 100%;
}

.navbar-nav-desktop {
  display: flex;
  flex-direction: column;
  align-items: center;
  

  color: white;
}
.navbar-nav-desktop > ul{
    display: flex;
    flex-direction: row;
}
.navbar-nav-desktop > ul > li{
    text-align: center;
    width: 100px;
}
.underline-container {
    height: 0.25em;
    width: 325px;
}
.underline {
    height: 0.1rem;
    width: 25px;
    background-color: white;
    border-radius: 0.125em;
    transition: .4s;

}

.navbar-logoNav {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;

  color: white;
}
.navbar-logoNav > img {
  width: 2rem;
  height: auto;
}
.navbar-logoNav > p {
  font-size: 1.8rem;
}
.burger {
  display: none;
}
.mobile-nav {
  display: none;
}
.burger {
  position: absolute;
  top: 1.5rem;
  right: 1rem;
}
.burger img {
  width: 2rem;
  height: auto;
  color: white;
  filter: invert(100%);
}
.mobile-nav.shown {
  display: block;
}
@media (max-width: 1000px) {
  .burger {
    display: block;
  }
  .mobile-nav {
    display: flex;
    flex-direction: column;
    position: absolute;

    top: 5rem;
    gap: 1rem;
    margin-left: 2rem;
    color: white;
  }
  .navbar-nav-desktop {
    display: none;
  }
}
</style>