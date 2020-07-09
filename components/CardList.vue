<template>
  <div class="grid  sm:grid-cols-1 md:grid-cols-2 mt-2">
    <div  v-for="(client, index) in dataClientList"
        :key="index">
      <div
      
        @click="showClient(client.id)"
        class="w-ful sm:h-16 md:h-40 flex justify-center items-center cursor-pointer mb-3"
      >
        <img
          v-if="client.gender == 'hombre'"
          src="../assets/img/boy.svg"
          class=" w-16"
          alt="Avatar template"
        />
        <img
          v-else
          src="../assets/img/girl.svg"
          class="w-16"
          alt="Avatar template"
        />

        <div class="mx-4 min-w-3/5 mt-3">
          <p class="text-base">{{ client.name }}</p>
          <p class="">{{ client.date }}</p>
          <div class="timeago" datetime="2016-06-30 09:20:00"></div>
        </div>
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
            d="M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6z"
            fill="#2c3550"
          />
        </svg>
      </div>
    </div>
    <!-- <MODALADD ></MODALADD> -->
  </div>
</template>

<script>
import { format } from "timeago.js";
// import MODALADD from './ModalAdd'
export default {
  // components:{
  //   MODALADD
  // },
  data() {
    return {
      dataClientList: [],
      // searchQuery:''
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.$fireStore
        .collection("clients")
        .orderBy("date", "desc")
         .limit(3)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            let client = {
              name: doc.data().name,
              date: format(doc.data().date),
              gender: doc.data().gender,
              id: doc.id
            };

            this.dataClientList.push(client);
          });
        });
    },
    showClient(id) {
      // console.log("show client");
      // console.log(id)
      // let test = 123;
      this.$router.push({ path: `/ClientPage/${id}` })
      // this.$router.push({
      //   name: 'ClientPage/:id?',
      //   params: {
      //     tag: id
      //   }
      // });
    }
  }
};
</script>
