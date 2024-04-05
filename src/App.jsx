import Header from './components/header/header'
import Hero from './components/header/hero'
import Introduction from './components/pages/home/introduction'
import ServicesSnippet from './components/pages/home/services-Snippet'
import PortfolioSnippet from './components/pages/home/portfolioSnippet'
import Faqs from './components/pages/home/faqs'
import Testimonial from './components/pages/home/testimonial'
import Footer from './components/footer/footer'

function App() {
  return (
    <>
    <Header/>
    <Hero/>
    <Introduction/>
    <ServicesSnippet/>
    <PortfolioSnippet/>
    <Faqs/>
    <Testimonial/>
    <Footer/>
    </>
  )
}

export default App
