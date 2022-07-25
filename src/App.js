import './App.css';
import IdCard from './components/IdCard'
import Greetings from './components/Greetings'
import image1 from './assets/images/image1.jpg';
import image2 from './assets/images/image2.jpg';

function App() {
  const clients = [
    {
      lastName: 'Doe',
      firstName: 'John',
      gender: 'Male',
      height: '178',
      birth: "1992-07-14",
      picture:image1,
    },
    {
      lastName: 'Delores',
      firstName: 'Obrien',
      gender: 'female',
      height: '178',
      birth: "1988-05-11",
      picture:image2,
    } 
  ]
  const greetings = [
    {
      lang:'en',
      children:'Josep'
    },
    {
      lang:'de',
      children:'Puma'
    }
  ]
  return (
    <div className="App">
          <h1>Lab webpage</h1>
      <section className="cards">
        <IdCard client={clients[0]}></IdCard>
        <IdCard client={clients[1]}></IdCard>
      </section>
      <section className="cards">
        <Greetings greetings={greetings[0]}></Greetings>
        <Greetings greetings={greetings[1]}></Greetings>
      </section>
    </div>
  );
}

export default App;
