import React from 'react'
import { Feature } from '../../components';
import './features.css';

const featuresData = [
  {
    title: 'Improving end disrupts instantly',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam fuga quos reprehenderit minus quod. Placeat accusantium, consectetur ipsum consequuntur id unde sapiente. Quisquam voluptatem ab animi!'
  },
  {
    title: 'Become the tended active',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam fuga quos reprehenderit minus quod. Placeat accusantium, consectetur ipsum consequuntur id unde sapiente. Quisquam voluptatem ab animi!'
  },
  {
    title: 'Message or am Nothing',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam fuga quos reprehenderit minus quod. Placeat accusantium, consectetur ipsum consequuntur id unde sapiente. Quisquam voluptatem ab animi!'
  },
  {
    title: 'Really boy law county',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam fuga quos reprehenderit minus quod. Placeat accusantium, consectetur ipsum consequuntur id unde sapiente. Quisquam voluptatem ab animi!'
  }
]


const Features = () => {
  return (
    <div className='gpt__features section__padding' id='features'>
      <div className='gpt__features-heading'>
        <h1 className='gradient__text'>Future is Now and you just need to realise it. Step into Future Today and make it Happen.</h1>
        <p>Request early access.</p>
      </div>
      <div className='gpt__features-cotainer'>
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
        {/* <Feature title='Improving end disrupts instantly' text='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam fuga quos reprehenderit minus quod. Placeat accusantium, consectetur ipsum consequuntur id unde sapiente. Quisquam voluptatem ab animi!'/>
        <Feature title='Become the tended active' text='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam fuga quos reprehenderit minus quod. Placeat accusantium, consectetur ipsum consequuntur id unde sapiente. Quisquam voluptatem ab animi!'/>
        <Feature title='Message or am Nothing' text='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam fuga quos reprehenderit minus quod. Placeat accusantium, consectetur ipsum consequuntur id unde sapiente. Quisquam voluptatem ab animi!'/>
        <Feature title='Really boy law county' text='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam fuga quos reprehenderit minus quod. Placeat accusantium, consectetur ipsum consequuntur id unde sapiente. Quisquam voluptatem ab animi!'/> */}
      </div>
    </div>
  )
}

export default Features
