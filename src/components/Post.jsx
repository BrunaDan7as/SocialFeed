import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post() {
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                <img className={styles.avatar} src="https://github.com/BrunaDan7as.png" />
                <div className={styles.authorInfo}>
                    <strong>Bruna Dantas</strong>
                    <span>FullStack Developer</span>
                </div>
                </div>
                <time title="11 de maio às 08:13h" datetime="2022-05-11 08:13:30"> Publicado há 1h </time>
            </header >

             <div className={styles.content}> 
                <p>Fala galeraa (mão acenando)</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da RocketSeat</p>
                <p> <a href="">jae.design/doctorcare</a></p>
                <p><a href="">#novoprojeto</a>{' '}
                <a href=""> #nlw </a>{' '}
                <a href="">#rocketseat</a></p>
             </div>
            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea placeholder="Deixe um comentário"/>
                <footer>
                    <button type="submit">Comentar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment/>
                <Comment/>
                <Comment/>
            </div>
        </article>
    )
}