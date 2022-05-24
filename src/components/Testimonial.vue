<template>
  <div class="wrapper">
    <div class="holu">
      <h2
        class="text-weight-bold container_testimonial text_testi text-h3 q-mb-xl"
      >
        What are they saying
      </h2>
      <div class="container_testimonial">
        <Splide :options="options">
          <!-- <div class="grids"> -->
          <SplideSlide>
            <div class="hold">
              <div class="box">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Doloremque unde enim molestiae repellendus eligendi illo, qui
                  magni. Possimus, assumenda provident!
                </p>
              </div>
              <div class="det q-py-md">
                <img class="gb" src="/images/gr.png" alt="" />
                <div class="dett">
                  <h6>Bola Zad</h6>
                  <strong>Investment Manager</strong> <br />
                  <small>Forex Cap</small>
                </div>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div class="hold">
              <div class="box">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Doloremque unde enim molestiae repellendus eligendi illo, qui
                  magni. Possimus, assumenda provident!
                </p>
              </div>
              <div class="det q-py-md">
                <img class="gb" src="/images/gr.png" alt="" />
                <div class="dett">
                  <h6>Bola Zad</h6>
                  <strong>Investment Manager</strong> <br />
                  <small>Forex Cap</small>
                </div>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div class="hold">
              <div class="box">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Doloremque unde enim molestiae repellendus eligendi illo, qui
                  magni. Possimus, assumenda provident!
                </p>
              </div>
              <div class="det q-py-md">
                <img class="gb" src="/images/gr.png" alt="" />
                <div class="dett">
                  <h6>Bola Zad</h6>
                  <strong>Investment Manager</strong> <br />
                  <small>Forex Cap</small>
                </div>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div class="hold">
              <div class="box">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Doloremque unde enim molestiae repellendus eligendi illo, qui
                  magni. Possimus, assumenda provident!
                </p>
              </div>
              <div class="det q-py-md">
                <img class="gb" src="/images/gr.png" alt="" />
                <div class="dett">
                  <h6>Bola Zad</h6>
                  <strong>Investment Manager</strong> <br />
                  <small>Forex Cap</small>
                </div>
              </div>
            </div>
          </SplideSlide>
          <!-- </div> -->
        </Splide>
      </div>
    </div>
  </div>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import "@splidejs/splide/dist/css/splide.min.css";
import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";
export default {
  components: {
    Splide,
    SplideSlide,
  },
  data() {
    return {
      options: {
        rewind: true,
        arrows: false,
        perPage: 3,
        gap: "1rem",
        height: "15rem",
        breakpoints: {
          1000: {
            perPage: 3,
          },
          800: {
            perPage: 2,
          },
          500: {
            perPage: 1,
          },
        },
      },
    };
  },
};
</script>

<style scoped>
.wrapper {
  margin-bottom: 5rem;
  position: relative;
  background: #1abc9c;
}
.wrapper::before {
  content: "";
  background: url("/images/bg.png") no-repeat center center/cover;
  position: absolute;
  width: 100%;
  height: 100%;
}
.wrapper::after {
  content: "\f10e";
  font-family: "FontAwesome";
  color: #01ddb2;

  /* background: url("/images/quote.png") no-repeat center center/cover; */
  top: 0;
  right: 10%;
  position: absolute;
  width: 10%;
  height: 60%;
  font-size: 15rem;
  z-index: 1;
}
.text_testi {
  font-style: normal;
  font-weight: 800;
  font-size: 36px;
  line-height: 64px;
  font-feature-settings: "salt" on, "liga" off;
  color: #ffffff;
}

.holu {
  padding: 7rem 0;
  position: relative;
}
.grids {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 7rem;
}
.det {
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #ffffff;
  justify-content: center;
  margin: 1.5rem 0;
}

.gb {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}

.hold {
  position: relative;
  z-index: 10;
}

.box {
  padding: 5rem;
  border-radius: 8px;
  position: relative;
  z-index: 4;
  background: #ffffff;
  box-shadow: 0px 10px 20px rgba(41, 41, 42, 0.07);
  z-index: 10;
}
.box::after {
  content: "\f063";
  position: absolute;
  color: #ffffff;
  left: 50%;
  font-family: "FontAwesome";
  font-size: 50px;
  bottom: -10%;
  transform: translateX(-50%);
}

.splide__slide {
  height: 100% !important;
}

.splide__pagination__page.is-active {
  background: #fed12e !important;
  transform: scale(1.4);
}

.container_testimonial {
  width: 90%;
  margin-left: auto;
}
</style>
