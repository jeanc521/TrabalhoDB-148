import style from './App.module.css'
import { Menu } from './components/menu'
import photo from './assets/images/re.jpg'
import { useActionState, useState } from 'react'
// import {cards} from './assets/mock/cards'

function App() {
  const [aparece, setAparece] = useState(true)
  const [mostrarVideo, setMostrarVideo] = useState(false)

  const handleClicar = () => {
    setAparece(!aparece)
  }

  const handlevideo = () => {
    setMostrarVideo(!mostrarVideo)
  }

  return (
    <>
      <Menu option01='Home' option02='Videos' option03='Personagens' />
      <main>
        <section id='s1' className={style.s1} >
          <img className={style.img} src={photo} alt="" width={200} height={200} />
          <p>Goku Black, também conhecido como Black, é um ser maligno que aparece na linha do tempo de Trunks do Futuro.</p>
          {aparece && (
            <>
              <p className={style.p}>
                O poder surge em resposta a uma necessidade, não em resposta a um desejo.
              </p>
              <button onClick={handleClicar} className={style.button}>
                Clique para esconder
              </button>

            </>
          )}
          {!aparece && (
            <button onClick={handleClicar} className={style.button}>
              Clique para mostrar
            </button>
          )}
          {/* {cards.map((item, index) => {
          return(
            <div key={index}>
              <h5>{item.text}</h5>
              <img src={item} alt={item.text} />
            </div>
          )
         })} */}
        </section>
        <section id='s2' className={style.s2} >
          <h1 className={style.title}>VIDEO</h1>
          <div>
            <button onClick={handlevideo}  className={style.button}>
              {mostrarVideo ? 'esconder video' : 'mostrar video'}
            </button>

            {mostrarVideo && (
              <div>
                <iframe
                  src="https://github.com/jeanc521/TrabalhoDB-148"
                  width="560"
                  height="315"
                  title="Vídeo Goku Black"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture X-Frame-Options: DENY"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  )
}

export default App
