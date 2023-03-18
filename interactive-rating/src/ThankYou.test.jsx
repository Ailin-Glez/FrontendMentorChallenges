import { render, screen } from '@testing-library/react'
import ThankYou from "./ThankYou"

test('should render the component with the passed number', () => {
    const ratingNumber = 3
    render(<ThankYou number={ratingNumber} />)
    const message = screen.getByText(/you selected 3 out of 5/i)
    expect(message.textContent).toEqual(`You selected ${ratingNumber} out of 5`)
})
