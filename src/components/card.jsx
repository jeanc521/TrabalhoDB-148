import style from './Card.module.css'


export const Card = ({nome, image}) => {
    return(
        <>
            <h5 className={style.titlecard}>{nome}</h5>
            <img className={style.imgcard} src={image} alt={nome} />
        </>
    )
}