import React from 'react'
import { Helmet } from 'react-helmet'
import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './home.css'

const Home = () => {
  return (
    <div className="home-page">
      <Helmet>
        <title>Transformação em 120 dias | Mateus Casarini</title>
        <meta
          name="description"
          content="Programa completo de 120 dias com dieta personalizada, treinos profissionais e suporte direto com Mateus Casarini para emagrecer, ganhar peso ou massa muscular."
        />
      </Helmet>

      <Navigation />

      {/* HERO – PROMESSA PRINCIPAL */}
      <section className="home-hero">
        <div className="home-section-inner">
          <div className="home-hero-content">
            <h1>O MAPA
              EXATO PARA{" "}
              <span className="hero-highlight">TRANSFORMAR</span> SEU{" "}
              <span className="hero-highlight">SHAPE</span> EM 120 DIAS</h1>

            <p className="home-hero-subtitle">
              Sem dietas <span className="hero-highlight">caras</span> e treinos cheio de <span className="hero-highlight">firulas</span>
            </p>

            <p className="home-hero-subtitle">
              Acompanhamento personalizado com dieta profissional, treinos planejados
              e suporte direto para emagrecer, ganhar peso ou construir músculo com
              segurança.
            </p>






            <section className="home-hero-bottom">
              <div className="home-hero-highlight-block">
                <p className="home-hero-highlight">
                  Não é só uma planilha genérica: é um plano criado para a sua rotina,
                  com ajustes semanais conforme a sua evolução.
                </p>
              </div>

              <ul className="home-hero-list">
                <li>Dieta personalizada para sua rotina e preferências alimentares</li>
                <li>Treinos profissionais com progressão estratégica</li>
                <li>Suporte diário e semanal durante todos os 120 dias</li>
              </ul>

              <a
                href="#checkout"
                className="home-btn home-btn-primary"
              >
                Quero começar minha transformação
              </a>
            </section>
          </div>
        </div>
      </section>


      {/* QUEM VAI TE ACOMPANHAR */}
      <section className="home-section">
        <div className="home-section-inner home-about-grid">
          <div className="home-about-text">
            <h2>Quem vai te acompanhar</h2>
            <h3 className="home-section-subtitle">
              Mateus Casarini – Especialista em Transformação Corporal
            </h3>
            <p>
              Com mais de 8 anos de experiência em treinamento personalizado e
              nutrição esportiva, Mateus Casarini já ajudou centenas de pessoas a
              emagrecer, ganhar massa e definir o corpo de forma saudável.
            </p>
            <p>
              A metodologia une ciência do exercício, planejamento nutricional
              estratégico e acompanhamento humanizado para resultados consistentes e
              sustentáveis.
            </p>
            <p className="home-highlight">
              Resultados reais em 120 dias ou continuamos trabalhando juntos até
              você alcançar seu objetivo.
            </p>

            <a
              href="#checkout"
              className="home-btn home-btn-secondary home-about-cta"
            >
              Quero ser acompanhado pelo Mateus
            </a>
          </div>

          <div className="home-about-photo">
            <img
              src="/img/mateus.jpg"
              alt="Mateus Casarini"
              className="home-about-img"
            />
            <span className="home-about-badge">
              +8 anos transformando corpos
            </span>
          </div>
        </div>
      </section>

      {/* O QUE VOCÊ RECEBE */}
      <section className="home-section home-benefits">
        <div className="home-section-inner">
          <h2>O que você recebe no programa</h2>
          <p className="home-section-subtitle">
            Tudo que você precisa para alcançar seus objetivos em 120 dias.
          </p>

          <div className="home-benefits-grid">
            <article className="home-benefit-card">
              <div className="home-benefit-icon">
                <span>📅</span>
              </div>
              <h3 className="home-benefit-title">Acompanhamento contínuo</h3>
              <p className="home-benefit-text">
                Suporte diário e semanal durante todos os 120 dias do programa, com
                ajustes conforme sua evolução.
              </p>
            </article>

            <article className="home-benefit-card">
              <div className="home-benefit-icon">
                <span>🍽️</span>
              </div>
              <h3 className="home-benefit-title">Dietas personalizadas</h3>
              <p className="home-benefit-text">
                Planos nutricionais elaborados especificamente para seu objetivo e
                rotina, com cardápios variados e fáceis de seguir.
              </p>
            </article>

            <article className="home-benefit-card">
              <div className="home-benefit-icon">
                <span>🏋️</span>
              </div>
              <h3 className="home-benefit-title">Planilhas de treino</h3>
              <p className="home-benefit-text">
                Treinos profissionais adaptados ao seu nível, com progressão
                estratégica para garantir resultados.
              </p>
            </article>

            <article className="home-benefit-card">
              <div className="home-benefit-icon">
                <span>💬</span>
              </div>
              <h3 className="home-benefit-title">Suporte do personal</h3>
              <p className="home-benefit-text">
                Acesso direto ao Mateus Casarini para tirar dúvidas, receber motivação
                e ajustar sua estratégia.
              </p>
            </article>
          </div>

          <a
            href="#checkout"
            className="home-btn home-btn-secondary home-benefits-cta"
          >
            Quero receber tudo isso por 120 dias
          </a>
        </div>
      </section>

      {/* 6 ETAPAS DA TRANSFORMAÇÃO */}
      <section className="home-section home-steps">
        <div className="home-section-inner">
          <h2>Como funciona o programa</h2>
          <p className="home-section-subtitle">
            6 etapas estruturadas para a sua transformação completa em 120 dias.
          </p>

          <div className="home-steps-timeline">
            {/* 1 */}
            <div className="home-step">
              <div className="home-step-circle">
                <span className="home-step-number">01</span>
                <span className="home-step-icon">🎯</span>
              </div>
              <h3 className="home-step-title">Avaliação inicial</h3>
              <p className="home-step-text">
                Análise completa do seu perfil, objetivos, histórico e disponibilidade.
              </p>
            </div>

            {/* 2 */}
            <div className="home-step">
              <div className="home-step-circle">
                <span className="home-step-number">02</span>
                <span className="home-step-icon">📌</span>
              </div>
              <h3 className="home-step-title">Definição de meta</h3>
              <p className="home-step-text">
                Estabelecemos metas realistas e mensuráveis para os 120 dias.
              </p>
            </div>

            {/* 3 */}
            <div className="home-step">
              <div className="home-step-circle">
                <span className="home-step-number">03</span>
                <span className="home-step-icon">🍽️</span>
              </div>
              <h3 className="home-step-title">Plano nutricional</h3>
              <p className="home-step-text">
                Dieta personalizada com cardápios semanais e lista de compras.
              </p>
            </div>

            {/* 4 */}
            <div className="home-step">
              <div className="home-step-circle">
                <span className="home-step-number">04</span>
                <span className="home-step-icon">🏋️</span>
              </div>
              <h3 className="home-step-title">Planilha de treinos</h3>
              <p className="home-step-text">
                Treinos específicos com exercícios detalhados e progressão.
              </p>
            </div>

            {/* 5 */}
            <div className="home-step">
              <div className="home-step-circle">
                <span className="home-step-number">05</span>
                <span className="home-step-icon">📲</span>
              </div>
              <h3 className="home-step-title">Acompanhamento ativo</h3>
              <p className="home-step-text">
                Check-ins regulares e suporte direto via WhatsApp.
              </p>
            </div>

            {/* 6 */}
            <div className="home-step">
              <div className="home-step-circle">
                <span className="home-step-number">06</span>
                <span className="home-step-icon">📈</span>
              </div>
              <h3 className="home-step-title">Ajustes e resultados</h3>
              <p className="home-step-text">
                Adaptações constantes baseadas na sua evolução e rotina.
              </p>
            </div>
          </div>

          <a
            href="#checkout"
            className="home-btn home-btn-secondary home-steps-cta"
          >
            Quero seguir essas 6 etapas
          </a>
        </div>
      </section>


      {/* DEPOIMENTOS / PROVA SOCIAL */}
      <section className="home-section home-results">
        <div className="home-section-inner">
          <h2>Resultados reais de pessoas reais</h2>
          <p className="home-section-subtitle">
            Conheça histórias inspiradoras de transformação em 120 dias.
          </p>

          <div className="home-results-grid">
            {/* Card 1 */}
            <article className="home-result-card">
              <div className="home-result-image-wrapper">
                <img
                  src="/img/result1.webp"
                  alt="Antes e depois – Juliana Santos"
                  className="home-result-image"
                />
                <span className="home-result-badge">-18kg</span>
              </div>
              <div className="home-result-content">
                <div className="home-result-stars">★★★★★</div>
                <p className="home-result-text">
                  “O programa do Mateus mudou minha vida! Perdi 18kg em 120 dias e
                  ganhei uma nova disposição. As dietas eram fáceis de seguir e os
                  treinos cabiam na minha rotina.”
                </p>
                <p className="home-result-name">Juliana Santos</p>
                <p className="home-result-meta">34 anos • Emagrecimento</p>
              </div>
            </article>

            {/* Card 2 */}
            <article className="home-result-card">
              <div className="home-result-image-wrapper">
                <img
                  src="/img/result2.jpg"
                  alt="Antes e depois – Rafael Costa"
                  className="home-result-image"
                />
                <span className="home-result-badge">+12kg</span>
              </div>
              <div className="home-result-content">
                <div className="home-result-stars">★★★★★</div>
                <p className="home-result-text">
                  “Sempre fui magro e tinha dificuldade de ganhar massa. Com o
                  acompanhamento do Mateus, ganhei 12kg de músculo de forma saudável.
                  A dieta hipercalórica era surpreendentemente saborosa!”
                </p>
                <p className="home-result-name">Rafael Costa</p>
                <p className="home-result-meta">28 anos • Ganho de Massa</p>
              </div>
            </article>

            {/* Card 3 */}
            <article className="home-result-card">
              <div className="home-result-image-wrapper">
                <img
                  src="/img/result3.jpg"
                  alt="Antes e depois – Carla Mendes"
                  className="home-result-image"
                />
                <span className="home-result-badge">-10kg</span>
              </div>
              <div className="home-result-content">
                <div className="home-result-stars">★★★★★</div>
                <p className="home-result-text">
                  “Programa completo e muito bem estruturado. O Mateus está sempre
                  disponível para ajustar o plano. Me sinto mais confiante e
                  saudável do que nunca!”
                </p>
                <p className="home-result-name">Carla Mendes</p>
                <p className="home-result-meta">41 anos • Emagrecimento</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="home-section home-bmi">
        <div className="home-section-inner">
          <h2>Calcule sua Taxa Metabólica Basal</h2>
          <p className="home-section-subtitle">
            Descubra quantas calorias seu corpo gasta em repouso por dia.
          </p>

          <div className="home-bmi-card">
            <div className="home-bmi-header">
              <span className="home-bmi-icon">🔥</span>
              <div>
                <h3 className="home-bmi-title">Calculadora de TMB</h3>
                <p className="home-bmi-subtitle">
                  Informe seus dados para estimar sua taxa de metabolismo basal.
                </p>
              </div>
            </div>

            <div className="home-bmi-tabs">
              <button className="home-bmi-tab home-bmi-tab-active">
                Métrico (kg/cm)
              </button>

            </div>

            <form
              className="home-bmi-form"
              onSubmit={(e) => {
                e.preventDefault()
                const heightInput = e.target.elements['height']
                const weightInput = e.target.elements['weight']
                const ageInput = e.target.elements['age']
                const sexInput = e.target.elements['sex']

                const heightCm = parseFloat(heightInput.value.replace(',', '.'))
                const weightKg = parseFloat(weightInput.value.replace(',', '.'))
                const age = parseInt(ageInput.value, 10)
                const sex = sexInput.value

                if (!heightCm || !weightKg || !age || heightCm <= 0 || weightKg <= 0 || age <= 0) {
                  alert('Preencha altura, peso e idade corretamente.')
                  return
                }

                // Fórmula de Mifflin-St Jeor simplificada
                let tmb
                if (sex === 'male') {
                  tmb = 10 * weightKg + 6.25 * heightCm - 5 * age + 5
                } else {
                  tmb = 10 * weightKg + 6.25 * heightCm - 5 * age - 161
                }

                const resultEl = document.getElementById('bmi-result-value')
                const labelEl = document.getElementById('bmi-result-label')

                if (resultEl && labelEl) {
                  resultEl.textContent = `${Math.round(tmb)} kcal/dia`
                  labelEl.textContent =
                    'Estimativa de calorias que seu corpo gasta em repouso.'
                }
              }}
            >
              <div className="home-bmi-field">
                <label htmlFor="tmb-sex">Sexo</label>
                <select id="tmb-sex" name="sex">
                  <option value="male">Masculino</option>
                  <option value="female">Feminino</option>
                </select>
              </div>

              <div className="home-bmi-field">
                <label htmlFor="tmb-age">Idade (anos)</label>
                <input
                  id="tmb-age"
                  name="age"
                  type="number"
                  min="10"
                  max="100"
                  placeholder="Ex: 30"
                />
              </div>

              <div className="home-bmi-field">
                <label htmlFor="tmb-height">Altura (cm)</label>
                <input
                  id="tmb-height"
                  name="height"
                  type="text"
                  placeholder="Ex: 170"
                  autoComplete="off"
                />
              </div>

              <div className="home-bmi-field">
                <label htmlFor="tmb-weight">Peso (kg)</label>
                <input
                  id="tmb-weight"
                  name="weight"
                  type="text"
                  placeholder="Ex: 70"
                  autoComplete="off"
                />
              </div>

              <div className="home-bmi-actions">
                <button
                  type="button"
                  className="home-btn home-bmi-clear"
                  onClick={() => {
                    const form = document.querySelector('.home-bmi-form')
                    if (form) form.reset()
                    const resultEl = document.getElementById('bmi-result-value')
                    const labelEl = document.getElementById('bmi-result-label')
                    if (resultEl) resultEl.textContent = '--'
                    if (labelEl) labelEl.textContent = ''
                  }}
                >
                  Limpar
                </button>

                <button type="submit" className="home-btn home-btn-primary home-bmi-submit">
                  Calcular
                </button>
              </div>
            </form>

            <div className="home-bmi-result">
              <div className="home-bmi-result-value" id="bmi-result-value">
                --
              </div>
              <div className="home-bmi-result-label" id="bmi-result-label"></div>
              <p className="home-bmi-result-note">
                A TMB é uma estimativa. Use como base para planejar dieta e treinos,
                sempre com orientação profissional.
              </p>
            </div>
          </div>
        </div>
      </section>





      {/* INVESTIMENTO / CHECKOUT */}
      <section id="checkout" className="home-section home-offer">
        <div className="home-section-inner">
          <div className="home-offer-badge">Oferta exclusiva</div>

          <h2>Comece sua transformação hoje</h2>
          <p className="home-section-subtitle">
            Programa completo de 120 dias com acompanhamento personalizado.
          </p>

          <div className="home-offer-list">
            <div className="home-offer-item">
              <span className="home-offer-check">✔</span>
              <span>Dietas personalizadas para o seu objetivo.</span>
            </div>
            <div className="home-offer-item">
              <span className="home-offer-check">✔</span>
              <span>Planilhas de treino progressivas.</span>
            </div>
            <div className="home-offer-item">
              <span className="home-offer-check">✔</span>
              <span>Acompanhamento diário por 120 dias.</span>
            </div>
            <div className="home-offer-item">
              <span className="home-offer-check">✔</span>
              <span>Suporte direto com Mateus Casarini.</span>
            </div>
          </div>

          <div className="home-offer-guarantee">
            <div className="home-offer-guarantee-title">Garantia de resultados</div>
            <p>
              Se você seguir o programa e não ver resultados, continuamos ao seu lado
              até você alcançar seu objetivo.
            </p>
          </div>

          <div className="home-offer-cta-row">
            <div className="cta-bottom-row">
              {/* Botão laranja padrão */}
              <a
                href="https://seu-link-de-checkout-ou-whatsapp"
                target="_blank"
                rel="noreferrer"
                className="cta-button cta-button-orange"
              >
                Garantir minha vaga agora
              </a>

              {/* Caixa opaca neon do preço */}
              <div className="cta-price-pill cta-price-pill-neon">
                <span className="cta-price-label">Por apenas</span>
                <div className="cta-price-main">
                  <span className="cta-price-times">10x</span>
                  <span className="cta-price-value">19,99</span>
                </div>
                <span className="cta-price-note">Total 199,99</span>
              </div>
            </div>

            <p className="cta-disclaimer cta-disclaimer-right">
              Investimento único com parcelamento facilitado disponível.
            </p>
          </div>

        </div>
      </section >


      {/* BALÃO FIXO DE WHATSAPP (USANDO SEU CSS EXISTENTE .home-container7) */}
      < a
        href="https://wa.me/5517997510946?text=Quero%20saber%20mais%20sobre%20o%20programa%20de%20120%20dias"
        target="_blank"
        rel="noreferrer"
        className="home-container7"
      >
        <span className="home-text57">
          Falar com o Mateus no WhatsApp
        </span>
      </a >

      <Footer />
    </div >
  )
}

export default Home
