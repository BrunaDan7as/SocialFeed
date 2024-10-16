import { Header } from './components/Header';
import {Post} from '../src/components/Post';
import './global.css';
import styles from './App.module.css';
import { Sidebar } from './components/Sidebar';

// author: {avatar_url: "", name: "", role: ""}
// publishedAt: Date
// content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/BrunaDan7as.png',
      name: 'Bruna Dantas',
      role: 'FullStack Developer'
    },
    content: [
     {type: 'paragraph', content: 'Fala galeraa 👋'},
     {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da RocketSeat'},
      {type: 'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2022-05-11 20:00:00')

  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/BrunaDan7as.png',
      name: 'Bruna Dantas',
      role: 'FullStack Developer'
    },
    content: [
     {type: 'paragraph', content: 'Fala galeraa 👋'},
     {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da RocketSeat'},
      {type: 'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2022-05-15 20:00:00')

  }
]

export function App() {


  return (
    <>
    <Header/>

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
        {posts.map(post => {
          return (
            <Post
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          )
        })}
        </main>
      </div>
    </>
  )
}
 

