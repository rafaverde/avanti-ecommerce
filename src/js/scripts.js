// Function that detects the screen size and modifies the Footer layout.
function toggleFooterLayout() {
  const footer = document.getElementById("avanti-footer");
  footer.innerHTML = "";

  if (window.innerWidth <= 768) {
    footer.innerHTML = `
      <div class="row">
          <div id="ft-brand" class="col text-center">
            <img
              src="/src/img/avanti-logo.svg"
              alt="Avanti Shop Logo"
              width="152"
            />

            <div
              id="ft-social-links"
              class="social-icons mt-4 fs-4 d-flex align-items-center justify-content-center gap-5 mb-4 text-primary"
            >
              <a href="#" target="_blank">
                <i class="bi bi-instagram"></i>
              </a>
              <a href="#" target="_blank">
                <i class="bi bi-facebook"></i>
              </a>
              <a href="#" target="_blank">
                <i class="bi bi-youtube"></i>
              </a>
              <a href="#" target="_blank">
                <i class="bi bi-tiktok"></i>
              </a>
            </div>
          </div>
        </div>

        <div
          class="accordion accordion-flush border-top border-bottom"
          id="accordionFlush"
        >
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                Institucional
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFlush"
            >
              <div class="accordion-body">
                <a href="" class="text-decoration-none text-muted"
                  ><h5 class="small mt-3">Sobre Nós</h5></a
                >
                <a href="" class="text-decoration-none text-muted"
                  ><h5 class="small mt-3">Nossas Lojas</h5></a
                >
                <a href="" class="text-decoration-none text-muted"
                  ><h5 class="small mt-3">Privacidade e Segurança</h5></a
                >
                <a href="" class="text-decoration-none text-muted"
                  ><h5 class="small mt-3">Termos e Condições</h5></a
                >
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                Central de ajuda
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFlush"
            >
              <div class="accordion-body">
                <a href="" class="text-decoration-none text-muted"
                  ><h5 class="small mt-3">Fale Conosco</h5></a
                >
                <a href="" class="text-decoration-none text-muted"
                  ><h5 class="small mt-3">Frete e entregas</h5></a
                >
                <a href="" class="text-decoration-none text-muted"
                  ><h5 class="small mt-3">Trocas e Devolução</h5></a
                >
                <a href="" class="text-decoration-none text-muted"
                  ><h5 class="small mt-3">Formas de pagamento</h5></a
                >
                <a href="" class="text-decoration-none text-muted"
                  ><h5 class="small mt-3">FAQ</h5></a
                >
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                Atendimento
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFlush"
            >
              <div class="accordion-body">
                <a href="tel:" class="text-decoration-none text-muted"
                  ><h5 class="small mt-3">
                    <b>Telefone:</b> (99) 99999-9999
                  </h5></a
                >
                <a href="mailto:" class="text-decoration-none text-muted"
                  ><h5 class="small mt-3">
                    <b>Email:</b>atendimento@avantishop.com.br
                  </h5></a
                >

                <h5 class="small mt-3 text-muted lh-base">
                  <b>Horário de atendimento:</b><br />Segunda a Sábado: 07h00 às
                  23h00 <br />
                  Domingos e Feriados: 07h00 às 21h00
                </h5>
              </div>
            </div>
          </div>
        </div>

        <img
          src="/src/img/payment-methods-sm.svg"
          alt="Métodos de pagamento"
          class="text-center w-100 px-5 mt-5"
        />
      </div>

      <div id="ft-bottom-bar" class="py-5">
        <div class="container text-center">
          <p class="small text-center text-muted mb-lg-5">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
            velit esse molestie consequat, vel illum dolore eu feugiat nulla
            facilisis at vero eros et accumsan et iusto odio dignissim qui
            blandit praesent luptatum zzril delenit augue duis dolore te feugait
            nulla facilisi.
          </p>

          <img src="/src/img/sponsors-logos.svg" alt="Logos parceiros" />
        </div>
    `;
  } else {
    footer.innerHTML = `
    <div class="container">
          <div class="row">
            <div id="ft-brand" class="col">
              <img
                src="/src/img/avanti-logo.svg"
                alt="Avanti Shop Logo"
                width="152"
              />

              <div
                id="ft-social-links"
                class="social-icons mt-4 fs-4 d-flex align-items-center gap-4 text-primary"
              >
                <a href="#" target="_blank">
                  <i class="bi bi-instagram"></i>
                </a>
                <a href="#" target="_blank">
                  <i class="bi bi-facebook"></i>
                </a>
                <a href="#" target="_blank">
                  <i class="bi bi-youtube"></i>
                </a>
                <a href="#" target="_blank">
                  <i class="bi bi-tiktok"></i>
                </a>
              </div>
            </div>

            <div class="col">
              <h4 class="small fw-bold">Institucional</h4>
              <a href="" class="text-decoration-none text-muted"
                ><h5 class="small mt-3">Sobre Nós</h5></a
              >
              <a href="" class="text-decoration-none text-muted"
                ><h5 class="small mt-3">Nossas Lojas</h5></a
              >
              <a href="" class="text-decoration-none text-muted"
                ><h5 class="small mt-3">Privacidade e Segurança</h5></a
              >
              <a href="" class="text-decoration-none text-muted"
                ><h5 class="small mt-3">Termos e Condições</h5></a
              >
            </div>

            <div class="col">
              <h4 class="small fw-bold">Central de ajuda</h4>
              <a href="" class="text-decoration-none text-muted"
                ><h5 class="small mt-3">Fale Conosco</h5></a
              >
              <a href="" class="text-decoration-none text-muted"
                ><h5 class="small mt-3">Frete e entregas</h5></a
              >
              <a href="" class="text-decoration-none text-muted"
                ><h5 class="small mt-3">Trocas e Devolução</h5></a
              >
              <a href="" class="text-decoration-none text-muted"
                ><h5 class="small mt-3">Formas de pagamento</h5></a
              >
              <a href="" class="text-decoration-none text-muted"
                ><h5 class="small mt-3">FAQ</h5></a
              >
            </div>

            <div class="col">
              <h4 class="small fw-bold">Atendimento</h4>
              <a href="tel:" class="text-decoration-none text-muted"
                ><h5 class="small mt-3"><b>Telefone:</b> (99) 99999-9999</h5></a
              >
              <a href="mailto:" class="text-decoration-none text-muted"
                ><h5 class="small mt-3">
                  <b>Email:</b>atendimento@avantishop.com.br
                </h5></a
              >

              <h5 class="small mt-3 text-muted lh-base">
                <b>Horário de atendimento:</b><br />Segunda a Sábado: 07h00 às
                23h00 <br />
                Domingos e Feriados: 07h00 às 21h00
              </h5>
            </div>
          </div>

          <div
            id="ft-payment-methods"
            class="w-100 text-center mt-5 d-none d-lg-block"
          >
            <img
              src="/src/img/payment-methods-lg.svg"
              alt="Métodos de pagamento"
              height="30px"
            />
          </div>
        </div>
    `;
  }
}

// Debouncer function in screen size listener
function screenResizeListener() {
  let resizeTimeOut;

  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeOut);
    resizeTimeOut = setTimeout(toggleFooterLayout, 150);
  });
}

//Populate a slider with especific id (carouselID: string)
function populateNewProductSlider(carouselId) {
  const slider = document.getElementById(carouselId);

  console.log(slider);

  const cardsArray = Array.from(
    { length: 8 },
    () => `
    <div class="card p-3 mx-1 position-relative" style="width: 18rem">
              <div class="tag-new position-absolute">
                <span class="bg-secondary text-white px-2 py-1 rounded-2"
                  >Novo</span
                >
              </div>

              <div class="fav-button position-absolute top-0 end-0">
                <button class="bg-transparent border-0 mt-2 me-2">
                  <i class="bi bi-heart fs-4 text-muted"></i>
                </button>
              </div>

              <img
                src="/src/img/produto-exemplo.webp"
                class="card-img-top"
                alt="Exemplo produto"
              />
              <div class="card-body p-0 pt-3">
                <h3 class="card-title fs-4">
                  Lorem ipsum dolor sit amet consectetuer adipiscing elit
                </h3>
                <div class="sell-info d-flex gap-4 my-3">
                  <div class="prices d-flex flex-column">
                    <span class="text-decoration-line-through lh-1"
                      >R$ 100</span
                    >
                    <span class="fs-3 fw-bold lh-base">R$ 79,90</span>
                  </div>
                  <div class="off-tag">
                    <span
                      class="text-white px-2 py-1 rounded-2"
                      style="background-color: #5ec0be"
                      >10% OFF</span
                    >
                  </div>
                </div>
                <a href="" class="btn btn-primary w-100 py-2">Comprar</a>
              </div>
            </div>
  `
  );

  slider.innerHTML = cardsArray.join("");
}

// Toggle favourite icon for layout porpouse
function toggleFavouriteIcon() {
  const favButtons = document.querySelectorAll(".fav-button button");

  favButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const favIcon = this.querySelector("i");

      if (favIcon.classList.contains("bi-heart")) {
        favIcon.classList.remove("bi-heart", "text-muted");
        favIcon.classList.add("bi-heart-fill", "text-danger");
      } else {
        favIcon.classList.remove("bi-heart-fill", "text-danger");
        favIcon.classList.add("bi-heart", "text-muted");
      }
    });
  });
}

// Functions calls
document.addEventListener("DOMContentLoaded", function () {
  toggleFooterLayout();
  screenResizeListener();
  populateNewProductSlider("new_products_carousel");
  populateNewProductSlider("popular_products_carousel");
  toggleFavouriteIcon();

  // Customize product-slider
  $(".products-carousel").each(function () {
    $(this).slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      arrows: true,
      prevArrow:
        '<button type="button" class="slick-prev prod-arrow shadow"><i class="bi bi-arrow-left-short"></i></button>',
      nextArrow:
        '<button type="button" class="slick-next prod-arrow shadow"><i class="bi bi-arrow-right-short"></i></button>',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  });
});
