<template>
  <div id="app">
    <Header />
    <Hero />
    <About />
    <Services />
    <Testimonials />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Services from './components/Services.vue'
import Testimonials from './components/Testimonials.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Hero,
    About,
    Services,
    Testimonials,
    Contact,
    Footer
  }
}
</script>

<style>
#app {
  min-height: 100vh;
}
</style>

