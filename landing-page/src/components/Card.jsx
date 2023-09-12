const Card = ({name, img, desc}) => {
    return (
        <div className="bg-white h-auto w-96 rounded shadow-md m-10">
            <img className="rounded-t" src={img}></img>
            <h1 className="m-5">{name}</h1>
            <p className="m-5">{desc}</p>
        </div>
    )
}


export default Card