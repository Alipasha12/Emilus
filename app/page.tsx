'use client'
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import store from './redux/store'
import { Provider } from 'react-redux'

export default function Home() {
  return (
    <div>
      <Provider store={store}>
      <Navbar/>
      <Hero/>
      </Provider>
    </div>
  );
}
