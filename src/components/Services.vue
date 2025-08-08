<template>
  <section id="servicos" class="services section">
    <div class="container">
      <h2 class="section-title">Meus atendimentos são focados em quem enfrenta quadros como os que vou te mostrar agora:</h2>
      
      <div class="brain-visual">
        <div class="brain-icon">🧠</div>
      </div>

      <div class="services-grid">
        <div class="service-card">
          <div class="service-icon">😰</div>
          <h3>Ansiedade</h3>
          <p>Sofre diariamente com episódios de ansiedade, estresse, ataques de pânico ou distúrbios do sono.</p>
        </div>

        <div class="service-card">
          <div class="service-icon">😔</div>
          <h3>Insegurança</h3>
          <p>Nunca se sente bom o suficiente? Taxa mediante os problemas? <strong>Não consegue dizer NÃO?</strong> Isso pode ser resolvido em poucos encontros.</p>
        </div>

        <div class="service-card">
          <div class="service-icon">💔</div>
          <h3>Abuso Sexual</h3>
          <p>Eu já estive no seu lugar e posso garantir: você pode <strong>reconstruir sua força</strong> e <strong>encontrar a paz</strong> que você merece, mesmo que tenha passado por esta situação terrível.</p>
        </div>

        <div class="service-card">
          <div class="service-icon">👨‍👩‍👧‍👦</div>
          <h3>Conflitos Familiares</h3>
          <p>• Você não reconhece mais seu filho? <strong>Ainda dá tempo de restaurar o vínculo.</strong><br>
          • Você não precisa passar pelo luto sozinho. Eu sei o quanto dói perder alguém que você ama.</p>
        </div>
      </div>

      <div class="cta-section">
        <a href="#contato" class="btn btn-secondary">Quero conhecer!</a>
      </div>

      <div class="comparison-section">
        <h3 class="comparison-title">O que este tratamento <span class="highlight-red">não é:</span></h3>
        
        <div class="comparison-grid">
          <div class="comparison-item">
            <span class="cross">❌</span>
            <p>Abordagem semanal</p>
          </div>
          <div class="comparison-item">
            <span class="cross">❌</span>
            <p>Desabafo ou conselhos</p>
          </div>
          <div class="comparison-item">
            <span class="cross">❌</span>
            <p>Coaching ou vidas passadas</p>
          </div>
          <div class="comparison-item">
            <span class="cross">❌</span>
            <p>Processo energético ou místico</p>
          </div>
        </div>
      </div>

      <div class="treatment-section">
        <h3 class="treatment-title">Tratamento Breve</h3>
        <div class="treatment-comparison">
          <div class="treatment-card terapia-jenifer">
            <h4>Terapia com Suanny</h4>
            <p>Todo o processo terapêutico acontece em poucas sessões. O tratamento é breve e focado para resolver seu conflito, te trazendo autonomia e liberdade emocional.</p>
          </div>
          <div class="treatment-card terapia-convencional">
            <h4>Terapia Convencional</h4>
            <p>Tratamento longo, acontece em período semanal, quinzenal ou mensal podendo prolongar por meses e normalmente dura anos.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Services'
}
</script>

<style scoped>
.services {
  background: white;
}

.brain-visual {
  display: flex;
  justify-content: center;
  margin: 40px 0 60px 0;
}

.brain-icon {
  font-size: 4rem;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
}

.service-card {
  background: #f8fafc;
  padding: 30px;
  border-radius: 15px;
  text-align: center;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  border-color: #667eea;
}

.service-icon {
  font-size: 3rem;
  margin-bottom: 20px;
}

.service-card h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 15px;
  color: #333;
}

.service-card p {
  color: #666;
  line-height: 1.6;
}

.cta-section {
  text-align: center;
  margin: 60px 0;
}

.comparison-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 50px;
  border-radius: 20px;
  color: white;
  text-align: center;
  margin: 60px 0;
}

.comparison-title {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 40px;
}

.highlight-red {
  color: #ff6b6b;
  font-weight: 700;
}

.comparison-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
}

.comparison-item {
  display: flex;
  align-items: center;
  gap: 15px;
  justify-content: center;
}

.cross {
  font-size: 1.5rem;
}

.comparison-item p {
  font-size: 1.1rem;
  font-weight: 500;
}

.treatment-section {
  margin-top: 60px;
}

.treatment-title {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 40px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.treatment-comparison {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}

.treatment-card {
  padding: 30px;
  border-radius: 15px;
  text-align: center;
}

.terapia-jenifer {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.terapia-convencional {
  background: #f8fafc;
  color: #333;
  border: 2px solid #e2e8f0;
}

.btn {
  border-radius: 10px;
}

.btn-pulse {
  position: relative;
  animation: pulse-shadow 2.5s infinite ease-in-out;
  /* Estilo base do botão */
  background-color: #e0245e; /* tom vermelho forte */
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 0.4rem;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.3s ease;
}

.btn-pulse:hover {
  background-color: #c81e50;
}

.treatment-card h4 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 20px;
}

.treatment-card p {
  line-height: 1.6;
}

@media (max-width: 768px) {
  .services-grid {
    grid-template-columns: 1fr;
  }

  .comparison-grid {
    grid-template-columns: 1fr;
  }

  .treatment-comparison {
    grid-template-columns: 1fr;
  }

  .comparison-section {
    padding: 30px 20px;
  }

  .comparison-title {
    font-size: 1.5rem;
  }
}
</style>

