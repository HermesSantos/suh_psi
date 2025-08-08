<template>
  <section id="inicio" class="hero">
    <div class="hero-background"></div>
    <div class="container">
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="hero-title">
            Até quando você vai carregar esse peso
            <span class="highlight">em silêncio?</span> 
          </h1>
          <p class="hero-subtitle">
           A partir dos princípios da neurociência afetiva, a terapia breve investiga a origem dos conflitos emocionais que afetam sua vida e desenvolve em você a Proteja seus relacionamentos, viva uma vida mais saudável e 
            <strong>autonomia emocional necessária para superá-los.</strong>
          </p>
          <div class="hero-buttons">
            <a href="#contato" class="btn btn-primary">Quero conhecer!</a>
            <div class="rating">
              <div class="stars">
                <span>⭐⭐⭐⭐⭐</span>
              </div>
              <span class="rating-text">5/5 - Ver avaliações</span>
            </div>
          </div>
        </div>
        <div class="hero-image">
          <img src="../assets/hero-image.jpg" alt="Dr. Ana Silva - Psicóloga" class="hero-photo">
          <div class="floating-elements">
            <div class="floating-heart">❤️</div>
            <div class="floating-brain">🧠</div>
            <div class="floating-peace">✌️</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero'
}
</script>

<style scoped>
.btn {
  border-radius: 10px;
}
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding-top: 80px;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><radialGradient id="a" cx="50%" cy="50%"><stop offset="0%" stop-color="%23ffffff" stop-opacity="0.1"/><stop offset="100%" stop-color="%23ffffff" stop-opacity="0"/></radialGradient></defs><circle cx="200" cy="200" r="100" fill="url(%23a)"/><circle cx="800" cy="300" r="150" fill="url(%23a)"/><circle cx="400" cy="700" r="120" fill="url(%23a)"/></svg>');
  opacity: 0.3;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  position: relative;
  z-index: 2;
}

.hero-title {
  font-size: 3.5rem;
  font-family: "Playfair Display", Sans-serif;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 20px;
}

.highlight {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-style: italic;
  font-family: "Playfair Display", Sans-serif;
  padding: .5rem;
}

.hero-subtitle {
  font-size: 1.3rem;
  margin-bottom: 20px;
  opacity: 0.9;
}

.hero-description {
  font-size: 1.1rem;
  margin-bottom: 40px;
  opacity: 0.8;
}

.hero-buttons {
  display: flex;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;
}

.btn-primary {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  font-size: 1.1rem;
  padding: 18px 35px;
}

.rating {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
}

.stars {
  font-size: 1.2rem;
}

.rating-text {
  font-size: 0.9rem;
  opacity: 0.8;
}

.hero-image {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.hero-photo {
  width: 400px;
  height: 400px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.floating-elements {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}

.floating-heart,
.floating-brain,
.floating-peace {
  position: absolute;
  font-size: 2rem;
  animation: float 3s ease-in-out infinite;
}

.floating-heart {
  top: 20%;
  right: 20%;
  animation-delay: 0s;
}

.floating-brain {
  bottom: 30%;
  left: 15%;
  animation-delay: 1s;
}

.floating-peace {
  top: 60%;
  right: 10%;
  animation-delay: 2s;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

@media (max-width: 768px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }

  .hero-description {
    font-size: 1rem;
  }

  .hero-buttons {
    justify-content: center;
  }

  .hero-photo {
    width: 300px;
    height: 300px;
  }
}
</style>

