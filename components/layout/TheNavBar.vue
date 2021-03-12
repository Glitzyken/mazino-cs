<template>
  <div class="flex justify-between items-center mb-10">
    <div class="bg-mazPrime2 w-3/5 md:w-2/6 pr-5">
      <nuxt-link to="/"
        ><img src="../../assets/images/logo.png" alt="logo"
      /></nuxt-link>
    </div>

    <div class="hidden md:flex justify-end md:w-3/4">
      <ul class="text-mazPrime3 uppercase tracking-widest font-bold flex">
        <nuxt-link to="/gallery">
          <li class="mr-10">gallery</li>
        </nuxt-link>
        <nuxt-link to="/about">
          <li class="mr-10">about</li>
        </nuxt-link>
        <li>
          <nuxt-link to="/find">
            find
          </nuxt-link>
        </li>
      </ul>
    </div>

    <!--Menu visible on mobile devices-->
    <Menu class="md:hidden text-3xl" />
  </div>
</template>
