<template>
  <q-page class="bg-white">
    <div class="wrapper">
      <div class="gridd">
        <div class="hold">
          <!-- <div class="btn_hold">
            <q-btn class="back_btn">
              <i class="fa-solid fa-angle-left"> </i> <span>Login</span></q-btn
            >
          </div> -->
          <div class="opening_text">
            <span class="text-dark">
              Confirm
              <span class="text-primary bold">O.T.P</span>
            </span>
          </div>

          <div class="opening_text">
            <span class="text-dark">
              Enter the Four digit code we sent to your phone or via email to
              confirm your account.
            </span>
          </div>

          <div class="form_data">
            <form>
              <div class="">
                <!-- <label class="text-primary text-weight-bold" for="password"
                  >Password</label
                > -->
                <div class="input otp">
                  <v-otp-input
                    ref="otpInput"
                    input-classes=" otp-input"
                    separator="-"
                    :num-inputs="4"
                    :should-auto-focus="true"
                    :is-input-num="true"
                    :conditionalClass="['one', 'two', 'three', 'four']"
                    :placeholder="['*', '*', '*', '*']"
                    @on-change="handleOnChange"
                    @on-complete="handleOnComplete"
                  />
                </div>

                <div class="forgot flex justify-center">
                  <p class="text-dark">
                    I didn’t receive the code
                    <span class="text-weight-medium text-primary">Resend</span>
                  </p>
                </div>
              </div>

              <div class="login_btn">
                <q-btn class="login flex justify-center">Proceed</q-btn>

                <p class="no_acc">
                  Go back to
                  <q-btn class="text-primary text-weight-bold">Sign up</q-btn>
                </p>
              </div>
            </form>
          </div>
        </div>
        <div class="img">
          <img src="/images/onefive.png" alt="" />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      val: ref(true),
    };
  },
  data() {
    return {
      token: "1234",
    };
  },

  methods: {
    handleOnComplete(value) {
      console.log("OTP completed: ", value);
    },
    handleOnChange(value) {
      console.log("OTP changed: ", value);
    },
    handleClearInput() {
      this.$refs.otpInput.clearInput();
    },
  },
};
</script>

<style lang="scss" scoped>
label {
  color: #1abc9c;
}
p {
  margin-bottom: 0;
}
.wrapper {
  height: 100%;
  position: relative;
  background: white;
  width: 100%;
}

.gridd {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  gap: 2rem;
  width: 90%;
  margin-left: auto;
}

.btn_hold i {
  color: white;
  background: #01ddb2;
}

.btn_hold span {
  color: #01ddb2;
}

.back_btn {
  transition: all 5s ease-in-out;
}

.bold {
  font-weight: 800;
}

.back_btn i {
  padding: 0.25rem;
  margin-right: 0.65rem;
  width: 20px;
}

.back_btn:hover {
  background: #1abc9c;
  color: white;
  transition: all 5s ease-in-out;
}

.back_btn:hover .btn_hold span {
  color: white;
}

.opening_text {
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 127.5%;
  max-width: 500px;
  margin-bottom: 3rem;
}
.opening_text:nth-child(1) {
  font-style: normal;
  font-weight: 500;
  font-size: 44px;
  line-height: 127.5%;
  max-width: 500px;
  margin-bottom: 3rem;
}

.input_wrap label {
  margin-top: 0.75rem;
}

.input_wrap .input {
  background: #f2f2f2;
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  margin: 0.55rem 0;
  width: 100%;
}

.input_wrap input {
  background: transparent;
  border: none;
}
.input_wrap input:focus {
  outline: none;
}

.fa-eye-slash {
  display: flex;
  justify-content: flex-end;
  float: right;
  width: 100%;
}

.remember {
  margin-top: 1rem;
}
.remember p {
  font-size: 12px;
}

.login {
  width: 60%;
  color: white;
  text-align: center;
  margin: 3rem auto;
  background: #2f4858;
  border-radius: 100px;
  padding: 0.75rem;
}

.no_acc {
  text-align: center;
  margin-top: 0.75rem;
}

@media (max-width: 700px) {
  ::placeholder {
    font-size: 13px;
  }

  .no_acc {
    font-size: 13px;
  }
  .forgot p {
    font-size: 13px;
  }

  .hold {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
  }

  .login {
    width: 100%;
  }
}
</style>
