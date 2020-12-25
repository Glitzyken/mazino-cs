<template>
  <div>
    [image] We are located at [address]
    <a :href="origin"><button>Get direction with a map</button></a>
    <!--Pinnock+Beach+Estate%2+Lekki%2+EDM+Centre%2+Poise+Building%2+5A+Pinnock+Beach+Estate%2+Jakande%2+Lekki%2+Lekki+Penninsula+II%2+Lekki 
            
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
        'https://www.google.com/maps/dir/?api=1&origin=6.487235998869074,3.1700832681201323&destination=Pinnock+Beach+Estate%2+Lekki%2+EDM+Centre%2+Poise+Building%2+5A+Pinnock+Beach+Estate%2+Jakande%2+Lekki%2+Lekki+Penninsula+II%2+Lekki'
    };
  },
  methods: {
    getUserCoordinates() {}
  }
};
</script>
