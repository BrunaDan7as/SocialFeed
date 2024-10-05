import styles from './Sidebar.module.css';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img src="https://images.unsplash.com/photo-1727121798717-5dd950142c00?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  />

            <div className={StyleSheet.profile}>
                <strong>Bruna Dantas</strong>
                <span>FullStack Developer</span>
            </div>
            <footer>
                <a href="#">
                    Edite seu perfil
                </a>
            </footer>
        </aside>
    )
}