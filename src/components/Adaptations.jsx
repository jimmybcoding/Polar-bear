import paw from '../assets/paw.jpg'
import den from '../assets/den.jpg'


function Adaptations() {
  return (
    <div className='flex flex-col gap-4 text-center mx-auto py-4 bg-slate-200 items-center h-full'>
      <h1 className='text-3xl shadow-5xl border-2 rounded-2xl p-2'>Adaptations</h1>
      <p>Polar bears have many adaptations to their snowy, cold habitat.</p>
      <img src={paw} alt="A polar bear in a snowy environment" className='h-auto w-1/3 min-w-80 rounded-lg'/>
      <ul className='w-1/2 text-left'>
        <li className='py-4'><b className='text-2xl border-solid border-2 border-slate-500'>Thick Fur </b>Their fur is thicker than other bears. It is also reflects light. This makes polar bears look white and helps camouflage them amongst the snow</li>
        <li className='py-4'><b className='text-2xl border-solid border-2 border-slate-500'>Large Paws </b>Polar bears have huge paws! They act like snowshoes, spreading out the weight over soft snow and thin ice.</li>
        <li className='py-4'><b className='text-2xl border-solid border-2 border-slate-500'>Hibernation </b>Hibernation: Pregnant polar bears have a behavioral adaptation. They delay the development of their baby until conditions are good for giving birth, during winter in a snow den. This adaptation means that cubs are born when food is more available and provides them with a higher chance of survival.</li>
      </ul>
      <img src={den} alt="A polar bear den" className='h-auto w-1/2 min-w-80 rounded-lg'/>

    </div>
  )
}

export default Adaptations
