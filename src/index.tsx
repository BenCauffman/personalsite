import { createRoot } from "react-dom/client";

const App = () => {
  return <div>HI</div>;
};

const root = createRoot(document.getElementById("root")!);

root.render(<App />);
