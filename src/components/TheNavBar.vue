<template>
    <header>
            <div class="navbar">
                <div class="container">
                    <router-link :to="{ name: 'home' }" class="navbar-logoNav">
                    <img src="@/assets/img/whiteLogo.png" alt="whiteLogo" />
                    <p>Spotify Dump</p>
                    </router-link>
                    <ul class="navbar-nav-desktop">
                        <li><router-link :to="{ name: 'home' }">Home</router-link></li>
                        <li id="yourDump"><router-link :to="{ name: 'yourdump' }">Your dump</router-link></li>
                        <li><router-link :to="{ name: 'faq' }">FAQ</router-link></li>
                        <li><router-link :to="{ name: 'contact' }">Contact</router-link></li>
                    </ul>
                    <a href="javascript:void(0);" class="navbar-nav-mobile-btn" @click="myFunction()">
                        <i class="fa fa-bars"></i>
                    </a>
                </div>

                

                
            </div>
            
            <div class="topnav">
                <!-- Navigation links (hidden by default) -->
                <div id="myLinks">
                    <router-link :to="{ name: 'yourdump' }">Your dump</router-link>
                    <router-link :to="{ name: 'faq' }">FAQ</router-link>
                    <router-link :to="{ name: 'contact' }">Contact</router-link>
                </div>
                
            </div>
    </header>
</template>

<script>
export default {
    components:{
    },
    methods:{
        myFunction() {
            var x = document.getElementById("myLinks");
            if (x.style.display === "block") {
                x.style.display = "none";
            } else {
                x.style.display = "block";
            }
        } 
    }
};

</script>
<style scoped>

.navbar{
    background-color: var(--primary-color);
    position: absolute;
    width: 100vw;
    top: 0;
    left: 0;
}
.navbar-logoNav{
    display: flex;
    align-items: center;
}   
.navbar-logoNav img{
    width: 30px;
    height: auto;
    margin-right: 10px;
}
.navbar-logoNav p{
    color: whitesmoke;
    font-size: 1.5em;
}
.navbar-nav-desktop{
    color: whitesmoke;
    list-style-type: none;
    margin: 0;
    padding: 0;
}
.navbar-nav-desktop li{
    display: inline;
    margin: 40px;
}
.container{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 64px;
    margin: 0;
}
#yourDump{
    color: var(--accent-color);
}

/* mobile */
.topnav {
    display: none;
    overflow: hidden;
    background-color: rgb(255, 255, 255);
    
}
.topnav #myLinks {
  display: none;
}
.topnav a {
  color: white;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  display: block;
}

/* Style the hamburger menu */
.navbar-nav-mobile-btn {
    display: none;
}
.navbar-nav-mobile-btn i {
    color: whitesmoke;
}
/* Add a grey background color on mouse-over */
.topnav a:hover {
  background-color: #241d1d;
  color: rgb(255, 255, 255);
}

/* Style the active link (or home/logo) */
.active {
  background-color: #aa2004;
  color: white;
} 
@media (max-width: 1000px) {
.navbar-nav-desktop li{
    margin: 25px;
}
}


@media (max-width: 1000px) {
    .navbar{
        justify-content: space-between;
        margin: 0 20px;
    }
    .navbar-nav-mobile-btn {
        display: contents;
    }
    .topnav {
        display: contents;
    }
    .navbar-nav-desktop{
        display: none;
    }
}
</style>