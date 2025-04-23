import style from  './App.module.css'
import { Menu } from './components/menu'
import photo from './assets/images/re.jpg'
import {cards} from './assets/mock/cards'

function App() {

  return (
    <>
    <Menu  option01='Home' option02='Videos' option03='Personagens' />
    <main>
      <section id='s1' className={style.s1} >
      <p>Goku Black, também conhecido como Black, é um ser maligno que aparece na linha do tempo de Trunks do Futuro. A verdadeira identidade de Black é de um Zamasu de uma linha do tempo alternativa, que usou as Super Esferas do Dragão para trocar de corpos com Goku, e após a troca, matou Goku.</p>
         <img className={style.img}  src={photo} alt=""  width={300} height={300}/>
         
         <button>Saiba mais</button>
         {cards.map((item, index) => {
          return(
            <div key={index}>
              <h5>{item.text}</h5>
              <img src={item.img} alt={item.text} />
            </div>
          )
         })}
      </section>
      <section id='s2' className={style.s2} >
         <h1>Descrição</h1>
         <button onClick='' id='video'>Ver video</button>
      </section>
    </main>
    </>
  )
}

export default App
