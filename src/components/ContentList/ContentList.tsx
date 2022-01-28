import { IData } from "../Weather/Weather";
import styles from './contentList.module.css';

export function ContentList({data}: IData) {
    return (
        <ul className={styles.list}>
            <li className={styles.item}>
                <span className={styles.itemTitle}>Temperature:</span>
                <span className={styles.itemValue}>{Math.trunc((data.main.temp)*10)/10}</span>
                <span className={styles.measure}>℃</span>
            </li>
            <li className={styles.item}>
                <span className={styles.itemTitle}>Feels like:</span>
                <span className={styles.itemValue}>{Math.trunc((data.main.feels_like)*10)/10}</span>
                <span className={styles.measure}>℃</span>
            </li>
            <li className={styles.item}>
                <span className={styles.itemTitle}>Wind speed:</span>
                <span className={styles.itemValue}>{Math.trunc((data.wind.speed)*10)/10}</span>
                <span className={styles.measure}>m/sec</span>
            </li>
            <li className={styles.item}>
                <span className={styles.itemTitle}>Humidity:</span>
                <span className={styles.itemValue}>{data.main.humidity}</span>
                <span className={styles.measure}>%</span>
            </li>
            <li className={styles.item}>
                <span className={styles.itemTitle}>Pressure:</span>
                <span className={styles.itemValue}>{data.main.pressure}</span>
                <span className={styles.measure}>hPa</span>
            </li>
            <li className={styles.item}>
                <span className={styles.itemTitle}>Visibility:</span>
                <span className={styles.itemValue}>
                    {(data.visibility).toString().length > 3 
                        ? Math.trunc((data.visibility)/1000)
                        : data.visibility
                    }
                </span>
                <span className={styles.measure}>
                    {(data.visibility).toString().length > 3
                        ? 'km'
                        : 'm'
                    }
                </span>
            </li>
        </ul>
    )
}
