import { render, screen, fireEvent } from '@testing-library/react';
import LayoutToggle from './LayoutToggle';
import { LayoutProvider } from '../../context/LayoutContext';

const LayoutToggleWithContext = () => (
  <LayoutProvider>
    <LayoutToggle />
  </LayoutProvider>
);

describe('LayoutToggle', () => {
  it('renders without crashing', () => {
    render(<LayoutToggleWithContext />);
  });

  it('displays the toggle button', () => {
    render(<LayoutToggleWithContext />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('has accessible label for mobile layout initially', () => {
    render(<LayoutToggleWithContext />);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label', 'Switch to desktop layout');
  });

  it('toggles aria-label when clicked', () => {
    render(<LayoutToggleWithContext />);
    const button = screen.getByRole('button');

    expect(button).toHaveAttribute('aria-label', 'Switch to desktop layout');

    fireEvent.click(button);
    expect(button).toHaveAttribute('aria-label', 'Switch to mobile layout');

    fireEvent.click(button);
    expect(button).toHaveAttribute('aria-label', 'Switch to desktop layout');
  });
});
