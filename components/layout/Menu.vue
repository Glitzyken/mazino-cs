<template>
  <v-dropdown placement="right">
    <!-- Button content -->
    <template v-slot:button>
      <font-awesome-icon class="text-mazPrime3" icon="bars" />
    </template>

    <!-- Opened dropdown content -->
    <template v-slot:content>
      <div
        class="flex w-full justify-between items-center px-2 py-1 my-1 text-mazPrime3 uppercase tracking-widest font-bold hover:bg-mazSec hover:text-mazPrime1"
      >
        <nuxt-link to="/booking">
          book
        </nuxt-link>
      </div>
      <div
        class="flex w-full justify-between items-center px-2 py-1 my-1 text-mazPrime3 uppercase tracking-widest font-bold hover:bg-mazSec hover:text-mazPrime1"
      >
        <nuxt-link to="/about">
          about
        </nuxt-link>
      </div>
      <div
        class="flex w-full justify-between items-center px-2 py-1 my-1 text-mazPrime3 uppercase tracking-widest font-bold hover:bg-mazSec hover:text-mazPrime1"
      >
        <nuxt-link to="/find">
          find us
        </nuxt-link>
      </div>
    </template>
  </v-dropdown>
</template>
