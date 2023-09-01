import Card from './components/Card'
import data from './data/data'
import animImg from './assets/images/animated-img.png'

const App = () => {
  const mapCards = data.map(data => {
    return (
      <Card key={data.key} {...data}/>
    )
  })

  return (
    <div>
      <div className="grid grid-cols-2 gap-4 bg-intro-image bg-cover bg-center h-screen">
        <div>
          <div  className='m-[70px] mt-32 bg-white h-96'>
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
      <div className="flex bg-red-700 h-96">
        <div className="bg-amber-500 w-60 m-10">
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default App