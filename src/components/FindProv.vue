<template>
  <div class="wrapper bg-dark">
    <div class="grid flexer container">
      <div class="img">
        <img src="/images/job-prov.png" alt="" />
      </div>
      <div class="hold no_padding">
        <span class="span_text q-pa-md q-my-xl text-warning"
          >For Job Providers</span
        >
        <h2 class="text-h3 q-mb-md find_head text-white text-weight-bold">
          Find Professional <br />
          Artisans your way
        </h2>

        <p class="q-pt-sm find_text q-pb-sm text-white">
          Work with the largest network of independent <br />
          professionals and get your jobs done.
        </p>

        <q-btn
          style="border-radius: 8px"
          class="bg-primary q-py-md text-white q-px-xl"
          >Find Artisans</q-btn
        >

        <!-- <div class="details">
        
          <div class="two">
            <div class="download">
              <i class="ri-google-play-line"></i>
              <div class="det q-ml-md">
                <small class="text-white">Get it on</small>
                <p class="text-white">Google Play</p>
              </div>
            </div>
            <div class="download">
              <i class="ri-apple-fill"></i>
              <div class="det q-ml-md">
                <small class="text-white">Download it on</small>
                <p class="text-white">Apple Store</p>
              </div>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["proper"],
  components: {},
};
</script>

<style scoped>
.wrapper {
  box-shadow: rgba(26, 188, 156, 0.96) 0px 25px 20px -20px;
}
.hold {
  position: relative;
  padding: 2rem;
}
.find_head {
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 88%;
  margin: 4rem 0;
  color: #ffffff;
}

.find_text {
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  margin: 2rem 0;
  color: #f2f2f2;
}

.span_text {
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  /* identical to box height */
  border-radius: 100px;
  color: #2f4858;
  background: rgba(26, 188, 156, 0.33);
}
.cu {
  top: -10%;
  left: -2%;
  position: absolute;
  width: 200px;
}
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  align-items: center;
  position: relative;
  padding-top: 5rem;
}
.wrapper {
  position: relative;
  margin-top: 8rem;
  background: linear-gradient(76.67deg, #1abc9c 27.62%, #1abc9c 104.81%);
}

.two {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  width: 100%;
}

.details {
  position: relative;
}

.a {
  position: absolute;
  top: -60%;
  right: 50%;
  width: 150px;
}

.download {
  margin: 1rem 0;
  display: flex;
  background: #111;
  padding: 0.15rem 1rem;
  align-items: center;
  width: 100%;
  border-radius: 8px;
  border: 1px solid #fff;
}

.download i {
  font-size: 2.5rem;
  color: #fff;
}

.download p {
  font-size: 1.5rem;
  color: #fff;
}

.imm {
  width: 100%;
  position: relative;
  z-index: 100;
}

.img {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.img img {
  width: 60%;
}

@media (max-width: 1191px) {
  .cur {
    top: -8%;
    left: -9%;
    position: absolute;
    width: 100px;
    /* height: 200px; */
  }
}

@media (max-width: 768px) {
  .hide {
    display: block;
  }

  .grid {
    grid-template-columns: 1fr;
  }

  .two {
    display: grid;
    grid-template-columns: 1fr;
  }

  .download {
    margin: 0;
  }

  .a {
    position: absolute;
    top: -10%;
    right: 3%;
    width: 100px;
  }

  .cur {
    top: -8%;
    left: -9%;
    position: absolute;
    width: 100px;
    /* height: 200px; */
  }

  .download {
    padding: 0.15rem 0.4rem;
    /* height: 50px; */
    overflow: hidden;
    width: 75%;
  }

  .download p {
    font-size: 1rem;
    color: #fff;
  }

  .download i {
    font-size: 1.5rem;
    color: #fff;
  }

  .img {
    justify-content: center;
  }

  .flexer {
    display: flex;
    flex-direction: column-reverse;
  }
  .img img {
    width: 100%;
  }

  .find_head {
    font-style: normal;
    font-weight: 700;
    font-size: 35px;
    line-height: 95%;
    margin: 2rem 0;
    color: #ffffff;
  }
}

@media (max-width: 400px) {
  .cu {
    top: -2%;
    left: -2%;
    position: absolute;
    width: 150px;
  }
}
</style>
