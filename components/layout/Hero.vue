<template>
  <div class="grid grid-cols-1 gap-12 md:gap-0 md:grid-cols-2 mt-10 md:mt-20">
    <div>
      <img src="../../assets/images/hero-woman.png" alt="hero woman" />
    </div>
    <div class="flex justify-center items-center">
      <div class="text-center">
        <div class="grid grid-cols-1">
          <VueSlickCarousel v-bind="settings">
            <quote
              v-for="quote in quotesWithAuthors"
              :key="quote.author"
              class="text-2xl md:text-4xl text-mazSec font-bold leading-none"
            >
              "{{ quote.quote }}"
              <span
                class="block text-lg md:text-2xl text-mazGray1 leading-loose"
              >
                – {{ quote.author }}
              </span>
            </quote>
          </VueSlickCarousel>
        </div>
        <div>
          <nuxt-link to="/about">
            <button
              class="bg-mazPrime1 hover:bg-mazPrime2 hover:text-mazGray1 transition-all duration-300 focus:outline-none text-mazSec font-bold py-2 px-5 capitalize"
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

<script>
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';

import {
  quote1,
  quote2,
  quote3,
  quote4,
  quote5,
  quote6,
  quote7,
  quote8,
  quote9,
  quote10,
  quote11,
  quote12,
  quote13,
  quote14,
  quote15,
  quote16,
  quote17,
  quote18,
  quote19,
  quote20,
  quote21
} from '../../docs/quotes';

export default {
  components: { VueSlickCarousel },
  data() {
    return {
      settings: {
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnFocus: true
      },
      quotesWithAuthors: [
        quote1,
        quote2,
        quote3,
        quote4,
        quote5,
        quote6,
        quote7,
        quote8,
        quote9,
        quote10,
        quote11,
        quote12,
        quote13,
        quote14,
        quote15,
        quote16,
        quote17,
        quote18,
        quote19,
        quote20,
        quote21
      ]
    };
  }
};
</script>
