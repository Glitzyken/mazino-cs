<template>
  <div class="px-2 m-auto max-w-xl">
    <AlertMessage v-if="messageSent" message="Message sent!" />
    <h1
      class="block text-center font-bold text-4xl mb-5 leading-tight"
      for="input2"
    >
      Send Zino a
      <span class="text-5xl text-mazSec font-extrabold">
        [message]
      </span>
    </h1>

    <h2 class="text-2xl text-center mx-5 mb-5 md:mx-10 leading-8">
      Got a question or proposal, or just want to say hello? Go ahead.
    </h2>

    <form class="mt-10">
      <label class="text-mazSec text-xl font-bold" for="name" v-if="name"
        >Nice to meet you {{ name }} 👋
      </label>
      <label class="text-mazSec text-xl font-bold" for="name" v-else
        >Your Name
      </label>
      <p v-if="isEmptyName" class="text-mazSec">
        My name is Zino. What's your name? 🙃
      </p>
      <input
        id="name"
        class="w-full border-none px-4 py-2 rounded outline-none mb-4 bg-mazGray2"
        type="text"
        placeholder="Victoria Eloho"
        @input="$v.name.$touch()"
        v-model="name"
      />

      <label class="text-mazSec text-xl font-bold" for="email"
        >Email Address</label
      >
      <p v-if="isInvalidEmail" class="text-mazSec">
        An invalid email won't work. 😉
      </p>
      <p v-if="isEmptyEmail" class="text-mazSec">
        An empty email can't be useful, you know. 😊
      </p>
      <input
        id="email"
        class="w-full border-none px-4 py-2 rounded outline-none mb-4 bg-mazGray2"
        type="email"
        placeholder="you@example.com"
        @input="$v.email.$touch()"
        v-model="email"
      />

      <label class="text-mazSec text-xl font-bold" for="message"
        >Your Message</label
      >
      <p v-if="isEmptyMessage" class="text-mazSec">
        I really want to hear something from you. 😀
      </p>
      <textarea
        id="message"
        class="w-full border-none px-4 py-2 rounded outline-none resize-none bg-mazGray2 whitespace-pre"
        type="text"
        placeholder="Hi, I think we need a colaboration. How soon can you discuss this?"
        rows="4"
        @input="$v.message.$touch()"
        v-model="message"
      ></textarea>

      <button
        class="bg-mazSec hover:bg-mazPrime3 hover:text-mazGray1 transition-all duration-300 focus:outline-none text-mazPrime1 font-bold py-2 px-5 capitalize mt-4 w-full"
        type="submit"
        @click.prevent="sendMessage"
      >
        shoot
        <span class="ml-2"><font-awesome-icon icon="arrow-circle-right"/></span>
      </button>
    </form>
  </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators';

export default {
  data() {
    return {
      name: '',
      email: '',
      message: '',
      isEmptyName: false,
      isEmptyEmail: false,
      isEmptyMessage: false,
      isInvalidEmail: false,
      messageSent: false
    };
  },
  validations: {
    name: {
      required
    },
    email: {
      required,
      email
    },
    message: {
      required
    }
  },
  methods: {
    sendMessage() {
      if (!this.$v.name.required) {
        return (this.isEmptyName = true);
      }
      if (!this.$v.email.required) {
        return (this.isEmptyEmail = true);
      }
      if (!this.$v.email.email) {
        return (this.isInvalidEmail = true);
      }
      if (!this.$v.message.required) {
        return (this.isEmptyMessage = true);
      }

      const data = {
        name: this.name,
        email: this.email,
        message: this.message
      };

      console.log(data);

      this.name = '';
      this.email = '';
      this.message = '';
      this.isEmptyName = false;
      this.isEmptyEmail = false;
      this.isEmptyMessage = false;
      this.isInvalidEmail = false;

      this.messageSent = true;
      setTimeout(() => {
        this.messageSent = false;
      }, 3000);
    }
  }
};
</script>
