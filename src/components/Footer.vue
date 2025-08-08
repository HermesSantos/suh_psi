<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3>Suanny Araujo</h3>
          <p>Psicóloga especializada em terapia breve e eficaz. Transformando vidas através da neurociência afetiva.</p>
          <div class="social-icons">
            <a href="#" class="social-icon">📷</a>
            <a href="#" class="social-icon">💼</a>
            <a href="#" class="social-icon">📺</a>
          </div>
        </div>

        <div class="footer-section">
          <h4>Serviços</h4>
          <ul>
            <li><a href="#servicos">Terapia Individual</a></li>
            <li><a href="#servicos">Terapia de Casal</a></li>
            <li><a href="#servicos">Terapia Familiar</a></li>
            <li><a href="#servicos">Tratamento de Ansiedade</a></li>
          </ul>
        </div>

        <div class="footer-section">
          <h4>Links Úteis</h4>
          <ul>
            <li><a href="#inicio">Início</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#depoimentos">Depoimentos</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </div>

        <div class="footer-section">
          <h4>Contato</h4>
          <div class="contact-info">
            <p> (79) 9887-0131</p>
            <p> contato@suanny.com.br</p>
            <p> Rua das Flores, 123<br>Vila Madalena - São Paulo/SP</p>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="footer-divider"></div>
        <div class="footer-bottom-content">
          <p>&copy; 2025 Suanny Araujo - Psicóloga. Todos os direitos reservados.</p>
          <div class="footer-links">
            <a href="#">Política de Privacidade</a>
            <a href="#">Termos de Uso</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.footer {
  background: linear-gradient(135deg, #2d3748 0%, #1a202c 100%);
  color: white;
  padding: 60px 0 20px 0;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-bottom: 40px;
}

.footer-section h3 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.footer-section h4 {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 20px;
  color: #e2e8f0;
}

.footer-section p {
  color: #a0aec0;
  line-height: 1.6;
  margin-bottom: 20px;
}

.social-icons {
  display: flex;
  gap: 15px;
}

.social-icon {
  display: inline-block;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 1.2rem;
  transition: all 0.3s ease;
}

.social-icon:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.footer-section ul {
  list-style: none;
}

.footer-section ul li {
  margin-bottom: 10px;
}

.footer-section ul li a {
  color: #a0aec0;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-section ul li a:hover {
  color: #667eea;
}

.contact-info p {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.footer-bottom {
  margin-top: 40px;
}

.footer-divider {
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
  margin-bottom: 20px;
}

.footer-bottom-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}

.footer-bottom-content p {
  color: #a0aec0;
  margin: 0;
}

.footer-links {
  display: flex;
  gap: 20px;
}

.footer-links a {
  color: #a0aec0;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: #667eea;
}

@media (max-width: 768px) {
  .footer {
    padding: 40px 0 20px 0;
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: 30px;
    text-align: center;
  }

  .footer-bottom-content {
    flex-direction: column;
    text-align: center;
  }

  .social-icons {
    justify-content: center;
  }
}
</style>

