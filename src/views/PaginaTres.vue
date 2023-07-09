<template>
  <div class="page-conainer">
    <div class="pagina">
      <h2 class="titulo">Página 3</h2>
      <router-link class="boton" to="/pagina2">Volver a página 2</router-link>
  
      <!-- Contenido de la página 3 -->
    </div>
  </div>
  </template>
  
  <style scoped>
  .page-container{
  .pagina {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to bottom right, #000000, #ffffff);
    color: #ffffff;
    font-family: Arial, sans-serif;
  }
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
  </style>
  