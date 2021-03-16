<template>
  <div class="px-2">
    <AlertMessage
      v-if="messageSent"
      message="Booked successfully!"
      iconName="check-square"
    />
    <AlertMessage
      v-if="messageNotSent"
      message="Something went wrong."
      iconName="bug"
    />
    <h1
      class="block text-center font-bold text-4xl mb-5 leading-tight capitalize"
    >
      Book an appointment
    </h1>

    <h2 class="text-2xl text-center mx-5 mb-5 md:mx-10 leading-8">
      We are open Monday to Friday <br />
      <span class="text-mazSec"> 8:00AM - 6:00PM </span>
    </h2>

    <form class="mt-10">
      <label class="text-mazSec text-xl font-bold" for="name" v-if="name"
        >Hello {{ name }} 👋
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
      <p v-if="isEmptyDate" class="text-mazSec">
        Please, select a date. 😊
      </p>
      <input
        id="date"
        class="w-full border-none px-4 py-2 rounded outline-none mb-4 bg-mazPrime2 datepicker-input"
        type="date"
        @input="$v.date.$touch()"
        v-model="date"
      />

      <label class="text-mazSec text-xl font-bold" for="time">Time</label>
      <p v-if="isEmptyTime" class="text-mazSec">
        Please, select a time. 😊
      </p>
      <input
        id="time"
        class="w-full border-none px-4 py-2 rounded outline-none mb-4 bg-mazPrime2"
        type="time"
        @input="$v.time.$touch()"
        v-model="time"
      />

      <button
        class="bg-mazSec hover:bg-mazPrime3 hover:text-mazGray1 transition-all duration-300 focus:outline-none text-mazPrime1 font-bold py-2 px-5 capitalize mt-4 w-full"
        type="submit"
        @click.prevent="sendBooking"
        v-if="isSending"
      >
        <Rolling />
      </button>

      <button
        class="bg-mazSec hover:bg-mazPrime3 hover:text-mazGray1 transition-all duration-300 focus:outline-none text-mazPrime1 font-bold py-2 px-5 capitalize mt-4 w-full"
        type="submit"
        @click.prevent="sendBooking"
        v-else
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
      date: '',
      time: '',
      isEmptyName: false,
      isEmptyEmail: false,
      isEmptyNumber: false,
      isEmptyDate: false,
      isEmptyTime: false,
      isInvalidEmail: false,
      messageSent: false,
      messageNotSent: false,
      isSending: false
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
    },
    date: {
      required
    },
    time: {
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
      if (!this.$v.date.required) {
        return (this.isEmptyDate = true);
      }
      if (!this.$v.time.required) {
        return (this.isEmptyTime = true);
      }

      const data = {
        name: this.name,
        email: this.email,
        number: this.number,
        date: this.$moment(this.date).format('dddd, MMMM Do YYYY'),
        time: this.$moment(this.time, 'HH:mm').format('hh:mm A')
      };

      this.name = '';
      this.email = '';
      this.number = '';
      this.isEmptyName = false;
      this.isEmptyEmail = false;
      this.isEmptyNumber = false;
      this.isEmptyDate = false;
      this.isEmptyTime = false;
      this.isInvalidEmail = false;

      this.isSending = true;

      axios
        .post('https://va-services.herokuapp.com/mazino/book', data)
        .then(res => {
          this.messageSent = true;
          this.isSending = false;
          setTimeout(() => {
            this.messageSent = false;
          }, 3000);
        })
        .catch(err => {
          this.messageNotSent = true;
          this.isSending = false;
          setTimeout(() => {
            this.messageNotSent = false;
          }, 3000);
        });
    }
  }
};
</script>
