<template>
  <div class="grid grid-cols-1 md:grid-cols-2">
    <div>
      <img src="../../assets/images/hero-woman.png" alt="hero woman" />
    </div>
    <div class="flex justify-center items-center">
      <div class="text-center">
        <h1 class="text-6xl text-mazSec font-bold">
          Signature <span class="block text-2xl"> by MAZINO MAKEOVERS </span>
        </h1>
        <div>
          <nuxt-link to="/about">
            <button
              class="mt-20 bg-mazPrime1 hover:bg-mazPrime2 hover:text-mazGray1 transition-all duration-300 focus:outline-none text-mazSec font-bold py-2 px-5 capitalize"
            >
              why mazino?
            </button>
          </nuxt-link>
          <nuxt-link to="/booking">
            <Button displayTitle="book now" />
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
