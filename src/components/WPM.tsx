import { useEffect, useState } from "react"

function WPM() {

const wordCollection = [
   
  "The sun sets beautifully over the mountains, casting a warm orange glow across the sky and reflecting in the calm river below.",
  "She baked a rich chocolate cake yesterday, decorating it with fresh strawberries and a drizzle of dark chocolate on top.",
  "Birds migrate during the winter, traveling thousands of miles across continents in search of warmer climates and food.",
  "Learning a new language is challenging but fun, especially when you practice speaking with native speakers and watch movies in that language.",
  "The river flows calmly through the forest, its clear water shimmering as sunlight filters through the dense canopy above.",
  "The dog barked loudly at the stranger, standing guard near the front gate with its tail stiff and ears perked up.",
  "The library was quiet and peaceful, filled with the faint smell of old books and the soft rustle of pages being turned.",
  "Rainbows appear after a storm, stretching across the sky in bright bands of color that seem to touch both ends of the horizon.",
  "The train arrived late at the station, its whistle echoing across the empty platform as passengers hurried to board.",
  "The wind howled through the trees, bending branches and scattering leaves across the deserted park path.",
  "I enjoy hiking on weekends, exploring new trails, observing wildlife, and taking photos of scenic landscapes along the way.",
  "Lightning lit up the night sky, followed by the loud crash of thunder that shook the windows of nearby houses.",
  "The city lights twinkled like stars at night, illuminating streets bustling with cars, people, and lively cafes.",
  "Dogs are very loyal animals, often forming deep bonds with their owners and showing affection in countless playful ways.",
  "The ocean waves crashed against the rocks with a thunderous roar, sending up sprays of salty mist into the cool sea air.",
  "The flowers bloomed beautifully in spring, carpeting the garden in vibrant colors and filling the air with a sweet fragrance.",
  "I enjoy painting landscapes in my free time, capturing the beauty of mountains, rivers, and forests on my canvas.",
  "The storm caused flooding in the city, leaving streets submerged, cars stranded, and residents scrambling to find higher ground.",
  "I found an old photograph in the attic, revealing memories of family gatherings and childhood moments long forgotten.",
  "The plane landed safely at the airport after a turbulent flight, bringing relief to passengers who had gripped their seats in fear.",
  "The forest was full of chirping birds, rustling leaves, and the occasional glimpse of deer moving silently among the trees.",
  "The snow covered the village in white, transforming rooftops, streets, and gardens into a sparkling winter wonderland.",
  "The lighthouse guided ships at night, its beam cutting through dense fog and treacherous waters to prevent accidents.",
  "The dog wagged its tail happily, running around the backyard with a toy clutched between its teeth.",
  "The river was calm and clear, reflecting the blue sky above and the surrounding trees swaying gently in the breeze.",
  "The children played in the park all day, laughing, running, and swinging on the swings under the warm afternoon sun.",
  "The stars twinkled in the night sky, forming constellations and telling ancient stories to anyone who cared to look.",
  "The mountains were covered in mist, giving them a mystical appearance as clouds drifted lazily around the peaks.",
  "The wind blew strongly across the field, bending tall grasses and carrying the scent of wildflowers through the air.",
  "The train whistle echoed through the valley, announcing its arrival as smoke trailed from its engine into the clear morning sky.",
  "The candle flickered in the dark room, casting dancing shadows on the walls and filling the space with a soft, warm glow.",
  "The riverbank was lined with willow trees, their long branches trailing in the water and creating a serene, picturesque scene."


]

const [sentence , setSentence] = useState("")
const [input , setInput] = useState("")
const [counter , setCounter] = useState(0)
const [time , setTime] = useState("")
const [wpm , setWpm] = useState(0)
const [start , setStart] = useState(false)
const [disable , setDisable] = useState(false)

const getter =()=>{
    let random = Math.floor(Math.random() * wordCollection.length)
    let select = wordCollection[random]
    setSentence(select)
    
}
useEffect(()=>{
    getter()
},[])

const inputHandler =(e: React.ChangeEvent<HTMLInputElement>)=>{
  setInput(e.target.value)
  setStart(true)
  const charInput = input.split("")
  let correct : number = 0
    correct = (charInput.length /5)/1
    if(counter == 60){
      setDisable(true)
    }
    setWpm(correct)
 
}
useEffect(()=>{
    
if(start){
      const timer = setTimeout(()=>{
    setCounter(counter + 1)
  } , 1000)

  if (counter === 60){
    setTime("times is up")
    setStart(false)
    return ()=> clearTimeout(timer)
  }
}

})
const reseter =()=>{
    setCounter(0)
    setInput("")
    setStart(false)
    setTime("")
}

  return (
    <>
    <h1 className="text-green-200 text-3xl sm:text-4xl md:text-6xl text-center font-bold">WPM typing speed ....</h1>
   <h2 className="text-center mt-12 text-2xl">{sentence}</h2>
   <h1 className="pl-12 text-center">WPM : {wpm} </h1>
   <input type="text " disabled={disable} value={input} placeholder="enter here" onChange={inputHandler} className="p-3 mt-4 w-full max-w-2xl mx-auto block bg-green-400 font-bold text-black rounded-md" />
    <button className="p-3 mt-4 w-24 text-3xl max-w-2xl mx-auto block bg-green-400 font-bold text-black rounded-full">{counter}</button>
    <h3 className="mt-2 text-base sm:text-lg px-4 text-center w-96 ">YOUR TEXT = {input}</h3>
    <h1 className="pl-12 text-center text-red-500">{time}</h1>
    <button onClick={reseter} className="p-3 mt-4 w-32 max-w-2xl mx-auto block bg-green-400 font-bold text-black rounded-md">reset</button>
    
    </>
  )
}

export default WPM