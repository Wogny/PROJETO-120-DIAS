import React from 'react'

import Script from 'dangerous-html/react'

import './navigation.css'

const Navigation = (props) => {
  return (
    <div className="navigation-container1">
      <div className="navigation-container2">
        <div className="navigation-container3">
          <Script
            html={`<style>
@media (prefers-reduced-motion: reduce) {
.navigation-logo, .navigation-link, .navigation-toggle, .navigation-close, .navigation-mobile-link {
  transition: none;
}
.navigation-link::after {
  transition: none;
}
.navigation-mobile-link, .navigation-mobile-cta {
  animation: none;
  opacity: 1;
  transform: none;
}
}
</style>`}
          ></Script>
        </div>
      </div>
      <nav className="navigation">
        <div className="navigation-container">
          <a href="#">
            <div className="navigation-logo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                className="navigation-logo-icon"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829zM2.5 21.5l1.4-1.4M20.1 3.9l1.4-1.4M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829zM9.6 14.4l4.8-4.8"
                ></path>
              </svg>
              <span className="navigation-brand">Mateus Casarini</span>
            </div>
          </a>
          <div className="navigation-links">
            <a href="#sobre">
              <div className="navigation-link">
                <span>Sobre</span>
              </div>
            </a>
            <a href="#programa">
              <div className="navigation-link">
                <span>Programa 120 Dias</span>
              </div>
            </a>
            <a href="#resultados">
              <div className="navigation-link">
                <span>Resultados</span>
              </div>
            </a>
            <a href="#depoimentos">
              <div className="navigation-link">
                <span>Depoimentos</span>
              </div>
            </a>
            <a href="#contato">
              <div className="navigation-link">
                <span>Contato</span>
              </div>
            </a>
          </div>
          <a href="#inscricao">
            <div className="navigation-cta btn btn-primary">
              <span>Começar Agora</span>
            </div>
          </a>
          <button
            id="navToggle"
            aria-expanded="false"
            aria-label="Abrir menu"
            className="navigation-toggle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        <div id="navMobile" className="navigation-mobile">
          <div className="navigation-mobile-header">
            <a href="#">
              <div className="navigation-logo">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  className="navigation-logo-icon"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829zM2.5 21.5l1.4-1.4M20.1 3.9l1.4-1.4M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829zM9.6 14.4l4.8-4.8"
                  ></path>
                </svg>
                <span className="navigation-brand">Mateus Casarini</span>
              </div>
            </a>
            <button
              id="navClose"
              aria-label="Fechar menu"
              className="navigation-close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M18 6L6 18M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div className="navigation-mobile-content">
            <a href="#sobre">
              <div className="navigation-mobile-link">
                <span>Sobre</span>
              </div>
            </a>
            <a href="#programa">
              <div className="navigation-mobile-link">
                <span>Programa 120 Dias</span>
              </div>
            </a>
            <a href="#resultados">
              <div className="navigation-mobile-link">
                <span>Resultados</span>
              </div>
            </a>
            <a href="#depoimentos">
              <div className="navigation-mobile-link">
                <span>Depoimentos</span>
              </div>
            </a>
            <a href="#contato">
              <div className="navigation-mobile-link">
                <span>Contato</span>
              </div>
            </a>
            <a href="#inscricao">
              <div className="navigation-mobile-cta btn btn-primary btn-lg">
                <span>Começar Agora</span>
              </div>
            </a>
          </div>
        </div>
      </nav>
      <div className="navigation-container4">
        <div className="navigation-container5">
          <Script
            html={`<style>
        @keyframes slideIn {to {opacity: 1;
transform: translateX(0);}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="navigation-container6">
        <div className="navigation-container7">
          <Script
            html={`<script defer data-name="navigation-toggle">
(function(){
  const navToggle = document.getElementById("navToggle")
  const navClose = document.getElementById("navClose")
  const navMobile = document.getElementById("navMobile")

  navToggle.addEventListener("click", () => {
    navMobile.style.display = "block"
    navToggle.setAttribute("aria-expanded", "true")
    document.body.style.overflow = "hidden"
  })

  navClose.addEventListener("click", () => {
    navMobile.style.display = "none"
    navToggle.setAttribute("aria-expanded", "false")
    document.body.style.overflow = ""
  })

  const mobileLinks = document.querySelectorAll(".navigation-mobile-link, .navigation-mobile-cta")
  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMobile.style.display = "none"
      navToggle.setAttribute("aria-expanded", "false")
      document.body.style.overflow = ""
    })
  })

  window.addEventListener("resize", () => {
    if (window.innerWidth > 991) {
      navMobile.style.display = "none"
      navToggle.setAttribute("aria-expanded", "false")
      document.body.style.overflow = ""
    }
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Navigation
