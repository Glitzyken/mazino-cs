<template>
  <div class="flex justify-between items-center">
    <nuxt-link to="/"
      ><img class="w-10 md:w-16" src="../../assets/images/logo.png" alt="logo"
    /></nuxt-link>

    <div class="hidden md:inline-block">
      <ul class="text-mazPrime3 uppercase tracking-widest font-bold flex">
        <li class="mr-10">about</li>
        <li>
          <nuxt-link to="/find">
            find us
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>
