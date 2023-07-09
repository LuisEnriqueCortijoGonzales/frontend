<template>
  <div class="page-container">
    <div class="pagina">
      <h2 class="titulo">Página 2</h2>

      <div class="login-form">
        <h3>Iniciar sesión</h3>
        <form>
          <div class="form-group">
            <label for="username">Nombre de usuario</label>
            <input type="text" id="username" v-model="username" placeholder="Ingrese su nombre de usuario">
          </div>
          <div class="form-group">
            <label for="password">Contraseña</label>
            <input type="password" id="password" v-model="password" placeholder="Ingrese su contraseña">
          </div>
          <router-link class="login-button" @click="login" to="/pagina2/pagina3">Iniciar sesión</router-link>
        </form>
      </div>

      <!-- Contenido de la página 2 -->
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    login() {
      // Lógica para el inicio de sesión
      console.log('Iniciar sesión:', this.username, this.password);
      // Puedes agregar aquí la lógica de autenticación y redireccionamiento si es necesario
    },
  },
};
</script>

<style scoped>
.page-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom right, #000000, #ffffff);
  color: #ffffff;
  font-family: Arial, sans-serif;
}

.titulo {
  font-size: 32px;
  margin-bottom: 20px;
}

.boton {
  background-color: #ffffff;
  border-radius: 5px;
  color: #000000;
  display: inline-block;
  font-size: 16px;
  padding: 10px 20px;
  text-decoration: none;
  transition: background-color 0.3s ease;
  margin-top: 20px;
}

.boton:hover {
  background-color: #f5f5f5;
}

.login-form {
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 5px;
  width: 300px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.login-form h3 {
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
}

.form-group {
  margin-bottom: 20px;
  width: 100%;
}

.form-group label {
  font-size: 16px;
  display: block;
  text-align: left;
  margin-bottom: 5px;
}

.form-group input {
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.login-button {
  background-color: #000000;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.login-button:hover {
  background-color: #333333;
}
</style>
