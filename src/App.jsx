import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Difference from './components/Difference'
import About from './components/About'
import Services from './components/Services'
import Catalogue from './components/Catalogue'
import Process from './components/Process'
import Contact from './components/Contact'
import Footer from './components/Footer'

// App.jsx stays short on purpose: it just stacks the page's sections in
// order, so this file doubles as a table of contents for the whole site.
export default function App() {
  return (
    <div className="font-body">
      <Navbar />
      <main>
        <Hero />
        <Difference />
        <About />
        <Services />
        <Catalogue />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
