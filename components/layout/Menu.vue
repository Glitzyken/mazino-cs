<template>
  <v-dropdown placement="right">
    <!-- Button content -->
    <template v-slot:button>
      <font-awesome-icon class="text-mazPrime3" icon="bars" />
    </template>

    <!-- Opened dropdown content -->
    <template v-slot:content>
      <nuxt-link to="/booking">
        <div
          class="flex w-full justify-between items-center px-2 py-1 my-1 text-mazPrime3 uppercase tracking-widest font-bold hover:bg-mazSec hover:text-mazPrime1"
        >
          booking
        </div>
      </nuxt-link>

      <nuxt-link to="/about">
        <div
          class="flex w-full justify-between items-center px-2 py-1 my-1 text-mazPrime3 uppercase tracking-widest font-bold hover:bg-mazSec hover:text-mazPrime1"
        >
          about
        </div>
      </nuxt-link>

      <nuxt-link to="/find">
        <div
          class="flex w-full justify-between items-center px-2 py-1 my-1 text-mazPrime3 uppercase tracking-widest font-bold hover:bg-mazSec hover:text-mazPrime1"
        >
          find us
        </div>
      </nuxt-link>
    </template>
  </v-dropdown>
</template>
