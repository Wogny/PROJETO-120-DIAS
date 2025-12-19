import React from 'react'

import './footer.css'

const Footer = (props) => {
  return (
    <div className="footer-container">
      <footer className="footer">
        <div className="footer-wrapper">
          <div className="footer-content">
            <div className="footer-columns">
              <div className="footer-column footer-brand-column">
                <div className="footer-brand">
                  <div className="footer-logo">
                    <img
                      src={process.env.PUBLIC_URL + '/img/logo-mc.png'}
                      alt="Mateus Casarini"
                      className="navigation-logo-img"
                    />
                    <span className="footer-brand-name">Mateus Casarini</span>
                  </div>
                  <p className="footer-tagline">
                    Transforme seu corpo em 120 dias com acompanhamento
                    profissional personalizado.
                  </p>
                </div>
                <div className="footer-social">
                  <a href="https://www.instagram.com/mateuscasarini/"
                    target="_blank"
                    rel="noreferrer">
                    <div aria-label="Instagram" className="footer-social-link">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        >
                          <rect
                            width="20"
                            height="20"
                            x="2"
                            y="2"
                            rx="5"
                            ry="5"
                          ></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path>
                        </g>
                      </svg>
                    </div>
                  </a>
                  <a href="https://www.youtube.com/@mateus.casarini"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div aria-label="YouTube" className="footer-social-link">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        >
                          <path d="M2.5 17a24.1 24.1 0 0 1 0-10a2 2 0 0 1 1.4-1.4a49.6 49.6 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.1 24.1 0 0 1 0 10a2 2 0 0 1-1.4 1.4a49.6 49.6 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                          <path d="m10 15l5-3l-5-3z"></path>
                        </g>
                      </svg>
                    </div>
                  </a>
                  <a href="https://wa.me/5517997510946"
                    target="_blank"
                    rel="noreferrer">
                    <div aria-label="WhatsApp" className="footer-social-link">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        >
                          <path d="m3 21l1.65-3.8a9 9 0 1 1 3.4 2.9z"></path>
                          <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0za5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"></path>
                        </g>
                      </svg>
                    </div>
                  </a>
                  <a
                    href="https://www.tiktok.com/@mateuscasarini"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div aria-label="TikTok" className="footer-social-link">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M16.5 3.5c.6 1.2 1.6 2.2 2.8 2.8v3.1a6.1 6.1 0 0 1-3.2-1v5.7a5.4 5.4 0 1 1-5.4-5.4c.3 0 .6 0 .9.1v3a2.4 2.4 0 1 0 1.7 2.3V3.5z"
                        />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
              <div className="footer-column footer-links-column">
                <h3 className="footer-column-title">Links Rápidos</h3>
                <nav className="footer-nav">
                  <a href="#">
                    <div className="footer-link">
                      <span>Homepage</span>
                    </div>
                  </a>
                  <a href="#sobre">
                    <div className="footer-link">
                      <span>Sobre Mateus</span>
                    </div>
                  </a>
                  <a href="#programa">
                    <div className="footer-link">
                      <span>Programa 120 Dias</span>
                    </div>
                  </a>
                  <a href="#resultados">
                    <div className="footer-link">
                      <span>Resultados</span>
                    </div>
                  </a>
                  <a href="#depoimentos">
                    <div className="footer-link">
                      <span>Depoimentos</span>
                    </div>
                  </a>
                  <a href="#contato">
                    <div className="footer-link">
                      <span>Contato</span>
                    </div>
                  </a>
                </nav>
              </div>
              <div className="footer-column footer-contact-column">
                <h3 className="footer-column-title">Contato</h3>
                <div className="footer-contact-info">
                  <div className="footer-contact-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      className="footer-contact-icon"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      >
                        <path d="m3 21l1.65-3.8a9 9 0 1 1 3.4 2.9z"></path>
                        <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0za5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"></path>
                      </g>
                    </svg>
                    <a href="https://wa.me/5517997510946">
                      <div className="footer-contact-link">
                        <span>(17) 99751-0946</span>
                      </div>
                    </a>
                  </div>
                  <div className="footer-contact-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      className="footer-contact-icon"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      >
                        <circle cx="6" cy="12" r="4"></circle>
                        <circle cx="18" cy="12" r="4"></circle>
                        <path d="M6 16h12"></path>
                      </g>
                    </svg>
                    <a href="mailto:contato@mateuscasarini.com.br?subject=">
                      <div className="footer-contact-link">
                        <span>contato@mateuscasarini.com.br</span>
                      </div>
                    </a>
                  </div>
                  <div className="footer-contact-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      className="footer-contact-icon"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m21 3l-6.5 18a.55.55 0 0 1-1 0L10 14l-7-3.5a.55.55 0 0 1 0-1z"
                      ></path>
                    </svg>
                    <span className="footer-contact-text">
                      Catanduva, Brasil
                    </span>
                  </div>
                </div>
                <div className="footer-cta">
                  <a href="#programa">
                    <div className="footer-cta-button btn btn-primary">
                      <span>Comece Agora</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="footer-divider"></div>
            <div className="footer-bottom">
              <div className="footer-bottom-content">
                <p className="footer-copyright">
                  © 2025 Mateus Casarini Fitness. Todos os direitos reservados.
                </p>
                <div className="footer-legal">
                  <a href="#privacidade">
                    <div className="footer-legal-link">
                      <span>Política de Privacidade</span>
                    </div>
                  </a>
                  <span className="footer-legal-separator">|</span>
                  <a href="#termos">
                    <div className="footer-legal-link">
                      <span>Termos de Uso</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
