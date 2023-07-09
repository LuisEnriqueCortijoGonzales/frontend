<template>
  <div>
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Responsive Gaming Website</title>

        <!-- Custom CSS link -->
        <link rel="stylesheet" type="text/css" href="css/style.css">

        <!-- Boxicons link -->
        <link rel="stylesheet" href="https://unpkg.com/boxicons@latest/css/boxicons.min.css">
        
        <!-- Remixicons -->  
        <link href="https://cdn.jsdelivr.net/npm/remixicon@3.4.0/fonts/remixicon.css" rel="stylesheet">

        <!-- Google Fonts -->  
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
        <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Poppins:wght@300;500;600;700;800;900&display=swap" rel="stylesheet">
      </head>
      <body>
        <!-- Contenido del cuerpo de la página -->
        <header>
          <a href="#" class="logo">Utecoin</a>

          <ul class="navlist">
            <li><a href="#">Integrantes</a></li>
            <li><a href="#">GitHub</a></li>
            <li><a href="#" target="_blank">Iniciar Sesion</a></li>
            <li><router-link to="/ListarFormulario">Iniciar Sesion</router-link></li>
            
          </ul>
          <div class="bx bx-menu" id="menu-icon"></div>
        </header>
        
        <section class="hero">
          <div class="hero-text">
            <h5>#1 Trending</h5>
            <h4>AEDA</h4>
            <h1>UTECOIN</h1>
            <p>Hacer transferencias nunca fue tan fácil y seguro <br> no te quedes con las ganas y confía en los mejores.</p>
            <a href="#">Registrar</a>
            <a href="#" class="ctaa"><i class="ri-play-fill"></i> Quienes somos</a>
          </div>

          <div class="hero-img">
            <img :src="cofrecitoImg" alt="Cofrecito">
          </div>
        </section>

    
      </body>
    </html>
    
  </div>
</template>

<style scoped>
.page-container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  color: #ffffff;
  font-family: Arial, sans-serif;
}

.titulo {
  font-size: 32px;
}

/* Estilos CSS de la primera vista */
header {
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1000;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 33px 9%;
  background: transparent;
}

.logo {
  font-size: 30px;
  font-weight: 700;
  color: white;
}

.navlist {
  display: flex;
}

.navlist a {
  color: white;
  margin-left: 60px;
  font-size: 15px;
  font-weight: 600;
  border-bottom: 2px solid transparent;
  transition: all .55s ease;
}

.navlist a:hover {
  border-bottom: 2px solid white;
}

.hero {
  height: 100%;
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(240.59deg, #484646 0%, #252525 22.52%, #000000 70.52%);
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  gap: 2rem;
}

section {
  padding: 0 19%;
}

.hero-text h5 {
  font-size: 14px;
  font-weight: 400;
  color: white;
  margin-bottom: 40px;
}

.hero-text h1 {
  font-family: 'Permanent Marker', cursive;
  font-size: 90px;
  line-height: 1;
  color: white;
  margin: 0 0 45px;
}

.hero-text h4 {
  font-size: 18px;
  font-weight: 600;
  color: white;
  margin-bottom: 10px;
}

.hero-text p {
  color: white;
  font-size: 15px;
  line-height: 1.9;
  margin-bottom: 40px;
}

.hero-img img {
  width: 600px;
  height: auto;
  margin-left: 200px;
  margin-top: 30px;
}

.hero-text a {
  display: inline-block;
  color: white;
  background: #d6b10b;
  border: 1px solid transparent;
  padding: 12px 30px;
  line-height: 1.4;
  font-size: 14px;
  font-weight: 500;
  border-radius: 30px;
  text-transform: uppercase;
  margin-right: 10px;
  transition: all .55s ease;
}

.hero-text a:hover {
  background: transparent;
  border: 1px solid white;
  transform: translate;
}
</style>
