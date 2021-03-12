<template>
  <div class="pb-10">
    <div class="flex mb-5">
      <img
        class="w-full"
        src="../../assets/images/team-makeup.jpg"
        alt="Mazino team"
      />
    </div>
    <h1 class="text-center font-bold text-4xl mb-5 leading-tight">
      We are <span class="text-6xl text-mazSec font-extrabold"> [classy] </span>
    </h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 md:pr-10 md:pl-10">
      <div class="md:col-span-2">
        <p class="text-lg">
          <span class="text-mazSec"
            >Mazino Makeovers is not just a regular beauty saloon.</span
          >
          At Mazino Makeovers, we thrive to be the best and give you the very
          best makeover with a pleasant experience you would hardly forget.
          <span class="text-mazSec"
            >You are more than a guest. You are our model.</span
          >
        </p>
      </div>
      <div class="flex justify-center">
        <img class="rounded-lg w-3/4" src="../../assets/images/zino.jpg" />
      </div>
      <div class="text-lg">
        <h2 class="text-mazSec font-bold mb-2">Meet the CEO</h2>
        <p class="mb-4">
          Hi, I am Zino Eriyamremu, CEO Mazino Makeovers. I have been in the
          beauty business for almost a decade. As a makeup artist, I get to mix
          my two passions: transforming people and fine art.
        </p>
        <p class="mb-4">
          I founded Mazino Makeovers in the year 2018, and since then has earned
          a remarkable reputation for being one of the best beauty saloons in
          Lagos state, Nigeria.
        </p>
        <p class="mb-10">
          Usually, a regular makeup artist would verbally try to convince you of
          a 100% guarantee service value. That, I consider a cliche. For me, I
          let my works speak for themselves.
        </p>
        <div class="flex justify-center md:justify-start">
          <nuxt-link :to="{ path: '/', hash: '#booking' }">
            <Button
              displayTitle="book a makeover appointment"
              iconName="address-book"
            />
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
