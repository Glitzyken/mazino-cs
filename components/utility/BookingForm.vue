<template>
  <div class="px-2">
    <AlertMessage
      v-if="messageSent"
      message="Message sent!"
      iconName="check-square"
    />
    <AlertMessage
      v-if="messageNotSent"
      message="Something went wrong"
      iconName="bug"
    />
    <h1
      class="block text-center font-bold text-4xl mb-5 leading-tight capitalize"
    >
      Book an appointment
    </h1>

    <h2 class="text-2xl text-center mx-5 mb-5 md:mx-10 leading-8">
      We are open Monday to Friday <br />
      8:00AM - 6:00PM
    </h2>

    <form class="mt-10">
      <label class="text-mazSec text-xl font-bold" for="name" v-if="name"
        >Nice to meet you {{ name }} 👋
      </label>
      <label class="text-mazSec text-xl font-bold" for="name" v-else
        >Your Name
      </label>
      <p v-if="isEmptyName" class="text-mazSec">
        We need to know who you are. 🙃
      </p>
      <input
        id="name"
        class="w-full border-none px-4 py-2 rounded outline-none mb-4 bg-mazPrime2"
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
        We need your email to know it is coming from you. 😊
      </p>
      <input
        id="email"
        class="w-full border-none px-4 py-2 rounded outline-none mb-4 bg-mazPrime2"
        type="email"
        placeholder="you@example.com"
        @input="$v.email.$touch()"
        v-model="email"
      />

      <label class="text-mazSec text-xl font-bold" for="number"
        >Phone Number</label
      >
      <p v-if="isEmptyNumber" class="text-mazSec">
        Your phone number is safe with us. ☑
      </p>
      <input
        id="number"
        class="w-full border-none px-4 py-2 rounded outline-none mb-4 bg-mazPrime2"
        type="number"
        placeholder="08030291829"
        @input="$v.number.$touch()"
        v-model="number"
      />

      <label class="text-mazSec text-xl font-bold" for="date">Date</label>
      <input
        id="date"
        class="w-full border-none px-4 py-2 rounded outline-none mb-4 bg-mazPrime2 datepicker-input"
        type="date"
      />

      <label class="text-mazSec text-xl font-bold" for="time">Time</label>
      <input
        id="time"
        class="w-full border-none px-4 py-2 rounded outline-none mb-4 bg-mazPrime2"
        type="time"
      />

      <button
        class="bg-mazSec hover:bg-mazPrime3 hover:text-mazGray1 transition-all duration-300 focus:outline-none text-mazPrime1 font-bold py-2 px-5 capitalize mt-4 w-full"
        type="submit"
        @click.prevent="sendBooking"
      >
        book
        <span class="ml-2"><font-awesome-icon icon="arrow-circle-right"/></span>
      </button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import { required, email } from 'vuelidate/lib/validators';

export default {
  data() {
    return {
      name: '',
      email: '',
      number: '',
      isEmptyName: false,
      isEmptyEmail: false,
      isEmptyNumber: false,
      isInvalidEmail: false,
      messageSent: false,
      messageNotSent: false
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
    number: {
      required
    }
  },
  methods: {
    sendBooking() {
      if (!this.$v.name.required) {
        return (this.isEmptyName = true);
      }
      if (!this.$v.email.required) {
        return (this.isEmptyEmail = true);
      }
      if (!this.$v.email.email) {
        return (this.isInvalidEmail = true);
      }
      if (!this.$v.number.required) {
        return (this.isEmptyNumber = true);
      }

      const data = {
        name: this.name,
        email: this.email,
        number: this.number
      };

      this.name = '';
      this.email = '';
      this.number = '';
      this.isEmptyName = false;
      this.isEmptyEmail = false;
      this.isEmptyNumber = false;
      this.isInvalidEmail = false;

      console.log(data);

      //   axios
      //     .post('https://va-services.herokuapp.com/mazino/message', data)
      //     .then(res => {
      //       this.messageSent = true;
      //       setTimeout(() => {
      //         this.messageSent = false;
      //       }, 3000);
      //     })
      //     .catch(err => {
      //       this.messageNotSent = true;
      //       setTimeout(() => {
      //         this.messageNotSent = false;
      //       }, 3000);
      //     });
    }
  }
};
</script>

<style scoped></style>
