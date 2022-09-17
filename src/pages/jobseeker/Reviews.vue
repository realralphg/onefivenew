<template>
  <div class="box-par">
    <div class="wrapper containerr q-pt-xl">
      <form @submit.prevent="submit" class="form-box">
        <div class="q-my-lg">
          <q-btn class="back"><i class="ri-arrow-left-s-line"></i> Back </q-btn>
        </div>
        <div class="imgg">
          <div
            :class="!image ? 'drop display-inline align-center' : 'no_border'"
            @dragover.prevent
            @drop="onDrop"
          >
            <div class="helper"></div>
            <q-icon
              color="grey"
              v-if="!image"
              size="40px"
              name="backup"
            ></q-icon>

            <label v-if="!image" class="display-inline">
              Drag your profile image here or <br />

              <input type="file" name="image" @change="onChange" />
            </label>

            <div
              class="hidden display-inline align-center"
              v-else
              v-bind:class="{ image: true }"
            >
              <img :src="image" alt="" class="img" />

              <button class="btnn" @click="removeFile">Remove</button>
            </div>
          </div>

          <div class="name">
            <span class="row items-center text-weight-bold">
              Zarror Michael
              <span class="text-weight-light"
                ><i class="ri-map-pin-fill text-primary q-mr-sm"></i>Kaduna,
                Nigeria.</span
              ></span
            >
            <div class="text-weight-medium q-mb-md text-primary">
              Photographer
            </div>

            <!-- <label v-if="!image" for="" class="display-inline">
              <span class="browse"
                ><i class="q-mr-sm ri-image-edit-fill"></i>Edit Profile</span
              >
              <input type="file" name="image" @change="onChange" />
            </label> -->
            <label v-if="!image" class="display-inline">
              <span class="browse"
                ><i class="q-mr-sm ri-image-edit-fill"></i>Edit Profile</span
              >

              <input type="file" name="image" @change="onChange" />
            </label>
          </div>

          <!-- <div class="edit_btn">
            <q-btn class="btn">
              <i class="ri-edit-fill"></i>
              Edit Profile
            </q-btn>
          </div> -->
        </div>
        <div class="form-box">
          <div class="header_det">Personal Details</div>
          <div class="input-wrap row items-center justify-between">
            <label class="form-det" for="">Full Name</label> <br />

            <div class="">
              <span class="text-primary"> +003902099039</span>
            </div>
          </div>

          <div class="input-wrap row items-center justify-between">
            <label class="form-det" for="">Email</label> <br />

            <div class="">
              <span class="text-primary"> +ademola@gmail.com</span>
            </div>
          </div>

          <div class="input-wrap row items-center justify-between">
            <label class="form-det" for="">Address</label> <br />

            <div class="">
              <span class="text-positive"> 31, Gwari Avenue, Barnawa</span>
            </div>
          </div>

          <div class="">
            <div class="header_det">Basic Information</div>
            <div class="input-wrap row items-center justify-between">
              <label class="form-det" for="">Gender</label>

              <div class="">
                <span class="text-positive text-weight-bold"> Male</span>
              </div>
            </div>
          </div>

          <div class="input-wrap row items-center justify-between">
            <label class="form-det" for="">Birthday </label>
            <br />

            <div class="">
              <span class="text-positive"> 31st Jan</span>
            </div>
          </div>

          <div class="header_det">Experience</div>

          <div class="input-wrap row items-center justify-between">
            <label class="form-det" for="">Mide Studios </label>

            <div class="">
              <span class="text-positive text-weight-bold"> 2019 - 2020</span>
            </div>
          </div>
          <div class="header_det">Education</div>

          <div class="input-wrap row items-center justify-between">
            <label class="form-det" for="">
              <strong
                >Federal University of Technology , Akure. Nigeria
              </strong>
              <br />
              <small class="text-positive">Bachelor of Technology</small>
            </label>

            <div class="row items-center justify-between">
              <span class="text-positive text-weight-bold"> 2019 - 2020</span>
            </div>
          </div>
          <div class="header_det">Skills</div>

          <div class="skills">
            <span class="skill">Graphic Design</span>
            <span class="skill">Retouching</span>
            <span class="skill">Lightroom</span>
            <span class="skill">Photography</span>
            <span class="skill">Adobe Photoshop</span>
          </div>
        </div>
      </form>

      <div class="right">
        <div class="img_one">
          <img src="/images/img1.png" alt="" />
        </div>
        <div class="img_two">
          <img src="/images/img2.png" alt="" />
        </div>
        <div class="img_three">
          <img src="/images/img3.png" alt="" />
        </div>
        <div class="img_four">
          <img src="/images/img4.png" alt="" />
        </div>
        <div class="img_five">
          <img src="/images/img5.png" alt="" />
        </div>
      </div>
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
  display: grid;
  grid-template-columns: 4fr 2fr;
  height: 100%;
  padding-bottom: 120px;
  gap: 1rem;
}
input::placeholder {
  font-size: 13px;
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

.right {
  display: grid;
  grid-template-areas:
    "big big"
    "small biggersmall"
    "small2 biggersmall"
    "big2 big2";
  gap: 1rem;
  grid-auto-flow: dense;
}

.right img {
  object-fit: cover;
  height: 100%;
}

.right .img_one {
  grid-area: big2;
}
.right .img_two {
  grid-area: small;
}
.right .img_three {
  grid-area: biggersmall;
}
.right .img_four {
  grid-area: small2;
}
.right .img_five {
  grid-area: big;
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
  background-color: #fff;
  padding: 14px 24px 14px 24px;

  font-size: 18px !important;
  background: #f2594b;

  color: #fff;

  width: 100%;
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
/* drag and drop */

.btn {
  border: 0;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-weight: bold;
  padding: 15px 35px;
  position: relative;
}

.browse {
  padding: 0.55rem;
  border-radius: 9px;
  background: #1abc9c;
  color: #fff;
  cursor: pointer;
}
.btnn {
  background-color: #f2594b;
  color: white;
  border-radius: 9px;
  width: 140px;
  border: none;
  padding: 0.55rem;
}

.btn:hover {
  background-color: #722040;
}

input[type="file"] {
  position: absolute;
  opacity: 0;
  z-index: -1;
}

.align-center {
  text-align: center;
}

.hidden {
  display: none !important;
}

.hidden.image {
  display: flex !important;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
}

.display-inline {
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;
  line-height: 1;
  font-size: 0.9rem;
}

.img {
  border: 1px solid #f6f6f6;
  display: inline-block;
  object-fit: cover;
  width: 150px;
  height: 150px;
  border-radius: 50%;
}

.drop {
  border-radius: 2px;
  height: 100%;
  max-height: 200px;
  max-width: 200px;
  height: 150px;
  width: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 4.55224px solid #1abc9c;
  border-radius: 50%;
}
.no_border {
  border: none !important;
}
.imgg {
  width: 80%;
  margin: 1rem auto 5rem;
  display: flex;
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
}
</style>
