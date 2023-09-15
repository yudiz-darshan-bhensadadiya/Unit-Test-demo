import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CommonInput from '../CommonInput';


describe('CommonInput Component', () => {

  // Test case 1
  it('renders CommonInput with required props', () => {
    const label = 'Test Label';
    const placeholder = 'Test Placeholder';
    const name = 'testName';
    const type = 'text';

    render(
      <CommonInput
        label={label}
        placeholder={placeholder}
        name={name}
        type={type}
        isRequired={true}
        errorMessage="Test Error Message"
        register={() => {}}
      />
    );

    // check render component
    expect(screen.getByText(label)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument();
    expect(screen.getByText('*')).toBeInTheDocument();
  });

  // Test case 2
  it('handles onChange event', () => {
    const onChangeMock = jest.fn();
    const label = 'Test Label';
    const placeholder = 'Test Placeholder';
    const name = 'testName';
    const type = 'text';

    render(
      <CommonInput
        label={label}
        placeholder={placeholder}
        name={name}
        type={type}
        isRequired={true}
        errorMessage="Test Error Message"
        register={() => {}}
        onChange={onChangeMock}
      />
    );

    const input = screen.getByPlaceholderText(placeholder);

    fireEvent.change(input, { target: { value: 'New Value' } });

    expect(onChangeMock).toHaveBeenCalled();
  });

});