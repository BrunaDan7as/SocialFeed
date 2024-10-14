import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment() {
    return(
        <div className={styles.Comment}>
            <img src="https://github.com/BrunaDan7as.png" /> 
            
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Bruna Dantas</strong>
                            <time title="11 de maio às 08:13h" datetime="2022-05-11 08:13:30"> Cerca de 1h atrás </time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={20} />
                        </button>

                    </header>

                    <p>Muito bom Devon, parabéns!!</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp/>
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}