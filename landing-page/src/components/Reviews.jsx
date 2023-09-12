const Reviews = ({name, img, review}) => {
    return (
        <div className="text-center bg-lime-900 w-1/2 m-auto rounded">
            <img className='w-3/12 m-auto p-5' src={img}/>
            <h1 className="p-3">{name}</h1>
            <p className="p-7 ">{review}</p>
        </div>

    )
}

export default Reviews

// Tailwind Stylings