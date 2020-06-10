<template>
  <div class="grid  sm:grid-cols-1 md:grid-cols-2 mt-2">
    <div   @click="showClient()"  class="w-ful sm:h-16 md:h-40 flex justify-center items-center cursor-pointer">
      <img src="../assets/img/boy.svg" class=" w-16" alt="Avatar template" />
      <div class="mx-4 min-w-3/5 mt-3">
        <p class="text-base">Allan Edrey Sanchez Rixtun</p>
        <p class="">07/06/2020</p>
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

    <div @click="showClient()" class="w-ful sm:h-16 md:h-40 flex justify-center items-center mt-2 cursor-pointer">
      <img src="../assets/img/girl.svg" class="w-16" alt="Avatar template" />
      <div class="mx-4 min-w-3/5 mt-3">
        <p class="text-base">Allan Edrey Sanchez Rixtun</p>
        <p class="">07/06/2020</p>
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

    <MODALADD ></MODALADD>

  </div>
</template>

<script>
import MODALADD from './ModalAdd'
export default {
  components:{
    MODALADD
  },
  methods: {
    showClient(){
      console.log('show client')
      this.$router.push({
          name: 'ClientPage',
          params: {
            // tag: this.searchQuery
          }
        })
    }
  },
}
</script>