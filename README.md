# React Practice — Deep-dive Learning Projects

Welcome! This repository is a hands-on React learning workspace containing short, focused projects and playground examples that demonstrate core and intermediate React skills. It documents what I built, why I built it, and how to run and inspect the code. If you're a recruiter or an interviewer, you'll see concrete, runnable examples of React concepts (hooks, component composition, props/state, forms, refs, effects, timers, and simple component design).

---

## At-a-glance summary

- Repository purpose: A personal learning lab for React where I implement small apps and components to explore and internalize modern React patterns.
- Primary focus areas: Functional components, React Hooks (useState, useEffect, useRef), component composition, controlled components (forms), list rendering, timers/intervals, and UI layout basics.
- Two main folders in this workspace:
  - `Practice/` — small starter app (Vite) demonstrating a simple site structure (Header, Food list, Footer).
  - `Playground/` — a collection of focused component demos and mini-apps (Stopwatch, Digital Clock, ToDo, Color Picker, Cards, Hooks demos, etc.).

This README explains the design intent, where to look for concepts, how to run the projects, and talking points for interviews.

---

## Why this repo exists (motivation)

Learning React by doing is the best way to internalize the mental model. Each component here was created to exercise a specific concept — e.g., a stopwatch to practice refs and intervals, a color picker to practice controlled inputs, and lists to practice keys and immutability. The goal is to be able to talk through trade-offs and implementation details in an interview.

---

## Project structure (top-level)

Root folder (this README sits here)

- Practice/ — small site built with Vite
  - src/
    - main.jsx — app entry
    - App.jsx — main composition of Header, Food, Footer
    - Header.jsx, Food.jsx, Footer.jsx — simple components demonstrating JSX, props-free composition, lists
    - index.css — app styles
  - index.html

- Playground/ — learning sandbox
  - src/
    - main.jsx — app entry
    - App.jsx — playground assembly and component imports
    - 00_digitalClock.jsx — digital clock using `useEffect` + interval
    - 00_StopWatch.jsx — stopwatch using `useRef` and `useEffect` for timing
    - 00_ToDoApp.jsx — a basic To-Do demonstrating controlled inputs and list operations
    - 00_ColorPickerApp.jsx — controlled color input example
    - 1_Components.jsx — simple presentational Card component
    - 2_Props.jsx — demonstrates props, conditional styling
    - 3_ListRendering.jsx — examples of list rendering and keys
    - 4_ClickEvents.jsx — click event handling example
    - 5_UseStateHook.jsx — multiple useState usage patterns
    - 6_OnChangeHandler.jsx — forms and controlled components
    - 7_UpdaterFunctions.jsx — state updater patterns and immutable updates
    - 8_UseEffectHook.jsx — useEffect usage patterns and dependency arrays
    - 9_useRefHook.jsx — useRef use-cases (DOM refs, mutable values)
    - App.css, Header.css, Card.css — supporting styles

---

## How to run (Windows - cmd.exe)

This project uses Vite and standard npm scripts. Use a command prompt (cmd.exe) for the commands below (this avoids common PowerShell execution policy pitfalls on Windows):

1. Open a command prompt in the repository root (the folder that contains `Practice/` and `Playground/`).

2. Install dependencies:

```cmd
npm install
```

3. Run the dev server (Vite):

```cmd
npm run dev
```

- Vite will serve the app and print a local URL (typically `http://localhost:5173/` or similar). Open that URL in your browser.

4. Build for production:

```cmd
npm run build
npm run preview
```

Troubleshooting (Windows):
- If you see an error about `npm.ps1` or script execution being disabled when running `npm` from PowerShell, either:
  - Use `cmd.exe` instead of PowerShell, or
  - Run PowerShell as Administrator and allow signed scripts: `Set-ExecutionPolicy RemoteSigned` (only if you understand the security implications).

---

## What to look at (component map + concepts to call out in interviews)

Below are specific files and the React concepts they were created to demonstrate. If you're interviewing me, these are the places I'd walk you through.

- `Playground/src/00_StopWatch.jsx` — advanced timing and refs
  - Uses `useRef` to store interval id and `startTime` to avoid rerenders from mutable values.
  - `useEffect` with cleanup to clear the interval when component unmounts or when `isRunning` changes.
  - Discuss trade-offs: setInterval vs requestAnimationFrame, accuracy, and debouncing updates.

- `Playground/src/00_digitalClock.jsx` — `useEffect` + interval and formatting
  - Demonstrates an interval that updates state every second and uses helper formatting functions for display.
  - Good place to discuss component re-renders and lightweight formatting logic.

- `Playground/src/00_ToDoApp.jsx` — controlled components & list management
  - Controlled <input> using `useState`.
  - Immutable updates with array spread and filter for delete operations.
  - Keys, accessibility considerations, and potential performance with long lists.

- `Playground/src/9_useRefHook.jsx` — `useRef` for DOM access
  - Shows `ref` attached to an <input/> and how to call `.focus()` and manipulate styles.
  - Conversation starter: when to use state vs ref, and avoiding re-renders.

- `Playground/src/3_ListRendering.jsx` — map, keys, and sorting
  - Example of mapping arrays to JSX, and the importance of keys for list items.

- `Playground/src/8_UseEffectHook.jsx` — dependency arrays and document side-effects
  - Demonstrates updating `document.title` and proper dependency arrays to avoid unnecessary runs.

- `Practice/src/App.jsx`, `Practice/src/Header.jsx`, `Practice/src/Food.jsx`, `Practice/src/Footer.jsx` — simple composition
  - Basic app layout to practice import/export, component composition and CSS scoping.

---

## Example code patterns (short snippets to illustrate depth)

- Typical useEffect with cleanup (Stopwatch-like pattern):

```js
useEffect(() => {
  if (isRunning) {
    intervalRef.current = setInterval(() => {
      setTime(Date.now() - startTimeRef.current);
    }, 10);
  }
  return () => clearInterval(intervalRef.current);
}, [isRunning]);
```

- Controlled input for ToDo items:

```js
const [newTask, setNewTask] = useState('');
<input value={newTask} onChange={e => setNewTask(e.target.value)} />
```

- Using useRef for DOM focus:

```js
const inputRef = useRef(null);
function focusInput() { inputRef.current?.focus(); }
<input ref={inputRef} />
```

---

## Learning outcomes (what I can speak about confidently)

- Understanding of functional components and when/why to use hooks instead of class components.
- Proper usage of `useState`, including updater functions for safe updates on prior state.
- `useEffect` lifecycle: mount, update, and cleanup patterns; dependency arrays and common pitfalls.
- `useRef` for DOM access and mutable values that don't trigger re-renders.
- Controlled components for forms, immutable state updates, and list rendering with `key` props.
- Basic performance considerations: minimizing re-renders, lifting state, memoization opportunities (React.memo, useMemo, useCallback) — next steps planned.

---

## Interview talking points (what I'd show and discuss)

1. Walk through `StopWatch.jsx` to explain timing accuracy and cleanup.
2. Show `ToDoApp.jsx` to explain controlled forms, validation, and immutability.
3. Discuss `useEffect` dependency array choices in `8_UseEffectHook.jsx`.
4. Explain `useRef` uses (DOM focus, preserving mutable values) in `9_useRefHook.jsx`.
5. Show small commit history or incremental edits if available — this helps demonstrate iterative learning.

---

## Code quality notes and future improvements

- Tests: Add unit tests (React Testing Library + Jest) for key components (ToDo operations, formatting helpers).
- Types: Add TypeScript for stronger contracts and better IDE support.
- Accessibility: Improve semantic markup and keyboard navigation in lists and forms.
- Performance: Add memoization to heavy subtrees and consider virtualization for long lists.

---

## If you want to run only a single folder

- To run the small `Practice` app, open `Practice/` and run the same Vite commands. Many examples are in `Playground/` which composes several demo components inside `Playground/src/App.jsx`.

---

## Contact / Next steps

- If you'd like a walkthrough, ping me here or open an issue in this repo requesting a short demo video or code review. I'm happy to explain any part of the codebase and the design decisions behind each component.

---

MIT © [Your Name]
