<template>
  <section id="contato" class="contact section">
    <div class="container">
      <h2 class="section-title">Entre em Contato</h2>
      <p class="section-subtitle">Pronta para transformar sua vida? Vamos conversar!</p>

      <div class="contact-content">
        <div class="contact-info">
          <div class="info-card">
            <div class="info-icon">📱</div>
            <h3>WhatsApp</h3>
            <p>(11) 99999-9999</p>
            <a href="https://wa.me/5511999999999" class="btn btn-whatsapp" target="_blank">
              Conversar no WhatsApp
            </a>
          </div>

          <div class="info-card">
            <div class="info-icon">📧</div>
            <h3>E-mail</h3>
            <p>contato@draanasilva.com.br</p>
            <a href="mailto:contato@draanasilva.com.br" class="btn btn-email">
              Enviar E-mail
            </a>
          </div>

          <div class="info-card">
            <div class="info-icon">📍</div>
            <h3>Consultório</h3>
            <p>Rua das Flores, 123<br>Vila Madalena - São Paulo/SP</p>
            <p class="clinic-hours">
              <strong>Horários:</strong><br>
              Segunda a Sexta: 8h às 18h<br>
              Sábados: 8h às 12h
            </p>
          </div>

          <div class="info-card">
            <div class="info-icon">🌐</div>
            <h3>Redes Sociais</h3>
            <div class="social-links">
              <a href="#" class="social-link instagram">
                <span>📷</span> Instagram
              </a>
              <a href="#" class="social-link linkedin">
                <span>💼</span> LinkedIn
              </a>
              <a href="#" class="social-link youtube">
                <span>📺</span> YouTube
              </a>
            </div>
          </div>
        </div>

        <div class="contact-form">
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <label for="name">Nome Completo</label>
              <input 
                type="text" 
                id="name" 
                v-model="form.name" 
                required 
                placeholder="Seu nome completo"
              >
            </div>

            <div class="form-group">
              <label for="email">E-mail</label>
              <input 
                type="email" 
                id="email" 
                v-model="form.email" 
                required 
                placeholder="seu@email.com"
              >
            </div>

            <div class="form-group">
              <label for="phone">Telefone/WhatsApp</label>
              <input 
                type="tel" 
                id="phone" 
                v-model="form.phone" 
                required 
                placeholder="(11) 99999-9999"
              >
            </div>

            <div class="form-group">
              <label for="subject">Assunto</label>
              <select id="subject" v-model="form.subject" required>
                <option value="">Selecione um assunto</option>
                <option value="consulta">Agendar Consulta</option>
                <option value="informacoes">Solicitar Informações</option>
                <option value="terapia-casal">Terapia de Casal</option>
                <option value="terapia-familiar">Terapia Familiar</option>
                <option value="outros">Outros</option>
              </select>
            </div>

            <div class="form-group">
              <label for="message">Mensagem</label>
              <textarea 
                id="message" 
                v-model="form.message" 
                rows="5" 
                placeholder="Conte-me um pouco sobre o que você está passando ou como posso te ajudar..."
              ></textarea>
            </div>

            <button type="submit" class="btn btn-primary btn-submit">
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      }
    }
  },
  methods: {
    submitForm() {
      // Aqui você pode implementar a lógica para enviar o formulário
      console.log('Formulário enviado:', this.form)
      alert('Mensagem enviada com sucesso! Entrarei em contato em breve.')
      
      // Resetar o formulário
      this.form = {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      }
    }
  }
}
</script>

<style scoped>
.contact {
  background: #f8fafc;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: start;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.info-card {
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
}

.info-card:hover {
  transform: translateY(-5px);
}

.info-icon {
  font-size: 3rem;
  margin-bottom: 15px;
}

.info-card h3 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 10px;
  color: #333;
}

.info-card p {
  color: #666;
  margin-bottom: 20px;
  line-height: 1.6;
}

.clinic-hours {
  font-size: 0.9rem;
  margin-top: 15px;
}

.btn-whatsapp {
  background: #25d366;
  color: white;
}

.btn-whatsapp:hover {
  background: #128c7e;
  box-shadow: 0 5px 15px rgba(37, 211, 102, 0.3);
}

.btn-email {
  background: #667eea;
  color: white;
}

.btn-email:hover {
  background: #5a6fd8;
  box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
}

.social-links {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px;
  border-radius: 8px;
  text-decoration: none;
  color: #666;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: #f0f0f0;
  color: #333;
}

.instagram:hover {
  background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
  color: white;
}

.linkedin:hover {
  background: #0077b5;
  color: white;
}

.youtube:hover {
  background: #ff0000;
  color: white;
}

.contact-form {
  background: white;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 25px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #333;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 12px 15px;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  font-family: inherit;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #667eea;
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.btn-submit {
  width: 100%;
  font-size: 1.1rem;
  padding: 15px;
}

@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .contact-form {
    padding: 30px 20px;
  }

  .social-links {
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }
}
</style>

