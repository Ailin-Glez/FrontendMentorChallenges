import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { plansPrice } from './plans'
import Price from './Price'

describe('Price component', () => {

    const planData = {
        licence: 'Basic',
        storage: '500 GB',
        users: 2,
        sendUp: 3
    }

    it('should show the Basic annual price', () => {
        render(<Price className='card' plan={planData} planPrice={plansPrice['annually']} />)

        expect(screen.getByTestId('price')).toHaveTextContent('199.99')
    });

    it('should show the Basic month price', () => {
        render(<Price className='card' plan={planData} planPrice={plansPrice['monthly']} />)
        expect(screen.getByTestId('price')).toHaveTextContent('19.99')
    });
})