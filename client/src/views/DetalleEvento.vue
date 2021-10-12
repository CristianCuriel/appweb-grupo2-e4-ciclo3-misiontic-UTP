<template>

  <div class="container">
    <div v-show="!dataEvento ? true : false" class="container-loading">
      <grid-loader
        class="Spinner__loading"
        :loading="dataEvento ? false : true"
        :color="colorLoading"
        size="40px"
        style="background-color: white"
      ></grid-loader>
    </div>

    <div v-if="!dataEvento ? false : true" class="container-section1">

      <div class="container-body">
        <div class="imagen">
          <pulse-loader
            :color="colorLoading"
            style="margin-block: 150px"
            :loading="imagen != '' ? false : true"
          ></pulse-loader>
          <img
            v-show="imagen === '' ? false : true"
            :src="dataEvento ? imagen : '@/assets/cross.jpg'"
            alt="Clock"
            sizes="(min-width: 600px) 200px, 50vw"
          />
        </div>

        <div class="descripcion">
          <div class="title-descripcion">
            Descripcion
          </div>
          <div class="body-descripcion">
            {{ dataEvento? dataEvento.detalle : "" }}
          </div>
        </div>

        <div class="detalle-evento">

          <div class="nombre-evento">
              {{ dataEvento ? dataEvento.titulo : "" }}
          </div>

          <div class="labels">
              Puntos: 
              <span>  
                {{ dataEvento ? dataEvento.valor_puntos : "" }} 
              </span>
          </div>
          
          <div class="labels"> 
              Categoria: 
              <span>  
                {{ dataEvento ? dataEvento.categoria: "" }} 
              </span>
          </div>

          <div class="labels">
              Evento: 
              <span>  
                {{ dataEvento ? dataEvento.tipo: "" }}
              </span>
          </div>

          <div class="disponible" v-if="!dataEvento ? false : true">
              Disponible
              <span id="labels" 
              v-if="dataEvento.disponible = true" >
                Si 
               </span>

              <span id="labels" 
              v-if="dataEvento.disponible = false" > 
               No 
              </span>
          </div>

          <hr />

          <div class="inscripcion">
            <p class="h5"> Inscripcion al evento </p>
          </div>

           <div class="labels">
            Lugar: 
            <span>  
              {{ dataEvento ? dataEvento.lugar : "" }}
            </span>
          </div>

          <div class="labels">
            Fecha: 
            <span>  
              {{ dataEvento ? this.year : "" }}
            </span>
          </div>

          <div class="labels">
            Hora: 
            <span>  
              {{ dataEvento ? this.arr[1] : "" }} 
            </span>
          </div>

          

          <button type="button">Inscripcion al evento</button>

        </div>
      </div>

    </div>

  </div>

</template>

<script>
import axios from "axios";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import GridLoader from "vue-spinner/src/GridLoader.vue";

export default {
  data() {
    return {
      dataEvento: undefined,
      imagen: "",
      colorLoading: "#242f3d",
    };
  },
  components: { PulseLoader, GridLoader },
  mounted() {
    //para hacer que el scroll esté arriba
    window.scrollTo(0, 0);

    //hace llamado a la API para traer la informacion de acuerdo al id
    fetch(process.env.VUE_APP_ROOT_API + "/eventos/" + this.$route.params.id)
      .then((res) => res.json())
      .then((data) => {

        this.dataEvento = data[0];
        this.arr   = this.dataEvento.fecha_inicio.split('T');
        this.year  = this.arr[0].split("-").reverse().toString().replace(/,/g,'/')

         //carga de imagen
         this.urlServer = process.env.VUE_APP_ROOT;

        axios
           .get(this.urlServer + this.dataEvento.path_foto, {
             responseType: "arraybuffer",
           })
          .then((response) => {
             const base64 = btoa(
               new Uint8Array(response.data).reduce(
                 (data, byte) => data + String.fromCharCode(byte),
                 ""
               )
             );
             this.imagen = "data:;base64," + base64;
           })
           .catch((e) => {
             axios
               .get(this.urlServer + "/static/images/cross.jpg", {
                 responseType: "arraybuffer",
               })
               .then((response) => {
                 const base64 = btoa(
                   new Uint8Array(response.data).reduce(
                     (data, byte) => data + String.fromCharCode(byte),
                     ""
                   )
                 );
                 this.imagen = "data:;base64," + base64;
               });
           });
      });
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Allerta&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Abel&display=swap");
@import url("https://fonts.googleapis.com/css2?family=ABeeZee&display=swap");

.container {
  margin: 0;
  padding: 0;
  background: #ededed;
  background-image: url(../assets/images/DetalleEventoYPremio/Rectangle.svg);
  background-size: contain;
  background-position-y: -100px;
  background-repeat: no-repeat;
  max-width: 100%;
  min-height: 600px;
  .container-section1 {
    display: flex;
    align-content: center;
  }
}

.container .container-section1 .container-body {
  width: 90%;
  max-width: 1000px;
  margin: 20px auto;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, auto);
  background: #fff;
  padding: 20px;
  border-radius: 4px;

  .imagen {
    grid-column: span 2;
  }

  .imagen img {
    width: 100%;
  }

  .detalle-evento {
    grid-column: 3/4;
    grid-row: 1/3;
    border: 1px solid #e4e4e4;
    box-sizing: border-box;
    border-radius: 5px;
    padding-left: 8px;
    padding-top: 20px;
  }

  .detalle-evento .nombre-evento {
    font-family: "Allerta", bold;
    font-size: 28px;
    line-height: 1.25em;
    display: flex;
    align-items: center;
    color: #000;
    margin: 0px 0px 3px 10px;
  }

  .detalle-evento  .labels,
  .detalle-evento .disponible
  {
    font-family: "Abel", normal;
    font-size: 18px;
    line-height: 1em;
    display: flex;
    align-items: center;
    color: #000;
    margin-left: 10px;
    margin-bottom: 5px;
  }

  .detalle-evento  .labels span,
  .detalle-evento .disponible span
  {
    font-family: "ABeeZee",bold;
    font-size: 16px;
    line-height: 1.0625em;
    display: flex;
    align-items: center;
    color: #000000;
    margin-left: 10px;
  }

  .detalle-evento hr {
    border: 1px solid #e4e4e4;
    padding: 0.2px;
    margin: 10px;
  }

  .detalle-evento .disponible > p {
    display: flex;
    flex-wrap: wrap;
    font-family: "Abel", normal;
    font-size: 14px;
    line-height: 1.125em;
    color: #000;
    margin-left: 10px;
  }


 .detalle-evento  button {
    background: #43bdd4;
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 18px 30px;
    width: 90%;
    border: none;
    margin-top: 20px;

    font-family: "Abel", bold;
    font-size: 16px;
    line-height: 15px;
    color: #fff;
    margin-left: 10px;
    height: 4.5%;
    transition: 0.3s;
  }

  .detalle-evento  button:hover {
    background: #3598ac;
    transition: 0.3s;
  }

  .detalle-evento .inscripcion {
    margin-left: 10px;
    font-family: "ABeeZee", normal;
    font-size: 14px;
    line-height: 17px;
    color: #000;
  }

  .descripcion {
    grid-column-start: 1;
    grid-column-end: 3;
  }

  .descripcion .title-descripcion {
    font-family: "Abel";
    font-weight: 600;
    font-size: 24px;
    line-height: 31px;
    display: flex;
    text-align: end;

    color: #000000;
  }

  .descripcion .body-descripcion {
    font-family: "Abel", normal;
    font-size: 18px;
    line-height: 17.8px;
    text-align: justify;
  }
}

.container-loading {
  width: 100%;
  height: auto;
  background-color: white;
  z-index: 778;
}
.Spinner__loading {
  margin-block: 300px;
  margin-inline: auto;
}

</style>
