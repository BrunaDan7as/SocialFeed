import { Header } from './components/Header';
import {Post} from './Post';
import './global.css';

export function App() {


  return (
    <>
    <Header/>

      <Post
        author = "Bruna Dantas"
        content = " tanto faz, estou cansada"
      />
      <Post 
      author = "Bruna Soares"
      content = "não quero esse nome na empresa"
      />
    </>
  )
}
 

