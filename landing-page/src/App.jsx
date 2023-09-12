import { Carousel } from "@material-tailwind/react"
import Card from './components/Card'
import Reviews from './components/Reviews'
import animImg from './assets/images/animated-img.png'


import cardData from './data/cardData'
import reviewsData from './data/reviewsData'

const App = () => {
  const mapCards = cardData.map(data => {
    return (
      <Card key={data.key} {...data}/>
    )
  })

    const mapReviews = reviewsData.map(data => {
      return (
        <Reviews key={data.key} {...data}/>
      )
    })

  return (
    <div>
      <div className="grid grid-cols-2 gap-4 bg-intro-image bg-cover bg-center h-screen">
        <div>
          <div className='m-[70px] mt-32 bg-white h-96 opacity-60'>
            intro content
          </div>
          <div className='text-center bg-lime-900 w-36 m-auto'>
            <button>Learn More</button>
          </div>
        </div>
        <div className='mt-40'>
          <img src={animImg}/>
        </div>
      </div>
      <div className="flex bg-slate-950 h-auto m-5">
        {mapCards}
      </div>
      <div>
        <Carousel loop={true}>
          {mapReviews}
        </Carousel>
      </div>
      <div className="flex bg-red-700 h-96">
        <form className="bg-amber-500 w-60 m-10">
          <p>input</p>
          <p>button</p>
        </form>
      </div>
    </div>
  )
}
export default App