<template>
  <main>
    <section class="mb-20 flex justify-center content-center w-full">
      <Hero />
    </section>
    <section class="grid grid-cols-1 md:grid-cols-3 md:gap-8">
      <div class="md:col-span-2">
        <BookingForm />
      </div>
      <div class="bg-mazPrime2 mt-10 md:mt-32">
        <div
          class="bg-mazGray1 text-mazPrime1 text-xl font-bold py-2 px-5 capitalize"
        >
          price list <font-awesome-icon icon="tag" />
        </div>
      </div>
    </section>
  </main>
</template>
