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
            <span class="text-primary">
              <span class="bold">ONE</span>FIVE.COM
            </span>
          </div>

          <div class="opening_text">
            <span class="text-primary"> Hey! </span> Welcome back to
            <span class="text-primary">
              <span class="bold">ONE</span>FIVE.COM
            </span>
          </div>

          <div class="form_data">
            <form>
              <div class="input_wrap">
                <label class="text-primary text-weight-bold" for="email"
                  >Email</label
                >
                <div class="input">
                  <i class="ri-mail-line q-mr-md text-primary"></i>
                  <input
                    name="email"
                    placeholder="Enter your Fullname here..."
                    type="text"
                  />
                </div>
              </div>
              <div class="input_wrap">
                <label class="text-primary text-weight-bold" for="password"
                  >Password</label
                >
                <div class="input">
                  <i class="ri-lock-line q-mr-md text-primary"></i>
                  <input
                    name="password"
                    placeholder="Enter your password"
                    type="password"
                  />

                  <i class="fa-solid fa-eye-slash"></i>
                </div>

                <div class="forgot flex justify-end">
                  <p class="text-primary">Forgot password</p>
                </div>
              </div>

              <div class="remember">
                <div class="row items-center">
                  <q-checkbox v-model="val" />
                  <p>keep me logged in</p>
                </div>
              </div>

              <div class="login_btn">
                <q-btn class="login flex justify-center bg-primary"
                  >Login</q-btn
                >

                <p class="no_acc">
                  Don’t have an account?
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
};
</script>

<style scoped>
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

/* .hold {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
} */
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
  max-width: 350px;
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
  width: 100%;
  color: white;
  text-align: center;
  margin-top: 3rem;
  background: #1abc9c;
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
}
</style>
