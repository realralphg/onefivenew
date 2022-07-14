<template>
  <div class="box-par">
    <div class="wrapper container q-pt-xl">
      <form @submit.prevent="submit" class="form">
        <!-- <div class="q-my-lg">
          <q-btn class="back"><i class="ri-arrow-left-s-line"></i> Back </q-btn>
        </div> -->
        <div class="wel">Receipt Generation</div>

        <div class="receipt_wrap">
          <div class="row justify-between align-center">
            <div class="receipt_hold">
              <q-avatar size="80px">
                <img src="/images/ava.png" alt="" />
              </q-avatar>
              <p class="q-my-md">Joseph Maduagbe</p>
              <small class="text-weight-bold text-primary">Plumber</small>
            </div>

            <div class="right">
              <div class="top">
                <p class="text-weight-bold">Company Name</p>
                <span class="text-primary"><strong>ONE</strong>FIVE</span>
              </div>
              <div class="down q-mt-lg">
                <p class="text-weight-bold">
                  Job Provider:
                  <span class="text-weight-medium">Joy Fedric</span>
                </p>
                <span class="text-primary">Plumbing</span>
              </div>
            </div>
          </div>
        </div>
        <div class="form-box">
          <div class="form-box">
            <div class="input-wrap">
              <label class="form-det text-primary text-weight-bold" for=""
                >Job Seeker Address</label
              >
              <br />

              <div class="input">
                <input name="name" type="text" placeholder="Ademola" />
              </div>
            </div>

            <div class="two">
              <div class="input-wrap">
                <label class="form-det text-primary text-weight-bold" for=""
                  >Amount</label
                >
                <br />

                <div class="input">
                  <input type="email" name="email" placeholder="N30,000" />
                </div>
              </div>

              <div class="input-wrap">
                <label class="form-det text-primary text-weight-bold" for=""
                  >Category</label
                >
                <br />

                <div class="input">
                  <input type="text" name="" id="te" placeholder="Plumbing" />
                </div>
              </div>
            </div>

            <div class="two">
              <div class="input-wrap">
                <label class="form-det text-primary text-weight-bold" for=""
                  >Start Date
                </label>
                <br />

                <div class="input">
                  <input type="text" placeholder="19/05/2021" />
                </div>
              </div>
              <div class="input-wrap">
                <label class="form-det text-primary text-weight-bold" for=""
                  >End Date</label
                >

                <div class="input">
                  <input type="text" placeholder="19/05/2021" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="pay text-center">
          <q-btn class="btn"> Generate Receipt </q-btn>
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
      form: {
        email: this.userData("email"),
        gender: this.userData("gender"),

        name: this.userData("name"),

        phone: this.userData("phone"),
      },
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
  margin-bottom: 0px;
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
.form {
  background: #fff;
}
.wel {
  background: #1abc9c;
  color: #fff;
  padding: 1rem;
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
  border: 1px solid #888888;
  border-radius: 3px;
  background: #eeeeee;
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
  background: #1abc9c;
  border-radius: 100px;
  color: #fff;
  width: 40%;
  margin: 2rem auto;
}

.receipt_wrap {
  width: 90%;
  padding: 2rem;
  margin: 0 auto;
}

@media (max-width: 900px) {
  .three {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 500px) {
  .btn {
    width: 90%;
  }
}

.flexx {
  display: flex;
  justify-content: space-between;
}
.form-box {
  background-color: #fff;
  padding: 20px;
  padding-left: 40px;
  padding-right: 40px;
}
.wel {
  border-top-left-radius: 17px;
  border-top-right-radius: 17px;
}
.header-text {
  font-style: normal;
  font-weight: 700;
  font-size: 53px;
  line-height: 122%;
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
