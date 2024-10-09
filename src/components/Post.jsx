import styles from 'Post.module.css';

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
            </header>
        </article>
    )
}