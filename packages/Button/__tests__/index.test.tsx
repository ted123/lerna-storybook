import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup, fireEvent, screen } from '@testing-library/react';
import { Button } from '../src';

const Log = () => {
  console.log('I am Clicked hooray');
};

export const StandardButton = () => (
  <div>
    <Button buttonType="standard" onClick={Log}>
      I am a Button
    </Button>
  </div>
);
export const PrimaryButton = () => (
  <div>
    <Button buttonType="primary" onClick={Log} aria-label="primary">
      I am a button
    </Button>
  </div>
);
export const SuccessButton = () => (
  <div>
    <Button buttonType="success" onClick={Log} aria-label="success">
      I am a button
    </Button>
  </div>
);
export const DangerButton = () => (
  <div>
    <Button buttonType="danger" onClick={Log} aria-label="danger">
      I am a button
    </Button>
  </div>
);
export const DisabledButton = () => (
  <div>
    <Button
      buttonType="primary"
      onClick={Log}
      aria-label="primary"
      disabled={true}
    >
      I am a disabled button
    </Button>
  </div>
);

describe('initial test for loader component', () => {
  afterEach(cleanup);

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button buttonType="primary" />, div);
    expect(div).toBeTruthy();
  });

  it('should render correctly', () => {
    const standard = render(<StandardButton />);
    const primary = render(<PrimaryButton />);
    const danger = render(<DangerButton />);
    const sucess = render(<SuccessButton />);
    const disabled = render(<DisabledButton />);
    expect(primary).toBeTruthy();
    expect(danger).toBeTruthy();
    expect(standard).toBeTruthy();
    expect(sucess).toBeTruthy();
    expect(disabled).toBeTruthy();
  });
  it('should click successfully', () => {
    render(<DangerButton />);
    fireEvent.click(screen.getByTestId('button'));
    expect(screen).toBeTruthy();
  });
});
