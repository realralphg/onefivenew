<template>
  <div class="wrapper">
    <div class="hold">
      <div class="containerr">
        <div class="">
          <div class="grid_left">
            <div class="grid_items">
              <div class="grid_item">
                <h5 class="text-weight-bold text-primary text_head">
                  Plumbers are available at your location
                </h5>

                <form action="" class="form">
                  <div class="form_wrap">
                    <div class="input_wrap">
                      <label for="" class="text-primary text-weight-bold"
                        >Title</label
                      >
                      <input placeholder="Enter your title" type="text" />
                    </div>

                    <div class="input_wrap">
                      <textarea
                        placeholder="Description"
                        name=""
                        id=""
                      ></textarea>
                    </div>

                    <div class="input_wrap">
                      <label for="" class="text-primary text-weight-bold"
                        >Price</label
                      >
                      <input placeholder="N30,000" type="text" />

                      <div class="other text-right">
                        <small
                          class="text-positive row items-center justify-end q-mt-xs"
                          ><i class="ri-time-line"></i>
                          Nothing less than
                          <span class="text-primary">N1500</span></small
                        >
                      </div>
                    </div>
                  </div>
                  <div v-if="!file">
                    <div
                      class="text-subtitle text-primary text-weight-light q-mb-md"
                    >
                      Add a video or picture of your plumbing issue.
                    </div>
                    <div
                      :class="['dropZone', dragging ? 'dropZone-over' : '']"
                      @dragenter="dragging = true"
                      @dragleave="dragging = false"
                    >
                      <div class="dropZone-info" @drag="onChange">
                        <span class="fa fa-cloud-upload dropZone-title"></span>
                        <span class="dropZone-title"
                          >Drop file or click to upload</span
                        >
                        <div class="dropZone-upload-limit-info">
                          <div>extension support: txt</div>
                          <div>maximum file size: 5 MB</div>
                        </div>
                      </div>
                      <input type="file" @change="onChange" />
                    </div>
                  </div>
                  <div v-else class="dropZone-uploaded">
                    <div class="dropZone-uploaded-info">
                      <span class="dropZone-title">Uploaded</span>
                      <button
                        type="button"
                        class="btn btn-primary removeFile"
                        @click="removeFile"
                      >
                        Remove File
                      </button>
                    </div>
                  </div>

                  <div class="text-center q-mt-lg">
                    <q-btn class="create">Submit</q-btn>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {
      value: 81,
    };
  },

  data() {
    return {
      file: "",
      dragging: false,
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

      this.createFile(files[0]);
    },
    createFile(file) {
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

      this.file = file;
      console.log(this.file);
      this.dragging = false;
    },
    removeFile() {
      this.file = "";
    },
  },
};
</script>

<style scoped>
p {
  margin-bottom: 0;
}
.wrapper {
  background: #e5e5e5;
  padding: 2rem 0;
}

.grid_left {
  background: #ffffff;
  border-radius: 20px;
  padding: 1rem;
}

.grid_item {
  background: #ffffff;
  padding: 1rem 0;
  /* border-top: 1px solid #dadada;s */
  margin: 2rem 0 0;
  width: 60%;
  margin: 0 auto;
  height: 100%;
}
.grid_item_top {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
}
.grid_item_top i {
  display: flex;
  align-items: center;
  gap: 1rem;
  border-radius: 8px;
}

.input_wrap {
  margin: 3rem 0;
}

.input_wrap input {
  background: #f7f1f1;
  border: 1px solid #9a9a9a;
  padding: 0.65rem;
  width: 100%;
}
.input_wrap textarea {
  background: #f7f1f1;
  border: 1px solid #9a9a9a;
  padding: 0.45rem;
  width: 100%;
}

.create {
  background: #1abc9c;
  border-radius: 100px;
  padding: 0.65rem;
  width: 200px;
  color: #ffffff;
}

.rig {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.dots {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* dropzone */

.dropZone {
  width: 100%;
  height: 200px;
  position: relative;
  border: 2px dashed #1abc9c;
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
}

..dropZone-title {
  color: #787878;
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
  width: 80%;
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
</style>
