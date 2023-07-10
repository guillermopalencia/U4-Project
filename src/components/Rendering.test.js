import { getByRole, render, screen, cleanup } from '@testing-library/react';
import renderer  from 'react-test-renderer'
import TestThis from './TestComponent';

afterEach(() => {
    cleanup()
});

describe("Test Component Render Test", () =>{
    it("should render Test component", () => {
      const { getByRole } = render(<TestThis />)
      expect(getByRole('heading', {hidden: true})).toBeInTheDocument();
    })

    it("should find input fields", () =>{
      render(<TestThis />)
      const element = screen.getByRole
      expect(element('textbox', {hidden: true})).toBeInTheDocument()
    })
  })

describe("Snapshot testing", () => {
  it("Should match exisiting snapshot", () => {
    const element = renderer.create(<TestThis />)

    let checker = element.toJSON
    expect(checker).toMatchSnapshot()
  })
})