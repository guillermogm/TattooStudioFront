import React from 'react'

export const Home = () => {
  return (
    <>
      <div className="container-fluid text-center">
        <h1 className="mt-5 mb-5">TATTOO STUDIO</h1>
        <div class="container">
          <div class="row">
            <div id="carousel-main" class="col-12 col-lg-6">
              <div id="carouselPizza" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="../../../images/Logo.jpg" class="d-block w-100" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src="../../../images/Studio.jpg" class="d-block w-100" alt="..." />
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselPizza" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselPizza" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div class="col-12 col-lg-6">
              <div id="quien-somos" class="row">
                <div class="d-flex justify-content-center">
                  <h1>Welcome</h1>
                </div>
                <hr />
                <p>We're a team of passionate and dedicated tattoo artists who share a common goal: to provide our clients with exceptional, custom tattoos that exceed their expectations.
                   Our studio is a welcoming and inclusive space where creativity thrives, and we're committed to making every client feel at home. <br/>

                  Our studio was founded on the principles of artistic integrity, professionalism, and a passion for tattooing.
                  Our team of artists has years of combined experience in the industry, and we've worked tirelessly to build a reputation for delivering
                  high-quality tattoos that are both visually stunning and deeply personal.<br/>

                  At this studio, we believe that tattoos are more than just ink on skin they're a way to express yourself,
                  tell your story, and showcase your individuality. Our mission is to provide a safe, supportive, and inspiring environment where our clients can bring their tattoo visions to life.
                  We're dedicated to building long-term relationships with our clients, and we strive to make every tattoo experience a positive and memorable one.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
