<template>
  <div class="px-2 m-auto max-w-xl">
    <h1
      class="block text-center font-bold text-4xl mb-5 leading-tight"
      for="input2"
    >
      Send us a
      <span class="text-5xl text-mazSec font-extrabold">
        [message]
      </span>
    </h1>

    <h2 class="text-2xl text-center mx-5 mb-5 md:mx-10 leading-8">
      Got a question or proposal, or just want to say hello? Go ahead.
    </h2>

    <form>
      <label class="text-mazSec text-xl font-bold" for="name">Your Name</label>
      <input
        id="name"
        class="w-full border-none px-4 py-2 rounded outline-none mb-4 bg-mazGray2"
        type="text"
        placeholder="Victoria Eloho"
        required
      />

      <label class="text-mazSec text-xl font-bold" for="email"
        >Email Address</label
      >
      <input
        id="email"
        class="w-full border-none px-4 py-2 rounded outline-none mb-4 bg-mazGray2"
        type="email"
        placeholder="you@example.com"
        required
      />

      <label class="text-mazSec text-xl font-bold" for="name"
        >Your Message</label
      >
      <textarea
        id="name"
        class="w-full border-none px-4 py-2 rounded outline-none resize-none bg-mazGray2"
        type="text"
        placeholder="Hi, I think we need a colaboration. How soon can you hop on to discuss this?"
        rows="4"
        required
      ></textarea>

      <Button class="mt-4 w-full" displayTitle="shoot" iconName="directions" />
    </form>
  </div>
</template>
