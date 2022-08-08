
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import Data from './Data';

function App() {
  const cards= Data.map( card_info => {
    return(
      <Card 
      {...card_info}
      />
    )
  })
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <section className='card-lists'>
        {cards}
      </section>

    </div>
  );
}

export default App;
