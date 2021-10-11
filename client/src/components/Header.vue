<template>
  <header class="header navbar">
    <div class="header__navbar-brand navbar-brand">
      <router-link to="/">
        <img
          class="header__navbar-brand-image"
          src="@/assets/logo.png"
          alt=""
        />
      </router-link>
    </div>
    <div class="header__navbar_nav">
      <nav class="">
        <ul class="header__navbar_links">
          <li>
            <router-link to="/">Inicio</router-link>
          </li>
          <li>
            <router-link to="/eventos">Eventos</router-link>
          </li>
          <li>
            <router-link to="/premios">Premios</router-link>
          </li>
          <li >
            <router-link to="/about">Contactenos</router-link>
          </li>
          <li v-show="loginHasAdmin">
            <router-link to="/admin">Dashboard</router-link>
          </li>
          <li v-show="loginHasUser">
            <router-link to="/puntos">Mis puntos</router-link>
          </li>


        </ul>
      </nav>
    </div>
    <div class="header__section-login d-grid">
      <div
        class="section-login_not-login d-flex"
        v-if="isLogin === false ? true : false"
      >
        <button class="header__btn-login" @click="$emit('showLogin')">
          Ingresar
        </button>
        <button class="header__btn-register" @click="$emit('showRegister')">
          Registrate
        </button>
      </div>
      <div
        class="section-login-logout d-flex"
        v-if="isLogin === true ? true : false"
      >
        <router-link class="" :to="'/user/' + userInfo ? userInfo.username : ''">{{
          userInfo ? userInfo.username : ''
        }}</router-link>
        <button class="header__btn-logout" @click="doLogout">Salir</button>
      </div>
    </div>
    <div class="header__btn-collapse">
      <button class="mdi mdi-menu"><span class=""></span></button>
    </div>
  </header>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  props: ["isLogin", "userInfo"],
  methods: {
    doLogout() {
      console.log("saliendo");
      this.$store.commit("setUser", undefined);
      localStorage.removeItem("token");
      localStorage.removeItem("auth");

      //return to home
      //redirigir al home
      if (this.$route.name != "/") {
        this.$router.push("/").catch(() => {});
      }
      this.$emit("hasLogout");
    },
  },
  updated() {
    console.log("Actualizado");
    console.log(this.hasLogin);
    console.log(this.$store.state.userdata);
  },
  computed: {
    ...mapState(["userdata"]),
    loginHasAdmin(){
      if(this.isLogin){return this.userInfo.rol === "ADMIN" ? true: false}else{return false}
    },
        loginHasUser(){
      if(this.isLogin){return this.userInfo.rol === "USER" ? true: false}else{return false}
    },
  },
};
</script>

<style lang="scss" scoped>
$breackpoint: 768px;

.header {
  display: grid;

  grid-template-columns: 0.75fr 1fr 0.5fr;

  box-shadow: 0rem 0.5rem 1rem $color-header-shadow;

  ul {
    list-style: none;
  }
  li {
    font-family: "Mallanna", sans-serif;
    //font-size: 1.4rem;
    a {
      text-decoration: none;
      color: $color-text-header;
      &.router-link-exact-active {
        color: $color-link-active;
      }
      &.disable {
        color: gray;
        font-weight: normal;
      }
    }
  }

  @media (min-width: $breackpoint) {
    background: white;
    padding: 5px 50px;
    grid-template-areas: "logo navegacion login";
    grid-template-columns: 0.75fr 1fr 0.5fr;
    grid-column-gap: 5%;
  }
  @media (max-width: $breackpoint) {
    padding: 2px 10px;
    grid-template-areas: "logo btnCollapse" "login login" "navegacion navegacion";
  }

  .header__navbar-brand {
    grid-area: logo;
    display: inline-flex;
    justify-content: left;
    .header__navbar-brand-image {
      width: 150px;
      @media (max-width: 768px) {
        width: 80px;
      }
    }
  }
  .header__navbar_nav {
    grid-area: navegacion;
    display: flex;
    justify-content: right;
    .header__navbar_links {
      display: flex;
      justify-content: flex-end;
      margin-bottom: 0;

      li {
        margin-left: 20%;
      }
    }
  }
  .header__section-login {
    grid-area: login;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    button {
      padding: 0 5%;
      margin: 0 10px;
      border-radius: 50rem;
      font-family: "Mallanna", sans-serif;
    }
    .header__btn-login,
    .header__btn-logout {
      border: 2px $color-salmon solid;
      background: $color-salmon;
      color: white;
    }
    .header__btn-register {
      border: 2px $color-salmon solid;
      background: white;
      color: $color-text-header;
    }
  }
  .header__btn-collapse {
    grid-area: btnCollapse;
    @media (min-width: $breackpoint) {
      display: none;
    }
  }
}
</style>
