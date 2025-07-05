
import About2 from './about2/About2'
import './App.css'
import WhyChooseUs from './components/choose/WhyChooseUs'
import Footer from './components/common/footer/Footer'
import EasyToBook from './components/easy-to-book/EasyToBook'
import BookingForm from './components/form/BookingForm'
import ServicesSection from './components/services/ServicesSections'
import Hero2 from './hero2/Hero2'
import Navbar2 from './navbar2/Navbar2'
import { Toaster } from 'react-hot-toast';

function App() {


  return (
    <>
      <Toaster
        position="bottom-right"
        reverseOrder={false}
        gutter={8}
      />

      {/* <Navbar /> */}
      {/* <Hero /> */}
      <Navbar2 />
      <br />
      <Hero2 />
      <About2 />
      <WhyChooseUs />
      <ServicesSection />
      <BookingForm />
      <EasyToBook />
      <Footer />
    </>
  )
}

export default App
