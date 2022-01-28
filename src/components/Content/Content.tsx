import { formatCountry } from '../../utils/formatCountry';
import { formatDate } from '../../utils/formatDate';
import { formatString } from '../../utils/formatString';
import styles from './content.module.css';
import { ContentList } from '../ContentList/ContentList';
import { IData } from '../Weather/Weather';

export function Content({data}: IData) {
    return (
        <div className={styles.content}>
            <h2 className={styles.location}>
                {data.name}
                <span className={styles.country}>{formatCountry(data.sys.country)}</span>
            </h2>
            <div className={styles.date}>
                <span className={styles.dateParag}>
                    {formatDate(new Date()).month + ' ' + formatDate(new Date()).date + ', ' + formatDate(new Date()).year}
                </span>
                <span className={styles.dateParag}>
                    {formatDate(new Date()).day}
                </span>
            </div>
            <div className={styles.weather}>
                {data.weather &&
                    data.weather.map((elem: any) => {
                        return <span className={styles.weatherDescr} key={elem.id}>
                                 {formatString(`${elem.description}`)}
                               </span>
                    })
                }
            </div>
            <ContentList data={data} />
        </div>
    )
}
