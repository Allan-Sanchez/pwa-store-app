<template>
  <section>
    <div v-for="(item, index) in dataClient" :key="index" class="flex items-center flex-col card-image py-4 ">
      <!-- <div > -->
      <img v-if="item.gender === 'hombre'" src="../assets/img/boy.svg" class="w-24" alt="avatar image" />
      <img v-else src="../assets/img/girl.svg" class="w-24" alt="avatar image" />
      <!-- </div> -->
      <div class="text-center text-font-card text-lg mt-3">
        <p>{{ item.name }}</p>
        <p class="mt-2">{{item.date}}</p>
      </div>

      <div class="flex w-11/12 justify-around absolute icon-content">
        <button @click="deleteClient()"
          class="btn-border-icon  bg-pink-500 text-white w-12 h-12   hover:bg-pink-400 border border-solid ">
          <div class="ml-2">
            <svg
              aria-hidden="true"
              focusable="false"
              width="2em"
              height="2em"
              style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <path
                d="M20.47 7.5l.73-.73a1 1 0 0 0-1.47-1.47L19 6l-.73-.73a1 1 0 0 0-1.47 1.5l.73.73l-.73.73a1 1 0 0 0 1.47 1.47L19 9l.73.73a1 1 0 0 0 1.47-1.5zM10 11a4 4 0 1 0-4-4a4 4 0 0 0 4 4zm6 10a1 1 0 0 0 1-1a7 7 0 0 0-14 0a1 1 0 0 0 1 1z"
                fill="#fff"
              />
            </svg>
          </div>
        </button>

        <button @click="editClient()"
          class="btn-border-icon border border-solid modal-close bg-blue-500 w-12 h-12  hover:bg-blue-400 flex justify-center items-center">
          <div class="ml-2">
            <svg
              aria-hidden="true"
              focusable="false"
              width="2em"
              height="2em"
              style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 640 512"
            >
              <path
                d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h274.9c-2.4-6.8-3.4-14-2.6-21.3l6.8-60.9l1.2-11.1l7.9-7.9l77.3-77.3c-24.5-27.7-60-45.5-99.9-45.5zm45.3 145.3l-6.8 61c-1.1 10.2 7.5 18.8 17.6 17.6l60.9-6.8l137.9-137.9l-71.7-71.7l-137.9 137.8zM633 268.9L595.1 231c-9.3-9.3-24.5-9.3-33.8 0l-37.8 37.8l-4.1 4.1l71.8 71.7l41.8-41.8c9.3-9.4 9.3-24.5 0-33.9z"
                fill="#fff"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>

    <div class="w-3/4 flex justify-center mx-auto text-font-card">
      <div class="total-debt w-48 mt-5 p-3 border p-1 bg-blue-100 rounded-2">
        <!-- <p>Total Deuda <span class="font-bold">Q {{ dataClient[0].total }}</span></p> -->
        <p>Total Deuda <span class="font-bold">Q</span></p>
      </div>
    </div>

    <!-- table -->
    <TABLE ></TABLE>

    <ADDCLIENT :keyclient="key"></ADDCLIENT>
  </section>
</template>

<style>
.text-font-card {
  font-family: "Roboto";
  color: #2c3550;
}
.card-image {
  @apply bg-blue-100 mx-auto my-4 border border-blue-200 relative;
  border-radius: 40px;
  /* width: 80%;     */
  /* height: 38%; */
  width: 241px;
  height: 224px;
}

.btn-border-icon {
  border-radius: 15px;
}
.icon-content {
  bottom: -25px;
}
.green-circle {
  @apply border rounded-full;
  width: 22px;
  height: 22px;
  background: #c6f7dc;
}
.red-circle {
  @apply border rounded-full;
  width: 22px;
  height: 22px;
  background: #f6d1d7;
}
.btn-icon-card {
  border-radius: 20px;
}
.total-debt {
  border-radius: 15px;
}
</style>

<script>
import ADDCLIENT from "../components/AddClient";
import TABLE from '../components/historyClient'
export default {
  components: {
    ADDCLIENT,
    TABLE
  },
  data() {
    return {
      dataClient:[],  
      key: "",
    };
  },
  mounted() {
    this.getSingleData();
  },
  methods: {
    getSingleData() {
      this.key = this.$route.params.tag;

      let query = this.$fireStore.collection("clients").doc(this.key);
      let that = this;
      query.get()
        .then(function(doc) {
          if (doc.exists) {
            that.dataClient.push(doc.data());
            // console.log("Document data:", doc.data());
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        })
        .catch(function(error) {
          console.log("Error getting document:", error);
        });
    },
    deleteClient(){
      console.log(`Deleted client ${this.key}`)
    },
    editClient(){
      console.log(`Edited client ${this.key}`)
    }
  }
};
</script>
