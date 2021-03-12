<template>
  <div>
    <SplashScreen v-if="showHideSpinner" />
    <!-- <PreLoader /> -->

    <div class="bg-gradient-to-br from-mazGray1 to-mazGray2 min-h-screen">
      <div
        class="bg-gradient-to-br from-mazPrime2 to-mazPrime1 md:max-w-6xl md:m-auto p-2 md:p-8 text-mazGray1 md:shadow-2xl"
      >
        <div class="md:flex mb-32">
          <div class="md:flex-1">
            <TheNavBar />
            <Nuxt />
          </div>
        </div>
      </div>
      <TheFooter />
    </div>
  </div>
</template>

<script>
export default {
  beforeCreate() {
    this.showHideSpinner = true;
  },
  mounted() {
    this.showHideSpinner = false;
  },
  data() {
    return {
      showHideSpinner: true
    };
  }
};
</script>

<style>
html {
  scroll-behavior: smooth;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}

.page-enter {
  opacity: 0;
  transform: translateX(25px);
}
.page-leave-to {
  opacity: 0;
  transform: translateX(-25px);
}
</style>
