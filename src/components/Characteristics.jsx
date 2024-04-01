import { useState } from 'react';
import victory from '../assets/victory.jpg';

function Characteristics() {

  const[answer, setAnswer] = useState('');
  const[modal, showModal] = useState(false);


  const handleClickWrong = () => {
    setAnswer('');
    setTimeout(() => {
      setAnswer("Wrong. Please try again.");
    }, 1000)
  }

  const handleClickCorrect = () => {
    showModal(false);
    setAnswer('');
    setTimeout(() => {
      setAnswer("Correct! Polar bears are mammals!");
      showModal(true);
    }, 1000)
  }

  return (
    <div className='flex flex-col gap-4 text-center mx-auto py-4 bg-slate-200 items-center h-screen w-auto'>
      <h1 className='text-3xl shadow-5xl border-2 rounded-2xl p-2'>Characteristics</h1>
      <p className='text-3xl pt-10'>Which type of animal is a polar bear?</p>
      <button className='z-40 text-2xl border-solid border-2 border-slate-500 px-5 py-1 hover:bg-slate-500' onClick={handleClickWrong}>Bird</button>
      <button className='z-40 text-2xl border-solid border-2 border-slate-500 px-5 py-1 hover:bg-slate-500' onClick={() => handleClickWrong()}>Fish</button>
      <button className='z-40 text-2xl border-solid border-2 border-slate-500 px-5 py-1 hover:bg-slate-500' onClick={() => handleClickCorrect()}>Mammal</button>
      <button className='z-40 text-2xl border-solid border-2 border-slate-500 px-5 py-1 hover:bg-slate-500' onClick={() => handleClickWrong()}>Reptile</button>
      <button className='z-40 text-2xl border-solid border-2 border-slate-500 px-5 py-1 hover:bg-slate-500' onClick={() => handleClickWrong()}>Amphibian</button>
      {answer === '' ? (<p></p>) : (<p className='text-2xl'>{answer}</p>)}
      {modal && 
      (
      <section className='bg-slate-950 z-50 fixed inset-0'>
        <div className='text-2xl z-50 flex flex-col gap-4 min-h-screen justify-center items-center'>
          <p className='text-slate-100 uppercase text-3xl'>Correct!</p>
          <p className='text-slate-100 '>"Polar bears are mammals because they are warm-blooded and give birth to babies" -Bradley</p>
          <button  className='bg-red-600 font-bold text-slate-100 border-2 py-2 px-4 hover:opacity-60 my-5 z-50' onClick={() => showModal(false)}>Close</button>
          <img src={victory} alt="#1 Victory Royale" className='h-auto w-1/4 animate-bounce min-w-[300px]'/>
        </div>
       
      </section>
      )}
    </div>
  )
}

export default Characteristics
