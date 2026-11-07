import { AppProviders } from "@/app/providers";
import { useThemeContext } from "@/app/providers/theme/ThemeProvider";

function AppContent() {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6">
      <h1>React Journey</h1>

      <p>Текущая тема: {theme}</p>

      <button onClick={toggleTheme} className="rounded-xl border px-5 py-3">
        Переключить тему
      </button>
    </main>
  );
}

export default function App() {
  return (
    <AppProviders>
      <AppContent />
    </AppProviders>
  );
}
