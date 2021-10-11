<template>
  <div class="Inicio">
    <h1>Este es el dashboard</h1>
    <p></p>
    <h2>Bienvenido</h2>
    <p>{{ $store.state.userdata.username }}</p>
    <p>Último acceso {{ $store.state.userdata.fecha_acceso }}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userName: "asdsdd",
    };
  },
  computed: {
    userinfo() {
      return this.$store.state.userdata.username;
    },
  },
};
</script>
