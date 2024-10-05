import { Header } from './components/Header';
import {Post} from './Post';
import './global.css';
import styles from './App.module.css';
import { Sidebar } from './components/Sidebar';

export function App() {


  return (
    <>
    <Header/>

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
        <Post
        author = "Bruna Dantas"
        content = " tanto faz, estou cansada"
      />
      <Post 
      author = "Bruna Soares"
      content = "não quero esse nome na empresa"
      />
        </main>
      </div>
    </>
  )
}
 

