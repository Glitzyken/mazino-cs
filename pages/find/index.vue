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
          28, Adelegan Street, behind A.P filling station, Ibeshe Titun Ikorodu,
          Lagos.
        </p>
      </div>
      <a :href="origin">
        <Button displayTitle="get directions" iconName="directions" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      origin:
        'https://www.google.com/maps/dir/?api=1&destination=28+Adelegan+St,+Ikorodu'
    };
  }
};
</script>
