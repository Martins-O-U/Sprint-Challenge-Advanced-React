import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('App', () => {
  it('want to see if H1 has a certain string', () => {
    const simulatedDOM = rtl.render(<App />);
    const h1 = simulatedDOM.queryByText(/Advanced React Sprint Challenge/i);
    expect(h1).toBeInTheDocument();
  })
})
