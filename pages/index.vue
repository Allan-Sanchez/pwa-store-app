<template>
 <section>
    <div class="w-full h-64 flex justify-center items-center">
      <div class="flex justify-center flex-col w-full mx-12">
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

  </section>
</template>

<script>
import CARDLIST from '../components/CardList'

export default {
  components: {
    CARDLIST
  }
}
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
  font-family: 'Piedra', sans-serif;
  font-size:64px;
  color: var(--color-text);
}
.text-font {
  font-family: 'Roboto';
  color: var(--color-text);
}
.input-search {
  @apply border  py-2 px-4 block w-full appearance-none leading-normal;
  font-family: 'Roboto';
  border-radius:2rem;
  border-color: #e4e9f8;
  background: #f4f6fd;
}
.input-search:focus {
  @apply outline-none shadow-outline;
}
.input-search::placeholder {
  color: var(--color-text);
}
.placeholder-input::placeholder{
    color: var(--color-text);

}
</style>
