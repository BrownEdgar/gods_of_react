import './About.css'

export default function About({ title }) {
  return (
    <div className='About'>
      <h1 className='About__title'>{title}</h1>
      <div className='About__content'>
        <img src="./images/photo.jpg" />
        <div className="About__mainText">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Commodi autem fugit beatae harum ea saepe, magnam qui ut
            quam architecto quo, quis possimus obcaecati quisquam
            adipisci veritatis ipsam eius! Necessitatibus ad nihil quo
            cupiditate velit veniam minus, quidem facilis ullam.
          </p>

          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Deleniti saepe vel deserunt, expedita eos doloremque rerum
            magnam quo provident eum suscipit itaque ipsam illo libero
            beatae pariatur placeat officiis, hic, tenetur nemo sequi
            inventore dolorum. Ipsam error omnis sunt quisquam corrupti
            quaerat doloribus natus minus deleniti accusamus. Nulla
            soluta corrupti voluptas, numquam iste, voluptatibus
            doloremque et rem dicta quod ex?
          </p>

          <ul>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
          </ul>
        </div>

      </div>
    </div>
  )
}