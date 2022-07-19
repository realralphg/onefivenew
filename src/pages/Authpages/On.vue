<template>
  <div class="wrapper onboard">
    <div class="on_hold container">
      <q-stepper
        v-model="step"
        ref="stepper"
        alternative-labels
        color="primary"
        animated
        header-nav
      >
        <q-step :name="1" icon="settings" :done="step > 1">
          <div class="right">
            <div class="bio">
              <div class="text-h5 text-weight-bold">
                Hello!, Good to have you here
                <span class="text-primary"> Zarror Mike</span>
              </div>
              <small class="text-secondary"> What’s your profession? </small>
              <div class="hold">
                <div class="inputs">
                  <div class="holdd">
                    <form
                      enctype="multipart/form-data"
                      id="form"
                      @submit.prevent="saveUser"
                    >
                      <div class="q-my-xl">
                        <div class="input-wrap">
                          <label class="text-dark" for=""
                            >Enter your profession here</label
                          >
                          <br />

                          <div class="input">
                            <input
                              type="text"
                              name="firstname"
                              v-model="form.firstname"
                              placeholder="Example: Product Designer"
                            />
                          </div>
                          <div class="error" v-if="errors.firstname">
                            {{ errors.firstname[0] }}
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>

                  <div class="det"></div>
                </div>
              </div>
            </div>
          </div>
        </q-step>

        <q-step
          :name="2"
          caption="Optional"
          prefix="2"
          icon="create_new_folder"
          :done="step > 2"
        >
          <div class="text-h5">
            Great!
            <span class="text-weight-bold text-primary">Zarror Mike</span>
          </div>
          <p class="text-black text-weight-medium">Which best describes you?</p>
          <div class="hold">
            <div class="inputs">
              <div class="holdd">
                <form
                  enctype="multipart/form-data"
                  id="form"
                  @submit.prevent="saveUser"
                >
                  <div class="q-my-xl">
                    <div class="input-wrap">
                      <div class="check_wraps">
                        <input
                          type="radio"
                          name="firstname"
                          v-model="form.firstname"
                        />

                        <span> Just Statrting </span>
                      </div>
                      <div class="error" v-if="errors.firstname">
                        {{ errors.firstname[0] }}
                      </div>
                    </div>
                    <div class="input-wrap">
                      <div class="check_wraps">
                        <input
                          type="radio"
                          name="firstname"
                          v-model="form.firstname"
                        />

                        <span> Intermediate </span>
                      </div>
                      <div class="error" v-if="errors.firstname">
                        {{ errors.firstname[0] }}
                      </div>
                    </div>
                    <div class="input-wrap">
                      <div class="check_wraps">
                        <input
                          type="radio"
                          name="firstname"
                          v-model="form.firstname"
                        />

                        <span> Professional </span>
                      </div>
                      <div class="error" v-if="errors.firstname">
                        {{ errors.firstname[0] }}
                      </div>
                    </div>
                  </div>
                </form>
              </div>

              <div class="det"></div>
            </div>
          </div>
        </q-step>

        <q-step prefix="3" :name="3" icon="add_comment">
          <div class="text-h5">
            Awesome!
            <span class="text-weight-bold text-primary">Zarror Mike</span>
          </div>
          <p class="text-black text-weight-medium">
            How many years of experience?
          </p>
          <div class="hold">
            <div class="inputs">
              <div class="holdd">
                <form
                  enctype="multipart/form-data"
                  id="form"
                  @submit.prevent="saveUser"
                >
                  <div class="q-my-xl">
                    <div class="input-wrap">
                      <div class="check_wraps">
                        <input
                          type="radio"
                          name="firstname"
                          v-model="form.firstname"
                        />

                        <span> 0 - 5 years</span>
                      </div>
                      <div class="error" v-if="errors.firstname">
                        {{ errors.firstname[0] }}
                      </div>
                    </div>
                    <div class="input-wrap">
                      <div class="check_wraps">
                        <input
                          type="radio"
                          name="firstname"
                          v-model="form.firstname"
                        />

                        <span> 5 - 10 years </span>
                      </div>
                      <div class="error" v-if="errors.firstname">
                        {{ errors.firstname[0] }}
                      </div>
                    </div>
                    <div class="input-wrap">
                      <div class="check_wraps">
                        <input
                          type="radio"
                          name="firstname"
                          v-model="form.firstname"
                        />

                        <span> 10 - 20 years </span>
                      </div>
                      <div class="error" v-if="errors.firstname">
                        {{ errors.firstname[0] }}
                      </div>
                    </div>
                  </div>
                </form>
              </div>

              <div class="det"></div>
            </div>
          </div>
        </q-step>

        <template v-slot:navigation>
          <q-stepper-navigation class="step">
            <q-btn
              v-if="step > 1"
              flat
              color="primary"
              @click="$refs.stepper.previous()"
              label="Back"
              class="q-ml-sm"
            />
            <q-btn
              @click="$refs.stepper.next()"
              class="continue_btn"
              :label="step === 3 ? 'Finish' : 'Next'"
            />
          </q-stepper-navigation>
        </template>
      </q-stepper>
    </div>
    <Footer />
  </div>
</template>

<script>
import { ref } from "vue";
import Footer from "../../components/Footer.vue";
export default {
  setup() {
    return {
      step: ref(1),
      val: ref(true),
    };
  },
  components: {
    Footer,
  },
  data() {
    return {
      file: "",
      certificateFile: "",
      idFile: "",
      menuFile: "",
      dragging: false,
      form: {
        firstname: "",
        lastname: "",
        gender: "",
        address: {
          home: "",
          shipping: "",
        },
        phone: "",
        email: "",
      },
      errors: [],
    };
  },
  computed: {
    extension() {
      return this.file ? this.file.name.split(".").pop() : "";
    },
  },

  methods: {
    onChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) {
        this.dragging = false;
        return;
      }

      document.querySelectorAll(".file_up").forEach((input, index) => {
        console.log(input.files[0], input.classList);
        if (input.files[0]) {
          this.createFile(input.files[0], input.classList);
        }
      });
      // this.createFile(files[0]);
    },
    createFile(file, name) {
      console.log(name);
      if (!file.type.match("text.*")) {
        alert("please select txt file");
        this.dragging = false;
        return;
      }

      if (file.size > 5000000) {
        alert("please check file size no over 5 MB.");
        this.dragging = false;
        return;
      }

      if (name.contains("file")) {
        this.file = file;
        console.log("this.file");
      } else if (name.contains("certificateFile")) {
        this.certificateFile = file;
        console.log("certificateFile");
      } else if (name.contains("idFile")) {
        this.idFile = file;
        console.log("idFile");
      } else if (name.contains("menuFile")) {
        this.menuFile = file;
        console.log("menuFile");
      }

      this.dragging = false;
    },
    removeFile() {},
  },
};
</script>

<style scoped>
p {
  margin-bottom: 0;
}

.wrapper {
  padding: 3rem 0 0;
  height: 100%;
  background: #fff;
}

.on_hold {
  width: 80%;
  margin: 0 auto;
  padding: 3rem 1rem;
  height: 100%;
}

.error {
  font-size: 0.9em;
  color: #ff0000;
}

.input-wrap,
select {
  width: 100%;
  margin: 0.65rem 0;
  position: relative;
}
.input-wrap .input {
  border: solid 1px #ccc;

  padding: 0.75rem;
  margin: 0.4rem 0;
  height: 55px;
  margin-bottom: 2px;

  box-sizing: border-box;
  border-radius: 5px;
  display: flex;
  position: relative;
  align-items: center;
}

.input-wrap .input input,
select {
  border: none;
  background: transparent;
  color: #959292;
  width: 100%;
  cursor: pointer;
  position: relative;
}
.input-wrap .input input:focus,
select:focus {
  outline: none;
}
.input-wrap .input .input:hover {
  border: 1px solid #2b945b;
  transition: all 0.5s ease-in-out;
}

.log {
  display: grid;
  /* grid-template-columns: repeat(2, 1fr); */
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
  /* margin:0 1rem ; */
}
.log .wrapp i {
  font-size: 2rem;
}
.log .wrapp img {
  width: 20px;
  height: 20px;
}

.continue_btn {
  color: #fff;
  background: white;
  width: 150px;
  padding: 0.75rem;
  border-radius: 50px;
  float: right;
  display: flex;
  justify-self: flex-end;
  justify-content: flex-end;
  background: #1abc9c;
  border-radius: 100px;
}

.check_wraps {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.1rem;
  background: #ffffff;
  border: 1px solid rgba(151, 151, 151, 0.3);
  border-radius: 10px;
  padding: 1rem;
}

.check_wraps span {
  color: #666666;
}

/* dropzone */

.dropZone {
  width: 100%;
  height: 200px;
  position: relative;
  border: 2px dashed #eee;
}

.dropZone:hover {
  border: 2px solid #2e94c4;
}

.dropZone:hover .dropZone-title {
  color: #1975a0;
}

.dropZone-info {
  color: #a8a8a8;
  position: absolute;
  top: 50%;
  width: 100%;
  transform: translate(0, -50%);
  text-align: center;
  display: flex;
  flex-direction: column;
}

.dropZone-title {
  /* color: #787878; */
  color: #000;
  font-weight: 700;
  font-size: 1.5rem;
}

.dropZone input {
  position: absolute;
  cursor: pointer;
  top: 0px;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
}

.dropZone-upload-limit-info {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
}

.dropZone-over {
  background: #5c5c5c;
  opacity: 0.8;
}

.dropZone-uploaded {
  width: 100%;
  height: 200px;
  position: relative;
  border: 2px dashed #eee;
}

.dropZone-uploaded-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #a8a8a8;
  position: absolute;
  top: 50%;
  width: 100%;
  transform: translate(0, -50%);
  text-align: center;
}

.removeFile {
  width: 200px;
}
@media (max-width: 600px) {
  .log .wrapp p {
    font-size: 11px;
  }
  .btn {
    width: 80%;
  }

  .two {
    gap: 0rem;
  }

  .three {
    gap: 0rem;
  }

  .input-wrap .input {
    font-size: 13.5px;
  }
  .on_hold {
    width: 100%;
    margin: 0 auto;
    padding: 3rem 1rem;
    height: 100%;
  }
}

.q-tab {
  width: 50% !important;
}
@media (max-width: 900px) {
  .two,
  .three {
    grid-template-columns: 1fr;
  }
  .two {
    gap: 0rem;
  }

  .three {
    gap: 0rem;
  }

  .value {
    position: absolute;
    left: 15%;
  }

  ::placeholder,
  .value {
    font-size: 14px;
  }
}
@media (max-width: 400px) {
  .input-wrap .input input:placeholder-shown,
  select {
    font-size: 14px;
  }
  .log {
    width: 100%;
  }

  .resp {
    padding: 1rem;
    border-radius: 8px;
    font-size: 12px;
  }
  .on_hold {
    width: 100%;
    margin: 0 auto;
    padding: 3rem 1rem;
    height: 100%;
  }
}
</style>
