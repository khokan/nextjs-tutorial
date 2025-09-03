// components/ThemeToggle.js
"use client";

export default function ThemeToggle() {
  const themes = ["light", "dark"];

  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          />
        </svg>
        Theme
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-200 rounded-box z-[1] w-52 p-2 shadow"
      >
        {themes.map((theme) => (
          <li key={theme}>
            <button
              data-set-theme={theme}
              className="capitalize"
              onClick={() =>
                document.documentElement.setAttribute("data-theme", theme)
              }
            >
              {theme}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
