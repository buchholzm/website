import { useReducer } from 'react';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';

export default function DarkmodeToggle() {
  const [isDark, toggleDark] = useReducer((wasDark) => {
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', wasDark ? 'light' : 'dark');
    return !wasDark;
  }, document.documentElement.classList.contains('dark'));

  return (
    <button
      aria-label="Dunkelmodus ein/aus"
      onClick={toggleDark}
      className="neutral-cta-int p-2 rounded-full shadow-sm focus:outline-none focus:ring-4 focus:ring-neutral7"
    >
      {isDark ? (
        <MoonIcon className="h-6 w-6" />
      ) : (
        <SunIcon className="h-6 w-6" />
      )}
    </button>
  );
}
