<template>
  <section>
    <div v-if="alert" class=" w-11/12 text-center m-3 absolute">
      <div
        class="p-4 bg-blue-900 items-center text-blue-200 leading-none rounded-full lg:rounded-full flex lg:inline-flex"
        role="alert" >
        <!-- <span
          class="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3"
          >Agregado</span> -->
        <span class="font-semibold mr-2 text-left flex-auto"
          >{{messageAlert}}</span>

        <svg @click="closeAlert()"
          class="fill-current text-blue-200"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 18 18"
        >
          <path
            d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
          ></path>
        </svg>
      </div>
    </div>
    
    <div class="w-full h-64 flex justify-center items-center">
      <div class="flex justify-center flex-col w-full mx-6">
        <h1 class="title text-center">UK</h1>
        <div class="relative">
          <input
            class="input-search"
            type="text"
            placeholder="Buscar por nombre"
          />
        </div>
      </div>
    </div>

    <div class="mx-6 text-font">
      <h3 class="mb-3">Lista de Personas</h3>
      <CARDLIST></CARDLIST>
    </div>
    <MODALADD v-on:alert-open="openAlert()"></MODALADD>
  </section>
</template>

<script>
import CARDLIST from "../components/CardList";
import MODALADD from '../components/ModalAdd'

export default {
  components: {
    CARDLIST,
    MODALADD
  },
  data() {
    return {
      dateMessage: "",
      alert:false,
      messageAlert:"Nuevo cliente agregado con exito",
      dataClientList:[]
    };
  },
  mounted() {
    this.$store.commit('setDataClient');
    // let dataArray =  this.$store.state.clientList;
    //   dataArray.forEach(element => {
    //   this.dataClientList.push(element);
    // });
  },
  methods: {
    closeAlert(){
      this.alert = false
    },
    closeTimeAlert(){
      setTimeout(() => {
        this.alert= false
      },3000);
    },
    openAlert(){
      this.alert=true;
      this.closeTimeAlert();
    },
    async writeToFirestore() {
      const messageRef = this.$fireStore.collection("message").doc("message");
      try {
        await messageRef.set({
          message: "Nuxt-Fire with Firestore rocks!"
        });
      } catch (e) {
        alert(e);
        return;
      }
      alert("Success.");
    },
    async readFromFirestore() {
      const messageRef = this.$fireStore.collection("message").doc("message");
      try {
        const messageDoc = await messageRef.get();
        alert(messageDoc.data().message);
      } catch (e) {
        alert(e);
        return;
      }
    }
  }
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/

:root {
  --color-text: #2c3550;
}

.title {
  font-family: "Piedra", sans-serif;
  font-size: 64px;
  color: var(--color-text);
}
.text-font {
  font-family: "Roboto";
  color: var(--color-text);
}
.input-search {
  @apply border  py-2 px-4 block w-full appearance-none leading-normal;
  font-family: "Roboto";
  border-radius: 2rem;
  border-color: #e4e9f8;
  background: #f4f6fd;
}
.input-search:focus {
  @apply outline-none shadow-outline;
}
.input-search::placeholder {
  color: var(--color-text);
}
.placeholder-input::placeholder {
  color: var(--color-text);
}
</style>
