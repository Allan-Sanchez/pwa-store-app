<template>
  <section>
    <!-- btn -->
    <!-- <h1>{{keyclient}}</h1> -->
    <div class="flex justify-center pt-2 mt-4 text-font-card mb-5">
      <button @click="openModalSubstract()"
        class="btn-icon-card px-4 bg-green-200  p-2 rounded-lg hover:bg-green-100  hover:text-gray-700 mr-2 flex items-center">
        Deuda
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          focusable="false"
          width="2em"
          height="2em"
          style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
        >
          <path d="M5 11h14v2H5z" fill="#1DA849" />
        </svg>
      </button>

      <button @click="openModalPlus()"
        class="btn-icon-card modal-close px-4 bg-red-200 p-2 rounded-lg hover:text-gray-700 hover:bg-red-100 flex items-center">
        Deuda
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          focusable="false"
          width="2em"
          height="2em"
          style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 1024 1024"
        >
          <defs />
          <path
            d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"
            fill="#FF1C1C"
          />
          <path
            d="M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"
            fill="#FF1C1C"
          />
        </svg>
      </button>
    </div>

    <!-- modal -->
    <div
      v-if="modal"
      tabindex="0"
      @keyup.esc="closeModal()"
      class="modal  fixed w-full h-full top-0 left-0 flex items-center justify-center"
    >
      <div
        class="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"
      ></div>

      <div
        class="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto"
      >
        <div @click="closeModal()"
          class="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-sm z-50">
          <svg
            class="fill-current text-white"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
          >
            <path
              d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
            ></path>
          </svg>
          <span class="text-sm">(Esc)</span>
        </div>

        <!-- Add margin if you want to see some of the overlay behind the modal-->
        <div class="modal-content py-4 text-left px-6">
          <!--Title-->
          <div class="flex justify-between items-center pb-3">
            <p v-if="substract" class="text-2xl font-bold text-font">Disminuir Deuda</p>
            <p v-else class="text-2xl font-bold text-font">Agregar Deuda</p>

            <div v-if="substract">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                focusable="false"
                width="6em"
                height="6em"
                style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path d="M5 11h14v2H5z" fill="#1DA849" />
              </svg>
            </div>

            <div v-else>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                focusable="false"
                width="5em"
                height="5em"
                style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 1024 1024"
              >
                <defs />
                <path
                  d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"
                  fill="#FF1C1C"
                />
                <path
                  d="M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"
                  fill="#FF1C1C"
                />
              </svg>
            </div>
          </div>

          <!--Body-->
          <p>Ingres la cantidad</p>
          <div class="md:w-full">
            <input v-model="quantity"
              class="placeholder-input bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
              id="inline-full-name"
              type="number"
              autofocus
              placeholder="Escribe la candidad"
            />
          </div>

          <p>Descripcion del Movimiento</p>
          <div class="md:w-full">
            <input v-model="description"
              class="placeholder-input bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
              id="inline-full-name" placeholder="Detalle de la deuda"
              type="type"
            />
          </div>

          <p>Fecha de Movimiento</p>
          <div class="md:w-full">
            <input
              class="placeholder-input bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              disabled
              type="text" :value="date"
            />
          </div>
          <!--Footer-->
          <div class="flex justify-end pt-2 mt-4">
            <button v-if="substract" @click="substractDebt()"
              class="px-4 bg-blue-300 text-white p-3 rounded-lg  hover:bg-gray-100 hover:bg-blue-500 mr-2">
              Guardar
            </button>

            <button v-else @click="plusDebt()"
              class="px-4 bg-blue-300 text-white p-3 rounded-lg  hover:bg-gray-100 hover:bg-blue-500 mr-2">
              Guardar
            </button>
            <button
              @click="closeModal()"
              class="modal-close px-4 bg-red-300 p-3 rounded-lg text-white hover:bg-red-400"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props : {
    keyclient: {
        type: String,
        required: true
    }
},
  data () {
    return {
      debtPlus:0,
      debtSubstract:1,
      modal: false,
      date:'',
      substract : true,
      quantity: '',
      description: '',

      // plus:false,
    };
  },
  mounted() {
    // console.log(keyclient)
    console.log(this.$props.keyclient);
  },
  methods:{
    openModalSubstract(){
      this.modal = !this.modal;
      this.description = 'Abono';
    },
    openModalPlus(){
      let d = new Date();
      let datestring = d.getFullYear() + "-" + (d.getMonth()+1) + "-" + d.getDate()  + " " +
      d.getHours() + ":" + d.getMinutes();
      this.date = datestring;

      this.modal = !this.modal;
      this.description ='';
      this.substract = !this.substract;
      // console.log(this.keyclient);     
      
    },
    async plusDebt(){
      if(this.quantity !== ''){ 
        const messageRef = this.$fireStore.collection("clients").doc(this.keyclient).collection("history");
        try {
          await messageRef.add({
           date:this.date,
           state:this.debtPlus,
           quantity:this.quantity,
           description: this.description
          });
        } catch (e) {
          console.log(e)
          return;
        }
          this.closeModal();

      }
    },
    substractDebt(){
      console.log('subsctract');
    },
    closeModal(){
      this.modal = false;
      this.quantity = 0;
      this.description = '';
      this.substract = true;
    },
  }
};
</script>
