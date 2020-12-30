<template>
  <div class="grid grid-cols-1 md:grid-cols-2">
    <div>
      <img src="../../assets/images/hero-woman.png" alt="hero woman" />
    </div>
    <div class="flex justify-center items-center">
      <div class="text-center mt-5 md:mt-0">
        <quote class="text-2xl md:text-4xl text-mazSec font-bold leading-none">
          "A smile is the best makeup any girl can wear"
          <span class="block text-lg md:text-2xl text-mazGray1 leading-loose">
            – Marilyn Monroe
          </span>
        </quote>
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
