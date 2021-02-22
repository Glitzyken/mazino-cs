<template>
  <div
    class="flex justify-center items-center h-24 w-screen md:w-1/4 bg-mazSec fixed z-50 text-mazPrime1 md:text-xl px-5 text-center font-bold alert"
  >
    {{ message }}
    <span class="ml-2"><font-awesome-icon :icon="iconName"/></span>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String
    },
    iconName: {
      type: String
    }
  }
};
</script>

<style scoped>
.alert {
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}
</style>
