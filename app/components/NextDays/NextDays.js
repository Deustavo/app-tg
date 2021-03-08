import styles from "./NextDays.module.css";

export default function NextDays(props) {
    return (
        <div style={{ width: '100%', marginRight: !props.marginRight ? 12 : props.marginRight, marginTop: 24 }}>
            <h1 className="title-card" style={{ fontSize: 24 }}>{props.title}</h1>
            <div className={`${styles.cardNextDays} card`}>
                <p>{props.value}</p>
                <img src="soy.png" style={{ width: 64 }}/>
            </div>
        </div>
    )
}