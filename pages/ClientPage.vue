<template>
  <section>
    <div class="flex items-center flex-col card-image py-4 ">
      <!-- <div> -->
      <img src="../assets/img/boy.svg" class="w-24" alt="avatar image" />
      <!-- </div> -->
      <div class="text-center text-font-card text-lg mt-3">
        <p>Allan Edrey Sanchez Rixtun</p>
        <p class="mt-2">09/06/2020</p>
      </div>

      <div class="flex w-11/12 justify-around absolute icon-content">
        <button
          class="btn-border-icon  bg-pink-500 text-white w-12 h-12   hover:bg-pink-400 border border-solid "
        >
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
        <button
          class="btn-border-icon border border-solid modal-close bg-blue-500 w-12 h-12  hover:bg-blue-400 flex justify-center items-center"
        >
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
      <div class=" w-48 mt-5 p-3 border p-1 bg-blue-100 rounded-2">
        <p>Total Deuda <span class="font-bold">5,000.00</span></p>
      </div>
    </div>

    <!-- table -->
    <div class="inline-block min-w-full shadow overflow-hidden mt-5 text-font-card" >
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
              class="px-5 py-3 border-b-2 border-gray-200 bg-white text-left text-xs font-semibold text-gray-600 uppercase tracking-wider text-center"
            >
              Fecha
            </th>
            <th
              class="px-5 py-3 border-b-2 border-gray-200 bg-white text-left text-xs font-semibold text-gray-600 uppercase tracking-wider text-center"
            >
              Cantidad
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td
              class="px-5 py-2 border-b border-gray-200 bg-white text-sm bg-blue-100"
            >
              <!-- <p class="text-gray-900 whitespace-no-wrap">Admin</p> -->
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
            <td
              class="px-5 py-2 border-b border-gray-200 bg-white text-sm bg-blue-100"
            >
              <p class="text-gray-900 whitespace-no-wrap">
                Jan 21, 2020
              </p>
            </td>
            <td
              class="px-5 py-2 border-b border-gray-200 bg-white text-sm bg-blue-100"
            >
              <!-- <span
                                        class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                        <span aria-hidden
                                            class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                        <span class="relative">Q 200.00</span>
                                    </span> -->
              <p class="text-gray-900 whitespace-no-wrap">
                Q 200.00
              </p>
            </td>
          </tr>

          <tr>
            <td class="px-5 py-2 border-b border-gray-200 bg-white text-sm">
              <!-- <p class="text-gray-900 whitespace-no-wrap">Admin</p> -->
              <div class="red-circle flex justify-center items-center">
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
                    fill="#FF1C1C"
                  />
                </svg>
              </div>
            </td>
            <td class="px-5 py-2 border-b border-gray-200 bg-white text-sm">
              <p class="text-gray-900 whitespace-no-wrap">
                Jan 21, 2020
              </p>
            </td>
            <td class="px-5 py-2 border-b border-gray-200 bg-white text-sm">
              <!-- <span
                                        class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                        <span aria-hidden
                                            class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                        <span class="relative">Q 200.00</span>
                                    </span> -->
              <p class="text-gray-900 whitespace-no-wrap">
                Q 200.00
              </p>
            </td>
          </tr>

          <tr>
            <td
              class="px-5 py-2 border-b border-gray-200 bg-white text-sm bg-blue-100"
            >
              <!-- <p class="text-gray-900 whitespace-no-wrap">Admin</p> -->
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
            <td
              class="px-5 py-2 border-b border-gray-200 bg-white text-sm bg-blue-100"
            >
              <p class="text-gray-900 whitespace-no-wrap">
                Jan 21, 2020
              </p>
            </td>
            <td
              class="px-5 py-2 border-b border-gray-200 bg-white text-sm bg-blue-100"
            >
              <!-- <span
                                        class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                        <span aria-hidden
                                            class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                        <span class="relative">Q 200.00</span>
                                    </span> -->
              <p class="text-gray-900 whitespace-no-wrap">
                Q 200.00
              </p>
            </td>
          </tr>

          <tr>
            <td class="px-5 py-2 border-b border-gray-200 bg-white text-sm">
              <!-- <p class="text-gray-900 whitespace-no-wrap">Admin</p> -->
              <div class="red-circle flex justify-center items-center">
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
                    fill="#FF1C1C"
                  />
                </svg>
              </div>
            </td>
            <td class="px-5 py-2 border-b border-gray-200 bg-white text-sm">
              <p class="text-gray-900 whitespace-no-wrap">
                Jan 21, 2020
              </p>
            </td>
            <td class="px-5 py-2 border-b border-gray-200 bg-white text-sm">
              <!-- <span
                                        class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                        <span aria-hidden
                                            class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                        <span class="relative">Q 200.00</span>
                                    </span> -->
              <p class="text-gray-900 whitespace-no-wrap">
                Q 200.00
              </p>
            </td>
          </tr>

          <tr>
            <td
              class="px-5 py-2 border-b border-gray-200 bg-white text-sm bg-blue-100"
            >
              <!-- <p class="text-gray-900 whitespace-no-wrap">Admin</p> -->
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
            <td
              class="px-5 py-2 border-b border-gray-200 bg-white text-sm bg-blue-100"
            >
              <p class="text-gray-900 whitespace-no-wrap">
                Jan 21, 2020
              </p>
            </td>
            <td
              class="px-5 py-2 border-b border-gray-200 bg-white text-sm bg-blue-100"
            >
              <!-- <span
                                        class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                        <span aria-hidden
                                            class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                        <span class="relative">Q 200.00</span>
                                    </span> -->
              <p class="text-gray-900 whitespace-no-wrap">
                Q 200.00
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

    

    <!-- btn -->
     <div class="flex justify-center pt-2 mt-4 text-font-card mb-5">
            <button
              class="btn-icon-card px-4 bg-green-200  p-2 rounded-lg hover:bg-green-100  hover:text-gray-700 mr-2 flex items-center"
            >
              Deuda 
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="2em" height="2em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M5 11h14v2H5z" fill="#1DA849"/></svg>
            </button>
            <button
              class="btn-icon-card modal-close px-4 bg-red-200 p-2 rounded-lg hover:text-gray-700 hover:bg-red-100 flex items-center"
            >
              Deuda
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="2em" height="2em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><defs/><path d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z" fill="#FF1C1C"/><path d="M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z" fill="#FF1C1C"/></svg>
            </button>
          </div>
  </section>
</template>

<style>
.text-font-card {
  font-family: 'Roboto';
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
.btn-icon-card{
  border-radius: 20px;
}
</style>
