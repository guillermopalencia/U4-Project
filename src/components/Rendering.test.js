import { getByRole, render, screen, cleanup } from '@testing-library/react';
import { clean } from 'gh-pages';
import TestThis from './TestComponent';

afterEach(() => {
    cleanup()
});

describe("Home Component Render Test", () =>{
    it("should render Home component", () => {
      const { getByRole } = render(<TestThis />)
      expect(getByRole('heading', {hidden: true})).toBeInTheDocument();
    })

    it("should find input fields", () =>{
      render(<TestThis />)
      const element = screen.getByRole
      expect(element('textbox', {hidden: true})).toBeInTheDocument()
    })
  })