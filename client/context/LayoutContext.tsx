import React, { createContext, useContext, useState, useEffect } from 'react';

interface LayoutState {
  isDesktopLayout: boolean;
}

interface LayoutActions {
  toggleLayout: () => void;
}

interface LayoutContextValue extends LayoutState, LayoutActions {}

const LayoutContext = createContext<LayoutContextValue | undefined>(undefined);

interface LayoutProviderProps {
  children: React.ReactNode;
}

const LAYOUT_STORAGE_KEY = 'octopus-desktop-layout';

export function LayoutProvider({ children }: LayoutProviderProps) {
  const [isDesktopLayout, setIsDesktopLayout] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(LAYOUT_STORAGE_KEY);
    if (stored) {
      setIsDesktopLayout(stored === 'true');
    }
  }, []);

  const toggleLayout = () => {
    setIsDesktopLayout(prev => {
      const newValue = !prev;
      localStorage.setItem(LAYOUT_STORAGE_KEY, String(newValue));
      return newValue;
    });
  };

  return (
    <LayoutContext.Provider value={{ isDesktopLayout, toggleLayout }}>
      {children}
    </LayoutContext.Provider>
  );
}

export function useLayout(): LayoutContextValue {
  const context = useContext(LayoutContext);
  if (context === undefined) {
    throw new Error('useLayout must be used within a LayoutProvider');
  }
  return context;
}
