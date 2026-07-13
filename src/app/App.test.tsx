import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { App } from '@app/App';
import { I18nProvider } from '@app/providers/I18nProvider';

function renderApp() {
  return render(
    <I18nProvider>
      <App />
    </I18nProvider>,
  );
}

describe('App', () => {
  it('renders the premium game shell', () => {
    renderApp();

    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    expect(screen.getByRole('group', { name: /tablero de letras/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /ver repositorio en github/i })).toHaveAttribute(
      'href',
      'https://github.com/NaktoG/premium-hangman-app',
    );
  });

  it('allows switching language', async () => {
    const user = userEvent.setup();
    renderApp();

    await user.click(screen.getByRole('button', { name: /cambiar a inglés/i }));

    expect(screen.getByText(/premium game/i)).toBeInTheDocument();
  });

  it('accepts a correct first letter', async () => {
    vi.spyOn(Math, 'random').mockReturnValue(0);
    const user = userEvent.setup();
    renderApp();

    const firstInput = screen.getByLabelText(/letter 1|letra 1/i);
    await user.type(firstInput, 'j');

    expect(firstInput).toHaveValue('J');
    vi.restoreAllMocks();
  });
});
