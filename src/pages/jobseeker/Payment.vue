<template>
  <div class="box-par">
    <div class="wrapper container q-pt-xl">
      <form @submit.prevent="submit" class="form-box">
        <div class="q-my-lg">
          <q-btn class="back"><i class="ri-arrow-left-s-line"></i> Back </q-btn>
        </div>

        <div class="form-box">
          <div class="input-wrap">
            <label class="form-det text-primary text-weight-bold" for=""
              >Amount</label
            >
            <br />

            <div class="input">
              <i class="ri-user-fill q-mr-md icon-enroll"></i>

              <input disabled name="name" type="text" placeholder="Ademola" />
            </div>
          </div>

          <div class="input-wrap">
            <label class="form-det text-primary text-weight-bold" for=""
              >Card Name</label
            >
            <br />

            <div class="input">
              <i class="ri-mail-line q-mr-md icon-enroll"></i>

              <input
                disabled
                type="email"
                name="email"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div class="input-wrap">
            <label class="form-det text-primary text-weight-bold" for=""
              >Card Number</label
            >
            <br />

            <div class="input">
              <i class="ri-shield-user-fill q-mr-md icon-enroll"></i>

              <input disabled type="text" name="" id="te" />
            </div>
          </div>

          <div class="two">
            <div class="input-wrap">
              <label class="form-det text-primary text-weight-bold" for=""
                >Expiry Date
              </label>
              <br />

              <div class="input">
                <i class="ri-time-fill q-mr-md icon-enroll"></i>

                <input type="text" name="timezone" placeholder="" />
              </div>
            </div>
            <div class="input-wrap">
              <label class="form-det text-primary text-weight-bold" for=""
                >CVV</label
              >

              <div class="input">
                <i class="ri-time-fill q-mr-md icon-enroll"></i>

                <input type="text" name="timezone" placeholder="" />
              </div>
            </div>
          </div>
        </div>

        <div class="pay text-center">
          <q-btn class="btn"> Pay Now </q-btn>
        </div>

        <div class="pay_with">
          <q-btn class="ussd"> Pay with USSD </q-btn>
          <q-btn class="ussd"> Pay with Bank Transfer </q-btn>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const image = ref(null);
    const imageUrl = ref("");
    const handleUpload = () => {
      console.log("handleUpload is triggered");
      if (image.value) {
        imageUrl.value = URL.createObjectURL(image.value);
      }
    };
    return {
      image,
      imageUrl,
      handleUpload,
    };
  },
  data() {
    return {
      inputErr: "",
    };
  },
  methods: {
    userData(key) {
      return JSON.parse(localStorage.getItem("userDetails"))[key];
    },
    onDrop: function (e) {
      e.stopPropagation();
      e.preventDefault();
      var files = e.dataTransfer.files;
      console.log(files);
      this.createFile(files[0]);
    },
    onChange(e) {
      var files = e.target.files;
      this.createFile(files[0]);
    },
    createFile(file) {
      if (!file.type.match("image.*")) {
        alert("Select an image");
        return;
      }
      var img = new Image();
      var reader = new FileReader();
      var vm = this;
      reader.onload = function (e) {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeFile() {
      this.image = "";
    },
  },
};
</script>

<style scoped>
p {
  margin-bottom: 4px;
}

.login-text {
  margin-top: -10px;
}
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding-bottom: 120px;
}
input::placeholder {
  font-size: 15px;
  opacity: 0.5;
}
.heeder {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.heeder i {
  font-size: 35px;
}

.heeder .icon {
  cursor: pointer;
}

.error {
  color: red;
}

.heeder .logo {
  object-fit: contain;
  width: 40px;
  height: 40px;
}
.heeder .logo img {
  object-fit: contain;
}
.two {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  align-items: center;
}
.form-det {
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 34px;
  margin-top: 15px;
  align-items: center;
  letter-spacing: 0.3px;
  color: #000;
}

.icon-enroll {
  font-size: 21px;
  padding-left: 10px;
  color: #746e6e;
}
.input-wrap {
  margin: 1rem 0 2rem;
}
.input-wrap,
select {
  width: 100%;
  margin-bottom: 2px;
}

.error {
  font-size: 0.9em;
  color: #ff0000;
}

.input-wrap .input {
  padding: 0.75rem;

  background: rgba(236, 236, 236, 0.67);
  border: 1px solid rgba(229, 229, 229, 0.2);
  box-sizing: border-box;
  border-radius: 5px;
  display: flex;
  align-items: center;
  height: 50px;
}

.input-wrap .input input,
select {
  border: none;
  padding: 0.65rem;
  background: transparent;
  color: #959292;
  width: 100%;
  cursor: pointer;
}
.input-wrap .input input:focus,
select:focus {
  outline: none;
}
.input-wrap .input .input:hover {
  border: 1px solid #2b945b;
  transition: all 0.5s ease-in-out;
}

.btn {
  border: none;
  font-size: 18px !important;
  padding: 15.9022px 31.8045px;
  background: #2f4858;
  border-radius: 100px;
  color: #fff;
  width: 60%;
  margin: 2rem auto;
}

.log {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));

  gap: 2rem;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 2.5rem auto;
}

.log .wrapp {
  display: flex;
  align-items: center;
  background: #ffffff;
  width: 100%;
  box-shadow: 18.587px 18.587px 37.1739px rgba(211, 209, 216, 0.25);
  border-radius: 28.5px;

  padding: 0 1rem;
}

.log .wrapp i {
  font-size: 2rem;
}
.log .wrapp img {
  width: 20px;
  height: 20px;
}

@media (max-width: 900px) {
  .three {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 500px) {
  .log .wrapp p {
    font-size: 11px;
  }

  .btn {
    width: 90%;
  }
}

.ri-facebook-box-fill {
  color: #4267b2;
}

.ri-google-fill {
  color: #fbbc05;
}

.log .wrap p {
  margin: 0 1rem;
}

.flexx {
  display: flex;
  justify-content: space-between;
}
.form-box {
  background-color: #fff;
  border-radius: 17px;
  padding: 20px;
  padding-left: 40px;
  padding-right: 40px;
}
.header-text {
  font-style: normal;
  font-weight: 700;
  font-size: 53px;
  line-height: 122%;
  /* identical to box height, or 65px */
  text-align: center;
  letter-spacing: 0.3px;

  color: #121928;
}
.q-tab {
  width: 50% !important;
}
.box-par {
  background-color: #ebf5fb;
}

@media (max-width: 500px) {
  .input-wrap .input input:placeholder-shown,
  select {
    font-size: 14px;
  }
  .log {
    width: 100%;
  }
  .two {
    grid-template-columns: 1fr;
  }
  .resp {
    padding: 1rem;
    border-radius: 8px;
    font-size: 12px;
  }
  .btn {
    border: none;
    font-size: 18px !important;
    padding: 15.9022px 31.8045px;
    background: #2f4858;
    border-radius: 100px;
    color: #fff;
    width: 100%;
    margin: 0 auto;
  }
}
</style>
