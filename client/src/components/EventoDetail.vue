<template>
  <div>
    <div class="d-flex justify-content-end">
      <button type="button" class="btn-close pull left" aria-label="Close" @click="$emit('cerrarDetalle')"></button>
    </div>
    <p></p>
    <div class="d-flex justify-content-center">
      <div class="card" style="width: 18rem;">
        <img class="card-img-top" :src="urlImagenevento" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">{{ dataEventoId[0].titulo}}</h5>
        </div>
        <table class="card-table table-bordered">
          <tbody>
            <tr>
              <th scope="row">Categoria</th>
              <td colspan="2">{{ dataEventoId[0].categoria}}</td>
            </tr>
            <tr>
              <th scope="row">Sucursal</th>
              <td colspan="2">{{ dataEventoId[0].sucursal}}</td>
            </tr>
            <tr>
              <th scope="row">Lugar</th>
              <td colspan="2">{{ dataEventoId[0].lugar}}</td>
            </tr>
            <tr>
              <th scope="row">Fecha de Inicio</th>
              <td colspan="2">{{ dataEventoId[0].fecha_inicio}}</td>
            </tr>
            <tr>
              <th scope="row">Fecha de Finalización</th>
              <td colspan="2">{{ dataEventoId[0].fecha_fin }}</td>
            </tr>
            <tr>
              <th scope="row">Tipo de Evento</th>
              <td colspan="2">{{ dataEventoId[0].tipo }}</td>
            </tr>
            <tr>
              <th scope="row">Valor Puntos</th>
              <td colspan="2">{{ dataEventoId[0].valor_puntos }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <p></p>
    <div> 
      <button type="button" class="btn btn-outline-warning  m-3" @click="$emit('editarEvento')">Editar</button>
      <button type="button" class="btn btn-outline-danger  m-3" @click="$emit('eliminarEvento')">Eliminar</button>
    </div>
  </div>
</template>


<script>

import axios from "axios";

export default {
  props: ["idEvento", "dataEventoId"],
  data() {
    return {
      dataEvento: [],
      urlImagenevento: "",
    };
  },
  mounted() {
    var urlServer = process.env.VUE_APP_ROOT;

    axios
      .get(urlServer + this.dataEventoId.path_foto, {
        responseType: "arraybuffer",
      })
      .then((response) => {
        const base64 = btoa(
          new Uint8Array(response.data).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            ""
          )
        );
        this.urlImagenevento = "data:;base64," + base64;
      })
      .catch((e) => {
        axios
          .get(urlServer + "/static/images/cross.jpg", {
            responseType: "arraybuffer",
          })
          .then((response) => {
            const base64 = btoa(
              new Uint8Array(response.data).reduce(
                (data, byte) => data + String.fromCharCode(byte),
                ""
              )
            );
            this.urlImagenevento = "data:;base64," + base64;
          });
      });
  },
};
</script>