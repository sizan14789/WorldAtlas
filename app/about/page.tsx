import countryData from '@/json/countryDataApi.json'
import CountryCard from '@/ui/countryCard/CountryCard'
import { CountryData } from '@/utils'

export const metadata = {
  title: "About",
  description: "About page of World Atlas"
}

const About = () => {
  return (
    <main className='my-auto'>
      <div className='secs'>
        <h2 className='text-3xl font-bold text-center mb-8'>Here are the Interesting Facts <br />
        we're proud of</h2>
        <div className='flex flex-wrap justify-center xl:justify-between gap-6'>
          {(countryData as CountryData[]).map((each) =>{
            return <CountryCard key={each.id} each={each} />
          })}
        </div>
      </div>
    </main>
  )
}

export default About