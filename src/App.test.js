import { render, screen } from '@testing-library/react';
import Header from './components/Header';
import Footer from './components/Footer';


test('renders header', () => {
  render(<Header />);
  const headerElem = screen.getByText('Purchase');
  expect(headerElem).toBeInTheDocument();
});

test('renders Footer', () =>{
  render(<Footer/>);
  const headerElem = screen.getByText('© AUTO1 Group 2018');
  expect(headerElem).toBeInTheDocument();

})
