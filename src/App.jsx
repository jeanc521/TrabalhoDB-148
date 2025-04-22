import style from  './App.module.css'
import { Menu } from './components/menu'
import photo from './assets/images/goku.jpg'

function App() {

  return (
    <>
    <Menu option01='Sessao 1' option02='Sessao 2' option03='Sessao 3'/>
    <main>
      <section id='s1' className={style.s1} >
         <img className={style.img}  src={photo} alt=""  width={1080} height={800}/>
      </section>
    </main>
    </>
  )
}

export default App
