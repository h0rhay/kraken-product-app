import { useLayout } from '../../context/LayoutContext';

export default function LayoutToggle() {
  const { isDesktopLayout, toggleLayout } = useLayout();

  return (
    <button
      className="layout-toggle"
      onClick={toggleLayout}
      title={isDesktopLayout ? 'Switch to mobile layout' : 'Switch to desktop layout'}
      aria-label={isDesktopLayout ? 'Switch to mobile layout' : 'Switch to desktop layout'}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {isDesktopLayout ? (
          // Mobile icon
          <path
            d="M17 2H7C5.89543 2 5 2.89543 5 4V20C5 21.1046 5.89543 22 7 22H17C18.1046 22 19 21.1046 19 20V4C19 2.89543 18.1046 2 17 2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ) : (
          // Desktop icon
          <>
            <rect
              x="2"
              y="3"
              width="20"
              height="14"
              rx="2"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 21H16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 17V21"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </>
        )}
      </svg>
    </button>
  );
}
