<template>
  <div class="flex justify-between items-center mb-10">
    <nuxt-link to="/"
      ><img class="w-3/5 md:w-2/5" src="../../assets/images/logo.png" alt="logo"
    /></nuxt-link>

    <div class="hidden md:flex justify-end md:w-3/4">
      <ul class="text-mazPrime3 uppercase tracking-widest font-bold flex">
        <nuxt-link to="/booking">
          <li class="mr-10">book</li>
        </nuxt-link>
        <nuxt-link to="/about">
          <li class="mr-10">about</li>
        </nuxt-link>
        <li>
          <nuxt-link to="/find">
            find us
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>
