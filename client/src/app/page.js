import styles from './page.module.css'
import Navbar from './layout/Navbar'
import Products from './components/Products'


export default function Home() {
  return (
    <div>
      <Navbar/>
      <Products/>
      </div>
  )
}
