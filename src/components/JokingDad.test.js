import React from 'react';
import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import JokingDad from './JokingDad';

const mockJoke = 'A blind man walks into a bar. And a table. And a chair.';
const server = setupServer(
  http.get('https://icanhazdadjoke.com/', () => {
    return new HttpResponse({ body: { joke: mockJoke } });
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('loads and displays first joke', async () => {
  render(<JokingDad />);

  fireEvent.click(screen.getByText('Next'));

  await screen.findByRole('heading');

  expect(screen.getByRole('heading')).toHaveTextContent(mockJoke);
})