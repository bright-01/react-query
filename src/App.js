import React from 'react';
import './App.css';
import MainProducts from './components/MainProducts';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';

export default function App() {
  return <QueryClientProvider client={QueryClient}>
    <MainProducts/>
    <ReactQueryDevtools initialIsOpen={true}/>
  </QueryClientProvider>;

}
