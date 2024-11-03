import About from './components/About';
import Comments from './components/Comments';
import Contacts from './components/Contacts';
import Faqs from './components/Faqs';
import Footer from './components/Footer';
import Header from './components/Header';
import Images from './components/Images';
import Intro from './components/Intro';
import Line from './components/Line';
import Portfolio from './components/Portfolio';
import Services from './components/Services';

function App() {

  return (
    <>
      <Header />
      <Intro />
      <Line />
      <div className="list flx_col" style={{ backgroundColor: 'var(--dark03)' }}>
        <Images />
        <About />
        <Services />
        <Portfolio />
        <Faqs />
        <Comments />
        <div className='flx_row jc_end' style={{ paddingInline: '8.5%', marginBottom: '100px' }}>
          <p className='text_back'>EGOR</p>
        </div>
      </div>
      <Line />
      <Footer />
      <Contacts />
    </>
  )
}

export default App