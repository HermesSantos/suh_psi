<template>
  <section id="depoimentos" class="testimonials section">
    <div class="container">
      <h2 class="section-title">Veja o que diz quem já fez a Terapia:</h2>
      <p class="section-subtitle">Com base em + de 90 avaliações</p>
      
      <div class="stars-rating">
        <span class="stars">⭐⭐⭐⭐⭐</span>
      </div>

      <div class="testimonials-grid">
        <div class="testimonial-card">
          <div class="testimonial-header">
            <div class="avatar">
              <span>M</span>
            </div>
            <div class="user-info">
              <h4>Michele Romanzini Mariano</h4>
              <span class="date">2025-05-24</span>
              <div class="rating">⭐⭐⭐⭐⭐</div>
            </div>
            <div class="google-icon">G</div>
          </div>
          <p class="testimonial-text">
            Conheci a Dr. Suanny por meio do processo de Reintegração Implícita, que procurei em um momento em que me sentia muito irritada e estressada no dia a dia. Desde o primeiro encontro, percebi uma mudança significativa na minha capacidade de lidar com as situações do cotidiano.
          </p>
          <button class="read-more">Consulte Mais informação</button>
        </div>

        <div class="testimonial-card">
          <div class="testimonial-header">
            <div class="avatar">
              <span>S</span>
            </div>
            <div class="user-info">
              <h4>Stefani Pereira</h4>
              <span class="date">2025-05-21</span>
              <div class="rating">⭐⭐⭐⭐⭐</div>
            </div>
            <div class="google-icon">G</div>
          </div>
          <p class="testimonial-text">
            "Hoje, eu assumo a minha vida. Depois de enfrentar dores profundas, medos silenciosos e perdas que pareciam me desabar, eu renasci. A terapia com a Dr. Suanny me trouxe uma nova perspectiva e ferramentas para lidar com os desafios da vida."
          </p>
          <button class="read-more">Consulte Mais informação</button>
        </div>

        <div class="testimonial-card">
          <div class="testimonial-header">
            <div class="avatar">
              <span>A</span>
            </div>
            <div class="user-info">
              <h4>Ana Sanches</h4>
              <span class="date">2025-04-24</span>
              <div class="rating">⭐⭐⭐⭐⭐</div>
            </div>
            <div class="google-icon">G</div>
          </div>
          <p class="testimonial-text">
            Fui para terapia justamente por acreditar na profissional que iria me atender, por ter referência da qualidade do serviço que seria a mim dedicado e por estar vivendo um loop de ansiedade que não conseguia quebrar sozinha.
          </p>
          <button class="read-more">Consulte Mais informação</button>
        </div>
      </div>

      <div class="testimonial-navigation">
        <button class="nav-btn prev" @click="previousTestimonial">‹</button>
        <button class="nav-btn next" @click="nextTestimonial">›</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Testimonials',
  data() {
    return {
      currentTestimonial: 0
    }
  },
  methods: {
    previousTestimonial() {
      // Lógica para navegar para o depoimento anterior
      console.log('Previous testimonial')
    },
    nextTestimonial() {
      // Lógica para navegar para o próximo depoimento
      console.log('Next testimonial')
    }
  }
}
</script>

<style scoped>
.testimonials {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.section-title,
.section-subtitle {
  color: white;
}

.stars-rating {
  text-align: center;
  margin-bottom: 50px;
}

.stars {
  font-size: 2rem;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
}

.testimonial-card {
  background: white;
  color: #333;
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.testimonial-card:hover {
  transform: translateY(-5px);
}

.testimonial-header {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
}

.avatar {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 1.2rem;
}

.user-info {
  flex: 1;
}

.user-info h4 {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 5px;
}

.date {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 5px;
  display: block;
}

.rating {
  font-size: 0.9rem;
}

.google-icon {
  width: 30px;
  height: 30px;
  background: #4285f4;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
}

.testimonial-text {
  line-height: 1.6;
  margin-bottom: 20px;
  color: #555;
}

.read-more {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 25px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.read-more:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(240, 147, 251, 0.3);
}

.testimonial-navigation {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.nav-btn {
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-btn:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: scale(1.1);
}

@media (max-width: 768px) {
  .testimonials-grid {
    grid-template-columns: 1fr;
  }

  .testimonial-card {
    margin: 0 10px;
  }
}
</style>

