import styles from './spinner.module.css';

export const Spinner = () => {
    return (
        <div className={styles.loading}><div className={styles.ldio}>
        <div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div>
        </div></div>
    )
}
