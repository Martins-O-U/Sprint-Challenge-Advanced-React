import React from 'react';
import "@testing-library/jest-dom";
import * as rtl from '@testing-library/react';
import App from '../App';
// import SoccerPlayer from './SoccerPlayers'

afterEach(rtl.cleanup);

it('renders "Female Soccer" text', () => {
    const wrapper = rtl.render(<App />);
    const hasSoccerText = wrapper.queryByText(/Female Soccer/i);
  });


  it('renders "Players" text', () => {
    const wrapper = rtl.render(<App />);
    expect(wrapper.getByText(/players/i));
  });

