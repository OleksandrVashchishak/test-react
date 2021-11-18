import imgTeam1 from './assets/img/item-img-1.png'
import imgTeam2 from './assets/img/item-img-2.png'
import imgTeam3 from './assets/img/item-img-3.png'
import imgTeam4 from './assets/img/item-img-4.png'
import imgTeam5 from './assets/img/item-img-5.png'
import Item from "./components/Item/Item";
import React, { useState } from 'react'

const App = () => {

  const [team] = useState([
    {
      id: 1,
      name: 'Jefe Bear ',
      position: 'CEO',
      description: 'Took a long position on commercial real estate in 2020. Not sure what went wrong. Somehow got promoted to boss bear and is in charge of leading all things Sad Bears related. ',
      image: imgTeam1
    },
    {
      id: 2,
      name: 'Picasso Bear',
      position: 'Art',
      description: 'Spent early cub years in his parent\'s cave painting on the walls. Just found out this year that you\'re not supposed to sniff the paint..has not stopped... Explains a lot about the art in the Sad Bears collection....',
      image: imgTeam2
    },
    {
      id: 3,
      name: 'Blue Bear',
      position: 'CTO',
      description: 'Heard about the chip shortage and started hoarding chips. No one is buying Lays Sour Cream & Onion, not sure if he got the wrong kind. Luckily he won\'t run out of snacks while he develops the tech for Sad Bears.',
      image: imgTeam3
    },
    {
      id: 4,
      name: 'Kosher Bear',
      position: 'Marketing',
      description: 'Started hoarding hand sanitizer during the pandemic, noticed it had alcohol, and tried drinking it. Hallucinated some cool ideas in the hospital. Now is responsible for marketing and community management.',
      image: imgTeam4
    },
    {
      id: 5,
      name: 'Nugget Bear',
      position: 'Marketing',
      description: 'Owned a business selling farm-raised salmon labeled as wild caught. Got arrested at the US/Mexico border trying to flee the country. Turning over a new leaf in marketing and community management.',
      image: imgTeam5
    },
  ])

  return (
    <div className="App team">
      <div className="container">
        <h1 className="team__title">Team</h1>
        <div className="team__wrapper">
          {team.map(item => (
            <Item key={item.id + item.name} name={item.name} position={item.position} description={item.description} image={item.image} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
