<template>
  <button
    class="bg-mazSec hover:bg-mazPrime3 hover:text-mazGray1 transition-all duration-300 focus:outline-none text-mazPrime1 font-bold py-2 px-5 capitalize"
  >
    {{ displayTitle }}
    <font-awesome-icon :icon="iconName" />
  </button>
</template>

<script>
export default {
  props: {
    displayTitle: String,
    iconName: String
  }
};
</script>
