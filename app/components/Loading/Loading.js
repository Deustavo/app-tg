import styles from './Loading.module.css'

export default function Loading() {
    return(
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100vw', height: '100vh', flexDirection: 'column'}}>
            <p style={{ marginBottom: 24 }}>Calculando estimativa</p>
            <div className={styles.ldsSpinner}>
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
            </div>
        </div>
    )
}