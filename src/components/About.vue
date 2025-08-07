<template>
  <section id="sobre" class="about section">
    <div class="container">
      <div class="about-content">
        <div class="about-image">
          <img src="../assets/about-image.jpg" alt="Dr. Ana Silva - Psicóloga" class="about-photo">
        </div>
        <div class="about-text">
          <h2 class="section-title">Quem sou eu?</h2>
          <div class="credentials">
            <div class="credential-item">
              <span class="number">12 anos</span>
              <span class="text">estudando a mente humana</span>
            </div>
            <div class="credential-item">
              <span class="number">+ 35 cursos</span>
              <span class="text">de especializações e formações</span>
            </div>
          </div>
          
          <div class="about-details">
            <div class="detail-item">
              <span class="icon">🎯</span>
              <p>Atuo em meu consultório orientando pessoas sobre a <strong>capacidade da mente humana</strong> e como podemos desenvolver <strong>uma vida melhor</strong> quando usamos as <strong>ferramentas certas</strong>!</p>
            </div>
            
            <div class="detail-item">
              <span class="icon">👨‍👩‍👧‍👦</span>
              <p>Mãe do <strong>Miguel</strong> e do <strong>Joaquim</strong></p>
            </div>
            
            <div class="detail-item">
              <span class="icon">🛡️</span>
              <p>Defensora da <strong>infância sem violência</strong></p>
            </div>
            
            <div class="detail-item">
              <span class="icon">💬</span>
              <p>Facilitadora em <strong>Comunicação Não Violenta</strong> e <strong>Formada pelo API (Attachment Parenting International)</strong> em Apego Seguro</p>
            </div>
            
            <div class="detail-item">
              <span class="icon">🎓</span>
              <p>Pós-graduada em <strong>Educação Parental, Neuropsicologia, Neuropsicopedagogia, TRI aplicada a crianças adolescentes e casais</strong> e <strong>Psicanalista</strong>.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
.about {
  background: #f8fafc;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 80px;
  align-items: center;
}

.about-image {
  display: flex;
  justify-content: center;
}

.about-photo {
  width: 350px;
  height: 450px;
  border-radius: 20px;
  object-fit: cover;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.about-text {
  padding: 20px 0;
}

.section-title {
  text-align: left;
  margin-bottom: 40px;
}

.credentials {
  display: flex;
  gap: 40px;
  margin-bottom: 40px;
}

.credential-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.number {
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 5px;
}

.text {
  font-size: 0.9rem;
  color: #666;
  font-weight: 500;
}

.about-details {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.detail-item {
  display: flex;
  align-items: flex-start;
  gap: 15px;
}

.icon {
  font-size: 1.5rem;
  flex-shrink: 0;
  margin-top: 2px;
}

.detail-item p {
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
}

.detail-item strong {
  color: #333;
  font-weight: 600;
}

@media (max-width: 768px) {
  .about-content {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }

  .section-title {
    text-align: center;
  }

  .about-photo {
    width: 280px;
    height: 350px;
  }

  .credentials {
    justify-content: center;
    gap: 30px;
  }

  .number {
    font-size: 2rem;
  }

  .detail-item {
    text-align: left;
  }
}
</style>

