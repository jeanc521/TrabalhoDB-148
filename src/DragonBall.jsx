import { use, useState } from 'react'
import style from './DragonBall.module.css'
import { apiDb } from './api/api'
import {Card} from './components/Card'

export default function Req(){
       const [data, setData] = useState([])
       const [page, setPage] = useState([''])
       const [nome, setNome] = useState()

       const [erro,  setErro] = useState(false)
    
    return(
        <section className={style.wrapPage}>
            <h1 className={style.title}>Dragon Ball Api</h1>
            <input type="text" placeholder='Digite um personagem' value={nome}  onChange={(e) => setNome(e.target.value)}/>
            {erro && <p>Pagina nao encontrada!</p>}

            <input type="text" placeholder='Digite uma pagina' value={page} onChange={(e) => setPage(e.target.value)} />
            <div className={style.wrapCard}>
                {data.map((item, index){
                    return(
                        <div>
                          <h5>{item.page}</h5>
                          <Card nome={item.nome} imagem={item.imagem}/>
                        </div>
                    )
                })}
            </div>
        </section>
        )
}
