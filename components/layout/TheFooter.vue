<template>
  <footer
    class="bg-gradient-to-br from-mazPrime2 to-mazPrime1 md:max-w-6xl md:m-auto py-10 md:p-12 text-mazGray1 md:shadow-2xl flex flex-col md:flex-row justify-between items-center"
  >
    <nuxt-link to="/"
      ><img
        class="w-20"
        src="../../assets/images/logo-footer.png"
        alt="footer logo"
    /></nuxt-link>
    <div class="text-center mt-3 md:mt-0">
      <ul class="text-mazPrime3 uppercase tracking-widest font-bold md:flex">
        <nuxt-link to="/about">
          <li>about</li>
        </nuxt-link>
        <nuxt-link to="/find">
          <li class="md:ml-10">contact</li>
        </nuxt-link>
        <nuxt-link to="/privacy-policy">
          <li class="md:ml-10">privacy policy</li>
        </nuxt-link>
      </ul>
      <div class="mt-3">
        <p class="text-center md:text-right">
          &copy;
          {{ year }}
          All rights reserved | Mazino Makeovers
        </p>
        <p>FOLLOW US ON INSTAGRAM</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  mounted() {
    this.getYear();
  },
  data() {
    return {
      year: null
    };
  },
  methods: {
    getYear() {
      this.year = new Date().getFullYear();
    }
  }
};
</script>
