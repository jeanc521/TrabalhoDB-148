import style from './Card.module.css'


export const card = ({nome, image}) => {
    return(
        <>
            <h5 className={style.title}>{nome}</h5>
            <img className={style.imgacard} src={image} alt={nome} />
        </>
    )
}