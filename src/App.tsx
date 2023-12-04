import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Snapshot } from "./Snapshot";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Snapshot />
    </QueryClientProvider>
  );
}

export default App;
