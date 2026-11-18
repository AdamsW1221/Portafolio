import { useEffect } from "react";
import { Home } from "./pages/Home";
import { startDailyKeepAlive } from "./lib/supabaseKeepAlive";

function App() {
  useEffect(() => {
    const stopKeepAlive = startDailyKeepAlive();
    return () => stopKeepAlive();
  }, []);

  return <Home />;
}

export default App;