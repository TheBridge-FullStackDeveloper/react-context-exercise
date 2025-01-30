import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ApiCallContextProvider } from './context/ApiContext.jsx'
import ListView from './ListView.jsx'
import CharacterDetails from './components/CharacterDetails.jsx'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { BrowserRouter, Routes, Route } from "react-router";

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ApiCallContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ListView />} />
            <Route path="/:id" element={<CharacterDetails />} />
          </Routes>
        </BrowserRouter>
      </ApiCallContextProvider>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  </StrictMode>,
)
