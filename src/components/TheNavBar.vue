<template>
    <header>
        <nav>
            <div class="container">
                <div class="nav-content">
                    <router-link :to="{ name: 'home' }" class="navbar-logoNav">
                        <img class="logo" src="@/assets/img/whiteLogo.png" alt="whiteLogo" />
                        <p>Spotify Dump</p>
                    </router-link>
                    <ul class="navbar-nav-desktop">
                        <li><router-link :to="{ name: 'home' }">Home</router-link></li>
                        <li id="yourDump"><router-link :to="{ name: 'yourdump' }">Your dump</router-link></li>
                        <li><router-link :to="{ name: 'faq' }">FAQ</router-link></li>
                        <li><router-link :to="{ name: 'contact' }">Contact</router-link></li>
                    </ul>
                    <div class="burger" @click="toggleMobileMenu">
                        <img src="@/assets/icons/bars-solid.svg" v-if="isMobileShown" />
                        <img src="@/assets/icons/xmark-solid.svg" v-else />
                    </div>
                </div>
            </div>
        </nav>

        <div class="mobile-nav">
            <router-link :to="{ name: 'yourdump' }">Your dump</router-link>
            <router-link :to="{ name: 'faq' }">FAQ</router-link>
            <router-link :to="{ name: 'contact' }">Contact</router-link>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            isMobileShown: false,
        }
    },
    methods:{
        toggleMobileMenu() {
            this.isMobileShown = !this.isMobileShown
        }
    },

    components:{
    }
};

</script>
<style scoped>
nav * {
    color: white;
}
.nav-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 65px;
}
.navbar-nav-desktop {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1.5rem;
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
.burger, .mobile-nav {
    display: none;
}
.burger {
    position: absolute;
    top: 1rem;
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
    .navbar-nav-desktop {
        display: none;
    }
}
</style>