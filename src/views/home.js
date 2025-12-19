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
        <div className="home-section-inner home-hero-grid">
          <div className="home-hero-content">
            <p className="home-hero-tag">Programa 120 Dias • Acompanhamento individual</p>

            <h1>
              O passo a passo para transformar seu shape em 120 dias
              <span className="hero-highlight"> sem bomba, dieta maluca ou planilha genérica.</span>
            </h1>

            <p className="home-hero-subtitle">
              Plano de treino e dieta feito para a sua rotina, com acompanhamento ativo no WhatsApp
              para você finalmente ver resultado de verdade no espelho.
            </p>

            <ul className="home-hero-bullets">
              <li>Diagnóstico 360° do seu ponto de partida e do seu objetivo.</li>
              <li>Dieta simples, barata e de fácil adesão, com substituições.</li>
              <li>Treino para naturais com progressão clara e vídeos de execução.</li>
              <li>Contato direto com Mateus para ajustes semanais.</li>
            </ul>

            <div className="home-hero-cta-row">
              <a href="#form" className="primary-cta">
                Quero começar minha transformação
              </a>
              <button className="secondary-cta">
                Ver resultados de alunos
              </button>
            </div>

            <p className="home-hero-proof">
              +X alunos acompanhados e resultados reais em até 120 dias.
            </p>
          </div>

          {/* se quiser, manter aqui uma imagem/colagem no lado direito */}
        </div>
      </section>



      {/* QUEM VAI TE ACOMPANHAR */}
      <section className="home-section home-about">
        <div className="home-section-inner">
          <div className="home-about-grid">
            <div className="home-about-text">
              <h2>Quem vai te acompanhar</h2>
              <h3 className="home-section-subtitle">
                Mateus Casarini – Especialista em Transformação Corporal
              </h3>
              <p>
                Com mais de 8 anos de experiência em treinamento personalizado e nutrição esportiva,
                Mateus Casarini já ajudou centenas de pessoas a emagrecer, ganhar massa e definir o corpo
                de forma saudável.
              </p>

              <div className="home-inline-photo">
                <img
                  src={process.env.PUBLIC_URL + '/img/imgmateus.JPG'}
                  alt="Mateus Casarini"
                />
              </div>

              <p>
                A metodologia une ciência do exercício, planejamento nutricional estratégico e
                acompanhamento humanizado para resultados consistentes e sustentáveis.
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


          </div>
        </div>
      </section >

      <section className="home-section home-pillars">
        <div className="home-section-inner">
          <h2>Os 4 pilares da sua transformação em 120 dias</h2>
          <p className="home-section-subtitle">
            O plano foi pensado para quem já tentou de tudo e precisa de acompanhamento sério,
            simples de seguir e com resultado real.
          </p>

          <div className="home-pillars-grid">
            <article className="home-pillar-card">
              <h3>Diagnóstico 360° do seu shape</h3>
              <p>
                Análise completa do seu histórico, rotina, ponto de partida e objetivo.
                Assim o plano é feito sob medida, e não com planilha genérica 3 de 10.
              </p>
            </article>

            <article className="home-pillar-card">
              <h3>Dieta simples e de fácil adesão</h3>
              <p>
                Cardápios baratos, com comida de mercado e várias opções de substituição,
                pensados para encaixar na sua rotina sem você viver pesando tudo.
              </p>
            </article>

            <article className="home-pillar-card">
              <h3>Treino para naturais que funciona</h3>
              <p>
                Protocolos focados em naturais, com exercícios simples, progressão clara e
                divisão ajustada ao seu tempo disponível, seja em casa ou academia.
              </p>
            </article>

            <article className="home-pillar-card">
              <h3>Acompanhamento ativo no WhatsApp</h3>
              <p>
                Suporte direto comigo para ajustes de treino e dieta, tirar dúvidas e não
                deixar você desistir no meio do caminho dos 120 dias.
              </p>
            </article>
          </div>
        </div>
      </section>


      {/* O QUE VOCÊ RECEBE */}
      < section className="home-section home-benefits" >
        <div className="home-section-inner">
          <h2>O que você recebe no programa</h2>
          <p className="home-section-subtitle">
            Tudo que você terá acesso dentro do projeto Transformação em 120 Dias.
          </p>

          <div className="home-benefits-grid">
            <article className="home-benefit-card">
              <div className="home-benefit-icon">
                <span>🏋️</span>
              </div>
              <h3 className="home-benefit-title">Fichas de Treinos</h3>
              <p className="home-benefit-text">
                Treinamento progressivo e ajustado para o seu perfil, tendo em vista seus pontos negativos e positivos.
              </p>
            </article>

            <article className="home-benefit-card">
              <div className="home-benefit-icon">
                <span>🍽️</span>
              </div>
              <h3 className="home-benefit-title">Dietas com Base na sua Ingestão Calórica</h3>
              <p className="home-benefit-text">
                Planos nutricionais totalmente pensados nas suas especificações metabólicas.
              </p>
            </article>

            <article className="home-benefit-card">
              <div className="home-benefit-icon">
                <span>📅</span>
              </div>
              <h3 className="home-benefit-title">Calculadora de Gasto Calórico</h3>
              <p className="home-benefit-text">
                A calculadora de gasto calórico tem como função tirar a média de quantas calorias você gasta por dia; dessa forma, conseguirei especificar mais ainda sua dieta.
              </p>
            </article>

            <article className="home-benefit-card">
              <div className="home-benefit-icon">
                <span>💬</span>
              </div>
              <h3 className="home-benefit-title">Materiais em Video, PDF e Suporte a Qualquer Momento</h3>
              <p className="home-benefit-text">
                Acesso a diversos conteúdos de treino, como vídeos de execução e aulas exclusivas. E estarei à disposição sempre que você necessitar.
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
      </section >

      {/* 6 ETAPAS DA TRANSFORMAÇÃO */}
      < section className="home-section home-steps" >
        <div className="home-section-inner">
          <h2>Como funciona o programa</h2>
          <p className="home-section-subtitle">
            Métodos eficazes e que realmente funcionam. A indústria fitness mentiu pra você...
          </p>

          <div className="home-steps-timeline">
            {/* 1 */}
            <div className="home-step">
              <div className="home-step-circle">
                <span className="home-step-icon">1</span>
              </div>
              <h3 className="home-step-title">Avaliação inicial</h3>
              <p className="home-step-text">
                Análise completa do seu perfil, objetivos, histórico e disponibilidade.
              </p>
            </div>

            {/* 2 */}
            <div className="home-step">
              <div className="home-step-circle">
                <span className="home-step-icon">2</span>
              </div>
              <h3 className="home-step-title">Definição de meta</h3>
              <p className="home-step-text">
                Estabelecemos metas reais com base nas suas possibilidades para os 120 dias.
              </p>
            </div>

            {/* 3 */}
            <div className="home-step">
              <div className="home-step-circle">
                <span className="home-step-icon">3</span>
              </div>
              <h3 className="home-step-title">Plano nutricional</h3>
              <p className="home-step-text">
                Dieta personalizada com cardápios semanais e lista de alimentos bons.
              </p>
            </div>

            {/* 4 */}
            <div className="home-step">
              <div className="home-step-circle">
                <span className="home-step-icon">4</span>
              </div>
              <h3 className="home-step-title">Planilha de treinos</h3>
              <p className="home-step-text">
                Treinos específicos com exercícios detalhados para você e progressão gradual sempre visando sua segurança.
              </p>
            </div>

            {/* 5 */}
            <div className="home-step">
              <div className="home-step-circle">
                <span className="home-step-icon">5</span>
              </div>
              <h3 className="home-step-title">Acompanhamento ativo</h3>
              <p className="home-step-text">
                Atualizações sobre seus treinos e sua alimentação. Disponibilidade a qualquer momento.
              </p>
            </div>

            {/* 6 */}
            <div className="home-step">
              <div className="home-step-circle">
                <span className="home-step-icon">6</span>
              </div>
              <h3 className="home-step-title">Ajustes e resultados</h3>
              <p className="home-step-text">
                Adaptações constantes sempre baseadas na sua evolução, dificuldades e rotina.
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
      </section >


      {/* DEPOIMENTOS / PROVA SOCIAL */}
      < section className="home-section home-results" >
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
                  src={process.env.PUBLIC_URL + '/img/result1.webp'}
                  alt="Resultado 1"
                  className="home-result-img"
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
                  src={process.env.PUBLIC_URL + '/img/result2.jpg'}
                  alt="Resultado 2"
                  className="home-result-img"
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
                  src={process.env.PUBLIC_URL + '/img/result3.jpg'}
                  alt="Resultado 3"
                  className="home-result-img"
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
      </section >

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
                <span className="cta-price-label">POR APENAS</span>
                <div className="cta-price-main">
                  <span className="cta-price-times">10x</span>
                  <span className="cta-price-value">19,99</span>
                </div>
                <span className="cta-price-note">TOTAL 199,99</span>
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
