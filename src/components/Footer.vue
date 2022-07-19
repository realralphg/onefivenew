<template>
  <div class="bg-dark wrapper">
    <div class="grid text-white container">
      <div class="box">
        <div class="footer_header">
          <span class="text-weight-bold">ONE</span>FIVE.COM
        </div>
        <p>Where creators run their business, and where you get job done.</p>
      </div>

      <div class="box text-center">
        <h6 class="text-weight-bold text-primary">Services</h6>
        <ul>
          <li>About Us</li>
          <li>Services</li>
          <li>Contact us</li>
        </ul>
      </div>

      <div class="box text-center">
        <h6 class="text-weight-bold text-primary">Social Media</h6>
        <div class="icons text-center justify-center row items-center">
          <i class="ri-facebook-circle-fill"></i>
          <i class="ri-twitter-fill q-ml-sm"></i>
          <i class="ri-linkedin-fill q-ml-sm"></i>
          <i class="ri-instagram-line q-ml-sm"></i>
        </div>
      </div>

      <div class="box">
        <h6 class="text-weight-bold text-primary">Newsletter</h6>
        <p class="q-my-sm">Stay informed on our latest news!</p>

        <div class="input__wrap q-pr-md">
          <div class="input">
            <div class="left">
              <input placeholder="Enter your email" type="text" />
            </div>

            <q-btn no-caps class="bg-primary search text-white">
              Subscribe
            </q-btn>
          </div>
        </div>
        <div class="details">
          <p class="det_head">Download ONEFIVE App</p>

          <div class="download_btns items-center">
            <div class="download">
              <i class="ri-google-play-line"></i>
              <div class="det q-ml-sm">
                <small class="text-white">Get it on</small>
                <p class="text-white">Google Play</p>
              </div>
            </div>
            <div class="download">
              <i class="ri-apple-fill"></i>
              <div class="det q-ml-sm">
                <small class="text-white">Download it on</small>
                <p class="text-white">App Store</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="fle q-py-md text-white q-pt-xl container">
      <p>© 2022 Greysoft Technologies.</p>
      <div class="li">
        <ul>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
P {
  margin-bottom: 0;
}
.wrapper {
  margin-top: 4rem;
  padding: 3rem 0 1rem;
  position: relative;
  overflow: hidden;
  bottom: 0;
}

.grid {
  display: grid;
  /* grid-template-columns: repeat(4, 1fr); */
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}

.box ul li {
  margin: 1rem 0;
}
.fle {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
}

.fle ul {
  display: flex;
}

.fle ul li {
  margin: 0 1rem;
}

.oo {
  width: 150px;
  position: absolute;
  right: 0;
  top: 0;
}

.hee {
  width: 150px;
  position: absolute;
  bottom: -5%;
  left: -2%;
}

.footer_header {
  font-style: normal;
  /* font-weight: 800; */
  font-size: 41.4334px;
  line-height: 62px;
  text-overflow: ellipsis;

  color: #1abc9c;
}

.box p {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 125%;

  color: #ffffff;
}

.box h6 {
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;

  color: #1abc9c;
}

.icons i {
  font-size: 22px;
}
.input {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #fff;
  margin: 0 auto;
  border-radius: 4px;
  height: 40px;
  margin-top: 2rem;
  color: #fff;
  background: #ffffff;
  border-radius: 4px;
  padding: 0.35rem 0 0.35rem 0.35rem;
}

.input .left {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.input input {
  background: #ffffff;
  border-radius: 4px;
  border: none;
  outline: none;
  color: #fff;
}

.input .search {
  height: 40px;
  border-radius: 4px;
  width: 70px;
  padding: 0.25rem;
  font-size: 12px;
}

.two {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  width: 100%;
}

.details {
  position: relative;
  margin-top: 2rem;
}

.det_head {
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  font-feature-settings: "salt" on, "liga" off;
  color: #d9dbe1;
}

.download_btns {
  display: flex;
  gap: 1.5rem;
  align-items: center;
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
  font-size: 1rem;
  color: #fff;
}

.download p {
  font-size: 13px;
  color: #fff;
}

.imm {
  width: 100%;
  position: relative;
  z-index: 100;
}

.img {
  position: relative;
}

.ime {
  width: 200px;
  position: absolute;
  bottom: 3%;
  right: 18%;
}
::placeholder {
  font-size: 14px;
}
@media (max-width: 768px) {
  .hide {
    display: block;
  }

  .li {
    margin-top: 0.65rem;
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

  .download {
    padding: 0.15rem 0.4rem;

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
  .box p {
    margin-bottom: 1rem;
  }

  .input .search {
    height: 45px;
    border-radius: 4px;
    width: 70px;
    font-size: 14px;
    padding: 0 2.5rem;
  }
  ::placeholder {
    font-size: 14px;
  }
  .input {
    height: 45px;
  }
}
@media (max-width: 500px) {
  .download_btns {
    flex-wrap: wrap;
  }
}
</style>
