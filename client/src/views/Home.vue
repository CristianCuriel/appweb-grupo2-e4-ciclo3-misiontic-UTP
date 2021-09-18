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
      <section >

        <div class="container-fluid banner">

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

        </div>

      </section>
      <!--- Fin del Banner --->

  </div>

</template>

<script>


export default {
  name: 'Home',
  components: {
    
  }
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Baloo+Tamma+2:wght@600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Allerta&display=swap');

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

</style>