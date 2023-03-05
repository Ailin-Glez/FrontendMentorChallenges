import Price from './Price'
import { plansData, plansPrice } from './plans'
import { useState } from 'react'

function App() {
  const [isMonthly, setIsMonthly] = useState(false)
  console.log(isMonthly)
  return (
    <main>
      <h1>Our Pricing</h1>
      <div className='toggle-container'>
        <span>Annually</span>
        <input className='toggle' value={isMonthly} onChange={() => setIsMonthly(!isMonthly)} type="checkbox" name="toggle" id="toggle" />
        <span>Monthly</span>
      </div>
      <div className='plan-container'>
        {plansData.map((plan, i) => {
          const priceSelected = isMonthly ? 'monthly' : 'annually'
          return (<Price key={plan.licence} className= {i === 1 ? 'card selected' : 'card'}
            plan={plan} planPrice={plansPrice[priceSelected]}/>)
        })}
      </div>
    </main>
  )
}

export default App
