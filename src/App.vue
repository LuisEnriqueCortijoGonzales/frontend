<template>
  <div class="container">
    <header class="menu">
      <div class="logo">
        UteCoin
      </div>
      <nav class="navbar">
        <ul class="navlist">
          <li v-if="!isPaginaAdmin"><router-link to="/pagina1">Menu</router-link></li>
          <li v-if="!isPagina2 && !isPagina3 && !isPaginaAdmin"><router-link to="/pagina2">Iniciar sesión</router-link></li>
          <li v-if="isPagina2 && !isPagina3 && !isPaginaAdmin"><router-link to="/pagina2/pagina3">Iniciar</router-link></li>
          <li v-if="!isPaginaAdmin"><router-link to="/iniciaradmin">Administrador</router-link></li>
          <li v-if="isPaginaAdmin"><router-link to="/pagina1">Menú</router-link></li> <!-- Botón Administrador solo en la página de "Iniciar Admin" -->
        </ul>
      </nav>
    </header>

    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isPagina2() {
      return this.$route.path === '/pagina2';
    },
    isPagina3() {
      return this.$route.path === '/pagina2/pagina3';
    },
    isPaginaAdmin() {
      return this.$route.path === '/iniciaradmin';
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

.container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.no-scrollbar::-webkit-scrollbar {
  width: 0;
  background-color: transparent;
}

.no-scrollbar {
  scrollbar-width: none;
}

.menu {
  background-color: #000000;
  color: #ffffff;
  padding: 20px;
}

.logo {
  font-size: 24px;
  font-weight: bold;
  font-family: 'Poppins', sans-serif;
}

.navbar {
  margin-top: 10px;
}

.navlist {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}

.navlist li {
  margin-right: 20px;
}

.navlist li a {
  text-decoration: none;
  color: #ffffff;
  font-weight: bold;
  font-family: 'Poppins', sans-serif;
  transition: color 0.3s ease;
}

.navlist li a:hover {
  color: #ff0000;
}

.content {
  flex-grow: 1;
  background: linear-gradient(180deg, #f1f1f1, #ffffff);
  padding: 20px;
}
</style>

