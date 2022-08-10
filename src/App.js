import './App.css';
import IdCard from './components/IdCard'
import Greetings from './components/Greetings'
import Random from './components/Random'
import BoxColor from './components/BoxColor'
import CreditCard from './components/CreditCard'
import Rating from './components/Rating'
import DriverCard from './components/DriverCard'
import LikeButton from './components/LikeButton'
import Dice from './components/Dice';
import ClickablePicture from './components/ClickablePicture';
import Carousel from './components/Carousel'
import NumbersTable from './components/NumbersTable';
import Facebook from './components/Facebook';
import image1 from './assets/images/image1.jpg';
import image2 from './assets/images/image2.jpg';
import image3 from './assets/images/image3.jpg';
import image4 from './assets/images/image4.jpg';
import maxence from './assets/images/maxence.png';
import shades from './assets/images/maxence-glasses.png';
import emptyDice from './assets/images/dice-empty.png';
import dice1 from './assets/images/dice1.png';
import dice2 from './assets/images/dice2.png';
import dice3 from './assets/images/dice3.png';
import dice4 from './assets/images/dice4.png';
import dice5 from './assets/images/dice5.png';
import dice6 from './assets/images/dice6.png';


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
  const random = [
    {
      min:'',
      max:''
    },
  ]

  const boxColor = [
    {
      r:'',
      g:'',
      b:'',     
    },
  ]
  const creditCard = [
    {
      type: 'Visa',
      number: '0123456789018845',
      expirationMonth: '3',
      expirationYear: '2021',
      bank: "BNP",
      owner:'Maxence Bouret',
      bgColor:'#11aa99',
      color:'white'
    },
    {
      type: 'Master Card',
      number: '0123456789010995',
      expirationMonth: '3',
      expirationYear: '2021',
      bank: "N26",
      owner:'Maxence Bouret',
      bgColor:'#eeeeee',
      color:'#222222'
    },
    {
      type: 'Visa',
      number: '0123456789016984',
      expirationMonth: '12',
      expirationYear: '2019',
      bank: "Name of the bank",
      owner:'Firstname Lastname',
      bgColor:'#ddbb55',
      color:'white'
    },
  ]
  const rating = [
    {
      children:'',
    },
  ]
  const driverCard = [
    {
      name: 'Travis Kalanick',
      rating: '4.2',
      img: image3,
      car: {
        model:"Toyota Corolla Atlis",
        licensePlate: "C042DE"
      }
    },
    {
      name: 'Dara Khosrowshahi',
      rating: '4.9',
      img: image4,
      car: {
        model:"Audi A3",
        licensePlate: "BE33ER"
      },
    },
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
      <section className="cards">
        <Random random={random[0]}></Random>       
      </section>
      <section className="cards">
        <BoxColor boxColor={boxColor[0]}></BoxColor>
        <BoxColor boxColor={boxColor[0]}></BoxColor>        
      </section>
      <section className="creditCard">
        <CreditCard creditCard={creditCard[0]}></CreditCard>
        <CreditCard creditCard={creditCard[1]}></CreditCard>
        <CreditCard creditCard={creditCard[2]}></CreditCard>
      </section>
      <section className="cards">
        <Rating rating={rating[0]}></Rating>       
      </section>
      <section className="">
        <DriverCard driverCard={driverCard[0]}></DriverCard>
        <DriverCard driverCard={driverCard[1]}></DriverCard>
      </section>
      <section>
        <LikeButton />
      </section>
      <section>
      <ClickablePicture img={maxence} clickedImage={shades}/>
      </section>
      <section>
        <Dice emptyDice={emptyDice} dice1={dice1} dice2={dice2} dice3={dice3} dice4={dice4} dice5={dice5} dice6={dice6} />
      </section>
      <section>
      <Carousel
  images={[
    'https://randomuser.me/api/portraits/women/1.jpg',
    'https://randomuser.me/api/portraits/men/1.jpg',
    'https://randomuser.me/api/portraits/women/2.jpg',
    'https://randomuser.me/api/portraits/men/2.jpg'
  ]}
/>
      </section>
      <section>
      <NumbersTable limit={12} />
      </section>
      <section>
        <Facebook />
      </section>
    </div>
  );
}

export default App;
