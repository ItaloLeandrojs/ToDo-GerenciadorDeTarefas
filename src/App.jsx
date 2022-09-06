import styles from './app.module.css';
import { Header } from './components/header';
import './global.css';

export function App() {

  return (
    <div className={styles.wrapper}>
      <Header />
    </div>
    
  )
}

