<template>
  <div>
    <div class="flex justify-center mb-5">
      <img src="../../assets/images/team-makeup.jpg" alt="Mazino team" />
    </div>
    <h1 class="text-center font-bold text-4xl mb-5">
      We are <span class="text-6xl text-mazSec font-extrabold"> [classy] </span>
    </h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <p class="text-lg">
        <span class="text-mazSec"
          >Mazino Makeovers is not just a regular beauty saloon.</span
        >
        At Mazino Makeovers, we thrive to be the best and give you the very best
        makeover with a pleasant experience you would hardly forget.
        <span class="text-mazSec"
          >You are more than a guest. You are our model.</span
        >
      </p>
      <div class="text-center">
        <nuxt-link to="/booking">
          <Button
            displayTitle="Book a makeover appointment"
            iconName="map-marked-alt"
          />
        </nuxt-link>
      </div>
      <div>
        [Zino's photo]
      </div>
      <div>
        <h2>CEO</h2>
        <p>Meet Zino Eriyamremu, CEO Mazino Makeovers.</p>
      </div>
    </div>
  </div>
</template>
