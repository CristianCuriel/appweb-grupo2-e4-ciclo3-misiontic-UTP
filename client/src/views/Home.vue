<template>

  <div class="home">
    
    <!--- Carrusel: Slider --->
      <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">

        <div class="carousel-inner">

          <div class="carousel-item active">
            <img src="../assets/Slider.png" class="d-block w-100" alt="Imagen">
          </div>

          <div class="carousel-item">
            <img src="../assets/Slider2.png" class="d-block w-100" alt="Imagen">
          </div>

          <div class="carousel-item">
            <img src="../assets/Slider3.png" class="d-block w-100" alt="Imagen">
          </div>

        </div>
        
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>

        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>

      </div>
      <!--- Fin del Carrusel: Slider --->

      <!--- Banner --->
      <section class="container-fluid banner">

          <p>Participa en nuestros eventos, acumula <br> puntos y gana muchos premios</p>

          <div class="container">
            
            <div class="card">
              <img src="../assets/login.png" alt="Avatar" >
              <div class="container">
                <p><strong>Registrate</strong> o inicia sesion</p>
              </div>
            </div>

            <div class="card">
              <img src="../assets/metodo-de-pago.png" alt="Avatar" >
              <div class="container">
                <p><strong>Obten</strong> puntos</p>
              </div>
            </div>

            <div class="card">
              <img src="../assets/carrito-de-compras.png" alt="Avatar" >
              <div class="container">
                <p><strong>Redimelos </strong>en premios</p>
              </div>
            </div>

            <div class="card">
              <img src="../assets/papel-picado.png" alt="Avatar" >
              <div class="container">
                <p><strong>Disfruta</strong> de los premios</p>
              </div>
            </div>

          </div>       

      </section>
      <!--- Fin del Banner --->

      <!-- CarViewProduct -->
        <section >

          <div class="containerCard">
            <cardProductHome nombre="Camiseta polo negro" imagen = "../assets/camisetapolonegra_adobespark.png" descripcion = "Camisetas tipo polo con logotipo empresa en tallas S, M, L y XL" punto ="850"></cardProductHome>
            <cardProductHome nombre="Termo pequeño" descripcion = "Termo para bebidas frías de 150ml" punto ="120"></cardProductHome>
            <cardProductHome nombre="Sombrilla recogible" descripcion = "Sombrilla recogible para llevar consigo en el bolso" punto ="500"></cardProductHome>
            <div class="container categoria">
                <div class="content-categoria">
                  <p> Mas categorias <br><span> Destacadas </span></p>
                  <button>Ver mas</button>
                </div>
            </div>
          </div>


        </section>

        <section class="eventProximo">
          <eventProximo1></eventProximo1>
        </section>
         

      <!-- Fin CarViewProduct -->
  </div>

</template>

<script>

import cardProductHome from "../components/cardProductHome.vue";
import eventProximo1 from "../components/eventProximo.vue";
export default {
  name: 'Home',
  components: {
    cardProductHome,
    eventProximo1
  }
}


</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Baloo+Tamma+2:wght@600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Allerta&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Assistant&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Arsenal&display=swap');

.eventProximo{
    margin-left: 10px;
    margin-right: 10px;
    width: 1322px;
    height: 711px;
}

.home{
  background: #E4E4E4;
}

.categoria{
  border: 0.2px solid #727272;
  margin: 40px 20px 40px 10px;
  width: 300px;
  height: 395px;
  align-items: center;

    .content-categoria p {
      font-family: 'Arsenal', sans-serif;
      color: #727272;
      width: 300px;
      padding: 20px 25px 0px 0px;
      font-size: 24px;
      line-height: 18px;
      letter-spacing: 0.15em;
        span{
          font-size: 38px;
          line-height: 38px;
        }
  }

  .content-categoria button{

          font-family: 'Arsenal', sans-serif;
          font-size: 18px;
          margin-top: 10px ;
          margin-left: -25px ;
          padding-left: 50px;
          padding-right: 50px;
          padding-top:10px ;
          padding-bottom:10px ;
          outline: none;
          color: #727272;
          border: none;
          border-radius: 50px;
  }

  .content-categoria button:hover{
    background: #3A4D6417 ;
    transition: 0.5s;
    color:#727272;
  }

}

  .banner{
    background-image:url('../assets/Banner1.png') ;
    display: inline-block;
    margin-left: 10px;
    margin-right: 10px;
    width: 1322px;
    height: 291px;
  }


  p{
    color: white;
    margin-bottom: 0rem;
    font-family: 'Baloo Tamma 2', cursive;
    padding: 20px 0px 10px 0px;
    font-size: 30px;
  }

  .container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 50px;
  grid-auto-flow: row;
  grid-template-areas:
    ". . . .";
}

  .card{
    align-content: center;
    height: 70%;
    border-radius: 0px 50px 50px 0px;
    padding: 20px 0px 10px 20px;
    display: grid; 
    grid-template-columns: 1fr 1fr; 
    grid-template-rows: 1fr; 
    gap: 0px 10px; 
    grid-template-areas: 
    ". ."; 
    img {
      width: 4rem;
      height: 4rem;
      padding: 10px;
      border: 2.5px solid #e4e4e4d0;
      border-radius: 40px;
      margin: 0px 0px 10px 0px;
       
    }
    p{
      font-family: 'Courier New', Courier, monospace;
      text-align: center;
      color: #969696d4;
      font-size: 12px;
      font-family: 'Allerta', sans-serif;
      padding: 14px 0px 10px 10px;
      width: 90px;
    }
    
  }

  .containerCard{
      background: #F7F7F7;
      display: grid; 
      grid-template-columns: 0.5fr 0.2fr 0.5fr 0.5fr; 
      gap: 0px 0px; 
      margin-left: 10px;
      margin-right: 10px;
      width: 1322px;
      height: 598px;
      padding-top: 60px ;
    }

</style>