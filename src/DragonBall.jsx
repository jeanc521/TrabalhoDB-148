import { useEffect, useState } from 'react'
import style from './DragonBall.module.css'
import { apiDb } from './api/api'
import { Card } from './components/card'
import { Menu } from './components/menu'


export default function DragonBall(){
       const [data, setData] = useState([])
       const [page, setPage] = useState("")
       const [searchName, setSearchName] = useState("")
       
       const [erro, setErro] = useState(false)

       useEffect(() => {
        apiDb.get(`/characters/?page=${page}&nome=${searchName}`).then((res) => {
            setData(res.data.items)
        }).catch((error) => {
            if(error.res.status === 404) {
                setErro(true)
                setData([])
            }
            console.error(error)
        })
    }, [page, searchName])
    
    return(
        <section className={style.wrapPage}>
         <Menu option01={'Voltar para pagina principal'} />
            <h1 className={style.title}>Dragon Ball Api</h1>
            <input className={style.input} style={{ width: "280px", marginRight: "10px", padding: "10px" }}  type="text" placeholder='Digite um nome de personagem: ' value={searchName}  onChange={(e) => setSearchName(e.target.value)}/>
            {erro && <p>Pagina nao encontrada!</p>}
            
            <input className={style.input} style={{ width: "280px", padding: "10px" }}  type="text" placeholder='Digite uma pagina: ' value={page} onChange={(e) => setPage(e.target.value)} />
           
            <div className={style.wrapCard}>
                {data.map((item, index) => {
                    return(
                        <div key={index}>
                          <Card nome={item.nome} image={item.image}/>
                        </div>
                    )
                })}
            </div>
        </section>
        )
}
