import { render, screen } from '@testing-library/react';
import App from './App';

describe('has content', () => {
  it('App exists', () => {
      expect(App)
  })
})

const testDiv = () => {
  return render(
    <div data-testid='cool'>
      <h1>word</h1>
      <h2>hot</h2>
      <h3>fast</h3>
    </div>
  )
}

test('h1 content renders', () => {
  const { getByText } = testDiv()

  expect(getByText(/word/)).toBeInTheDocument()
  expect(getByText(/fast/)).toBeInTheDocument()
  expect(getByText(/hot/)).toBeInTheDocument()
})

test('div renders', () =>{

  const { getByTestId } = testDiv()

  expect(getByTestId(/cool/)).toBeInTheDocument()
  expect(getByTestId(/cool/)).toHaveTextContent(/hot/)
})
