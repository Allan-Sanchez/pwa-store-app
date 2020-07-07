<template>
  <section>
    <div
      @click="openModal()"
      class="cursor-pointer w-20 bg-blue-200 h-20 rounded-full absolute right-0 bottom-0 m-3 flex justify-center items-center hover:bg-blue-300"
    >
      <svg width="40" height="40" viewBox="0 0 448 512">
        <title>plus</title>
        <g fill="#2c3550">
          <path
            d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
          ></path>
        </g>
      </svg>
    </div>

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
        <div
          @click="closeModal()"
          class="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-sm z-50"
        >
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
            <p class="text-2xl font-bold text-font">Agregar un nuevo cliente</p>
          </div>

          <!--Body-->
          <p>Ingres el nombre</p>
          <div class="md:w-full">
            <input
              v-model="name"
              class=" placeholder-input bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
              id="inline-full-name"
              type="text"
              placeholder="Escribe el nombre del cliente"
            />
          </div>

          <p>Fecha de creacion</p>
          <div class="md:w-full">
            <input
              v-model="date"
              class="placeholder-input bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              disabled
              type="text"
              placeholder="08/06/2020"
            />
          </div>

          <div class="flex mt-5">
            <div>
              <label class="inline-flex items-center">
                <input
                  type="radio"
                  class="form-radio text-indigo-600"
                  name="radio-colors"
                  value="hombre"
                  checked v-model="gender"
                />
                <span class="ml-2">Hombre</span>
              </label>
            </div>
            <div class="mx-auto">
              <label class="inline-flex items-center">
                <input
                  type="radio"
                  class="form-radio text-red-500"
                  name="radio-colors"
                  value="mujer" v-model="gender"
                />
                <span class="ml-2">Mujer</span>
              </label>
            </div>
          </div>
          <!--Footer-->
          <div class="flex justify-end pt-2 mt-4">
            <button
              @click="addClient()"
              class="px-4 bg-blue-300 text-white p-3 rounded-lg  hover:bg-gray-100 hover:bg-blue-500 mr-2"
            >
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

<style></style>

<script>
export default {
  name: "modalAdd",
  data() {
    return {
      modal: false,
      name: "",
      date: "",
      gender:''
    };
  },
  methods: {
    closeModal() {
      this.name = "";
      this.modal = false;
    },
    openModal() {
      let d = new Date();
      let datestring = d.getFullYear() + "-" + (d.getMonth()+1) + "-" + d.getDate()  + " " +
      d.getHours() + ":" + d.getMinutes();
      this.date = datestring;
      this.modal = true;
    },
    async addClient() {
      if (this.name != "" && this.date != "" && this.gender != "") {
        const messageRef = this.$fireStore.collection("clients");
        // const messageRef = this.$fireStore.collection("message").doc("clients");
        try {
          await messageRef.add({
            name: this.name,
            gender: this.gender,
            date: this.date,
            total:0
          });
        } catch (e) {
          console.log(e)
          return;
        }
        // alert("Success.");
        this.closeModal();
        this.$emit('alert-open');
      }
    }
  }
};
</script>

<style>
.modal {
  transition: opacity 0.25s ease;
}
body.modal-active {
  overflow-x: hidden;
  overflow-y: visible !important;
}
</style>
