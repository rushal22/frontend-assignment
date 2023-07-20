"use client"
import Navbar from './layout/Navbar'
import Products from './components/Products'
import { QueryClientProvider ,QueryClient } from '@tanstack/react-query'

export default function Home() {

  const client = new QueryClient();
  return (
    <div>
      <Navbar/>
       <QueryClientProvider client={client}>
      <Products />
    </QueryClientProvider>
      </div>
  )
}
