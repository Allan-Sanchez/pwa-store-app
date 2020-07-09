<template>
    <div
      class="inline-block min-w-full shadow overflow-hidden mt-5 text-font-card">
      <table class="min-w-3/4 leading-normal mx-auto  mb-5">
        <thead>
          <tr>
            <th
              class="px-5 py-3 border-b-2 border-gray-200 bg-white text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                width="2em"
                height="2em"
                style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 1024 1024"
              >
                <path
                  d="M880 305H624V192c0-17.7-14.3-32-32-32H184v-40c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v784c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V640h248v113c0 17.7 14.3 32 32 32h416c17.7 0 32-14.3 32-32V337c0-17.7-14.3-32-32-32z"
                  fill="#A3AED3"
                />
              </svg>
            </th>
            <th
              class="px-5 py-3 border-b-2 border-gray-200 bg-white text-xs font-semibold text-gray-600 uppercase tracking-wider text-center"
            >
              Fecha
            </th>
            <th
              class="px-5 py-3 border-b-2 border-gray-200 bg-white text-xs font-semibold text-gray-600 uppercase tracking-wider text-center"
            >
              Cantidad
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in dataHistory" :key="index">
            <td v-if="item.state == 0"
              class="px-5 py-2 border-b border-gray-200 text-sm bg-blue-100">
              <div class="green-circle flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  focusable="false"
                  width="0.75em"
                  height="1em"
                  style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 12 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 11L6 5l-6 6h12z"
                    fill="#1DA849"
                  />
                </svg>
              </div>
            </td>

            <td v-else class="px-5 py-2 border-b border-gray-200 bg-white text-sm">
              <div class="red-circle flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  focusable="false"
                  width="0.75em"
                  height="1em"
                  style="-ms-transform: rotate(180deg); -webkit-transform: rotate(180deg); transform: rotate(180deg);"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 12 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 11L6 5l-6 6h12z"
                    fill="#FF1C1C"
                  />
                </svg>
              </div>
            </td>

            <td
              class="px-5 py-2 border-b border-gray-200  text-sm bg-blue-100">
              <p class="text-gray-900 whitespace-no-wrap text-center">
                {{ item.date }}
              </p>
            </td>
            <td
              class="px-5 py-2 border-b border-gray-200  text-sm bg-blue-100">
             
              <p class="text-gray-900 whitespace-no-wrap text-right">
                Q {{ item.quantity }}
              </p>
            </td>
          </tr>          
        </tbody>
      </table>


      <div
        class="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          "
      >
        <span class="text-xs xs:text-sm text-gray-900">
          Monstrando 1 al 4 de 50 Registros
        </span>
        <div class="inline-flex mt-2 xs:mt-0">
          <button 
            class="text-sm bg-gray-200  hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l"
          >
            Antes
          </button>
          <button
            class="text-sm bg-gray-200  hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r"
          >
            Despues
          </button>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props : {
    keyclient: {
        type: String,
        required: true
    }
},
  data() {
    return {
      dataHistory:[]
    }
  },
    mounted: function () {
        let vm = this;      

        vm.$nextTick(function () {      
           console.log(vm.keyclient);
           vm.getData();

        });
      },
  methods: {
    getData(){
        this.dataHistory = [];
        this.$fireStore.collection("clients").doc(this.keyclient)
                       .collection("history").get()
                       .then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        // console.log(`${doc.id} => ${doc.data()}`);
                        this.dataHistory.push(doc.data());

                    });
        });
    }
  },
}
</script>