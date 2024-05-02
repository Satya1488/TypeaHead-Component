import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import TypeaHeadComponent from './components/TypeaHeadComponent';

test('renders App', () => {
  render(<App />);
  const headingElement = screen.getByText(/TypeaHead Component/i);
  expect(headingElement).toBeInTheDocument();
});

test('renders TypeaHeadComponent', () => {
  render(<TypeaHeadComponent />);
  const placeholderElement = screen.getByPlaceholderText("Type something here.....");
  expect(placeholderElement).toBeInTheDocument()
})


test('renders Typeahead component with placeholder', () => {
  const options = ["Samsung", "Apple", "Nokia"];
  const onSelect = jest.fn();

  render(<TypeaHeadComponent options={options} onSelect={onSelect} />);

  const inputElement = screen.getByPlaceholderText('Type something here.....');
  expect(inputElement).toBeInTheDocument();

  fireEvent.change(inputElement, { target: { value: 'Apple' } });

});