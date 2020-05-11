import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Button from 'components/Button';

// @ts-ignore
let container: HTMLElement = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  // @ts-ignore
  container = null;
});

it('renders with or without a name', () => {
  act(() => {
    render(
      <Button
        onClick={() => {
          return;
        }}
      >
        Botton Text
      </Button>,
      container
    );
  });
  expect(container.textContent).toBe('Botton Text');
});
