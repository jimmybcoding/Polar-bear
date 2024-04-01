import { useEffect, useState } from "react";

function Habitat() {

  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
   
  const tempConversion = (temp) => {
    return Math.round(temp - 273.15)
  }
  
  const link = 'https://api.openweathermap.org/data/2.5/weather?lat=58.769&lon=-94.173&appid=c70b6eb8fe897b3f62c09448aa161552'

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(link);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
  
  return (
    <>
      <div className='bg-habitat flex flex-col text-center py-4 items-center justify-center bg-cover bg-no-repeat bg-center bg-fixed min-h-[calc(100dvh)] h-full'>
        <h1 className='text-3xl shadow-5xl border-2 rounded-2xl p-2'>Habitat</h1>

        <section className="mt-10 mx-2">  
            <p className="text-xl font-bold">Polar bears live in the arctic in countries like Canada, Russia, USA(Alaska) and Greenland.</p>
            <p className="text-xl font-bold">Did you know the polar bear capital of the world is in Canada! It is in Churchill Manitoba.</p>
          { data && 
          <div>
            <p className="font-bold mt-5">The temperature in Churchill today is:</p>
            <div className="text-3xl font-bold">{tempConversion(data?.main?.temp)}C</div>
            <p className="font-bold">It feels like:</p>
            <div className="text-3xl font-bold">{tempConversion(data?.main?.feels_like)}C</div>
          </div>
          }
        </section>
      </div>
 
      <div className='bg-diet flex flex-col text-center py-4 items-center justify-center  bg-cover bg-no-repeat bg-center bg-fixed min-h-[calc(100dvh)] h-full'>
        <h1 className='text-3xl shadow-5xl border-2 rounded-2xl p-2'>Diet</h1>
        
        <section>
          <div className="mt-10 mx-2">
            <p className="text-xl font-bold">Polar Bears love to eat seals. They wait on sea ice for the seals to come up for air.</p>
            <p className="text-xl font-bold">Polar bears will also eat the carcasses of other mammals like whales and walruses.</p>
            <p className="text-xl font-bold">If food is scarce they will even eat birds and eggs.</p>
          </div>
        </section>
      </div>
    </>
  )
}

export default Habitat
