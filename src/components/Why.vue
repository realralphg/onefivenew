<template>
  <div class="wrapper">
    <div class="why q-py-xl">
      <div class="row items-center justify-between q-pt-xl container">
        <div class="col-md-6 col-sm-12 addMargin col-xs-12">
          <h5 class="why_head">
            Why <span class="text-primary">ONEFIVE</span>?
          </h5>
          <p class="why_text">An easier way to earn from anywhere near you.</p>
          <div class="holderr">
            <div class="hold">
              <h6 class="why_heading active">Standard payment option</h6>
              <p class="why_subtext">
                Interview potential fits for your job, negotiate rates, <br />
                and only pay for work you approve.Get your sevices <br />
                for nothing less than
                <span class="text-weight-bold text-primary">N1500</span> .
              </p>
            </div>
            <div class="hold">
              <h6 class="why_heading">Safe and secure</h6>
              <p class="why_subtext">
                Focus on your work knowing we help protect your <br />
                data and privacy. We’re here with 24/7 support <br />
                if you need it.
              </p>
            </div>
            <div class="hold">
              <h6 class="why_heading">User friendly</h6>
              <p class="why_subtext">
                It has a good user experience and also usable <br />
                and accessable for every users.
              </p>
            </div>
            <div class="hold">
              <h6 class="why_heading">Tracking</h6>
              <p class="why_subtext">Tracking your job process.</p>
            </div>
          </div>
        </div>
        <div
          class="col col-md-6 no_padding col-sm-12 q-mt-lg q-pl-xl col-xs-12"
        >
          <div class="img">
            <img class="bg" src="/images/why-img.png" />
            <div
              class="trans_det row items-center justify-between bg-white q-pa-md"
            >
              <div class="left">
                <p class="text-weight-bold">N 20,000 K</p>
                <small class="">Received</small>
              </div>

              <div class="right">
                <i class="ri-check-fill"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.why {
  position: relative;
  z-index: 2;
  padding-top: 8rem;
}
p {
  margin-bottom: 0;
}
.why_head {
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 25px;
  margin-bottom: 1rem;
  color: #1abc9c;
}

.why_text {
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 40px;
  /* or 166% */
  margin-bottom: 2rem;

  color: #2f4858;
}

.why_heading {
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 25px;
  /* or 104% */
}

.why_heading.active {
  color: #1abc9c;
}

.why_subtext {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-top: 1rem;

  color: #2f4858;
}
.button {
  border: none;
  padding: 1rem;
  background-color: #c0e5b72b;
}

.holderr {
  border-left: 4px solid #2f4858;
  border-radius: 0.8rem;
  background-color: rgba(0, 0, 0, 0, 0.5);
  margin: 0 auto;
  position: relative;
  padding-left: 3rem;
  text-align: left;
  /* width: 70%; */
  height: 480px;
}

.holderr .hold::after {
  position: absolute;
  display: block;
  /* top: 50%; */
  transform: translateY(-50%);
}

.holderr .hold:nth-child(1),
.holderr .hold:nth-child(2),
.holderr .hold:nth-child(3),
.holderr .hold:nth-child(4) {
  position: relative;
  height: 150px;
  padding: 0.3rem;
}
.holderr .hold:nth-child(1)::after {
  content: "\f09d";
  font-family: "FontAwesome";
  /* box-shadow: 0 0 0 4px #fd57bf; */
  top: 15%;
  border: 6px solid rgba(1, 221, 178, 0.5);
  color: #fff;
  background-color: #1abc9c;
  border-radius: 10px;
  padding: 1rem;
  left: -4.6rem;
  height: 3rem;
  border-radius: 1.5rem;
  width: 3rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: #313534; */
}
.holderr .hold:nth-child(2)::after {
  content: "\e06c";
  font-family: "FontAwesome";

  /* box-shadow: 0 0 0 4px #fd57bf; */
  top: 15%;
  border: 6px solid rgba(1, 221, 178, 0.5);
  background-color: #1abc9c;
  border-radius: 10px;
  left: -4.6rem;
  height: 3rem;
  border-radius: 1.5rem;
  width: 3rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  /* background-color: #313534; */
}
.holderr .hold:nth-child(3)::after {
  content: "\f118";
  font-family: "FontAwesome";

  /* box-shadow: 0 0 0 4px #fd57bf; */
  top: 15%;
  border: 6px solid rgba(1, 221, 178, 0.5);
  background-color: #1abc9c;
  border-radius: 10px;
  left: -4.6rem;
  color: #fff;
  height: 3rem;
  border-radius: 1.5rem;
  width: 3rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: #313534; */
}
.holderr .hold:nth-child(4)::after {
  content: "\f021";
  font-family: "FontAwesome";

  /* box-shadow: 0 0 0 4px #fd57bf; */
  top: 15%;
  border: 6px solid rgba(1, 221, 178, 0.5);
  background-color: #1abc9c;
  border-radius: 10px;
  left: -4.6rem;
  height: 3rem;
  color: #fff;
  border-radius: 1.5rem;
  width: 3rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: #313534; */
}
.img {
  position: relative;
  width: 100%;
}

.img .bg {
  position: relative;
  z-index: 2;
  width: 85%;
  height: 50%;
  margin-top: 2rem;
  left: 50%;
  transform: translateX(-50%);
}
.img::before {
  content: "";
  position: absolute;
  background: #1abc9c;
  background-repeat: no-repeat;
  background-position: 30%;
  width: 100%;
  left: 50%;
  height: 75%;
  border-radius: 8px;
  transform: translateX(-50%);
}

.trans_det {
  box-shadow: 0px 4px 47px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  width: 50%;
  height: 130px;
  position: absolute;
  bottom: 6%;
  z-index: 2;
}

.trans_det .left p {
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 36px;
  /* identical to box height */

  color: #2f4858;
}

.trans_det small {
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;

  color: #01ddb2;
}

.trans_det i {
  background: #1abc9c;
  color: #fff;
  padding: 0.75rem;
  border-radius: 50%;
}

@media (max-width: 800px) {
  .trans_det {
    width: 80%;
  }
  .addMargin {
    margin-bottom: 5rem;
  }
  .holderr .hold:nth-child(1),
  .holderr .hold:nth-child(2),
  .holderr .hold:nth-child(3),
  .holderr .hold:nth-child(4) {
    padding: 0rem;
    margin-bottom: 3rem;
  }

  .why_subtext {
    font-size: 14px;
  }
  .img .bg {
    width: 100%;
  }

  .holderr {
    height: 609px;
  }
}
@media (max-width: 400px) {
  .holderr .hold:nth-child(1)::after {
    content: "\f09d";
    top: 9%;
  }
  .holderr .hold:nth-child(2)::after {
    content: "\e06c";
    top: 9%;
  }
  .holderr .hold:nth-child(3)::after {
    content: "\f118";
    top: 9%;
  }
  .holderr .hold:nth-child(1),
  .holderr .hold:nth-child(2),
  .holderr .hold:nth-child(3),
  .holderr .hold:nth-child(4) {
    padding: 0rem;
    margin-bottom: 3rem;
  }
}
</style>
