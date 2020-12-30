<template>
  <div class="grid grid-cols-1 md:grid-cols-2">
    <div>
      <img src="../../assets/images/hero-woman.png" alt="hero woman" />
    </div>
    <div class="flex justify-center items-center">
      <div class="text-center mt-5 md:mt-0">
        <quote class="text-2xl md:text-4xl text-mazSec font-bold leading-none">
          "{{ quotesWithAuthors[0].quote }}"
          <span class="block text-lg md:text-2xl text-mazGray1 leading-loose">
            – {{ quotesWithAuthors[0].author }}
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

<script>
import quotes from '../../docs/quotes';

export default {
  data() {
    return {
      quotesWithAuthors: quotes
    };
  },
  mounted() {
    window.setInterval(() => {
      this.getQuoteAndAuthor();
    }, 5000);
  },
  methods: {
    getQuoteAndAuthor() {
      const first = this.quotesWithAuthors.shift();
      this.quotesWithAuthors = this.quotesWithAuthors.concat(first);
    }
  }
};
</script>
