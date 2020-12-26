<template>
  <div class="grid grid-cols-1 md:grid-cols-3 md:gap-4">
    <div class="col-span-2">
      <img
        src="../../assets/images/studio-1.jpg"
        alt="Mazino Makeovers Studio"
      />
    </div>
    <div class="bg-mazPrime2 px-5 py-10 text-center mt-5 md:mt-0">
      <p class="mb-5">
        We are located at
      </p>
      <div class="bg-mazPrime1 shadow-lg">
        <p class="p-5">
          14, Erinfolami Street, Mebamu, Off Badagary Road, Ojo, Lagos.
        </p>
      </div>
      <a :href="origin"
        ><button
          class="mt-20 bg-mazSec hover:bg-mazPrime3 hover:text-mazGray1 transition-all duration-300 focus:outline-none text-mazPrime1 font-bold py-2 px-5"
        >
          Get direction with a map
          <font-awesome-icon icon="map-marked-alt" /></button
      ></a>
    </div>
    <!--
            6.487235998869074, 3.1700832681201323
            -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      latitude: '',
      longitude: '',
      origin:
        'https://www.google.com/maps/dir/?api=1&destination=Pinnock+Beach+Estate%2+Lekki%2+EDM+Centre%2+Poise+Building%2+5A+Pinnock+Beach+Estate%2+Jakande%2+Lekki%2+Lekki+Penninsula+II%2+Lekki'
    };
  },
  methods: {
    getUserCoordinates() {}
  }
};
</script>
