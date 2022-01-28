import { ChangeEvent, FormEvent } from "react";
import styles from './weather.module.css';
import { Content } from "../Content/Content";
import { getLocalTime } from "../../utils/getLocalTime";
import { Spinner } from "../Spinner/Spinner";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export interface IWeather {
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onClick?: () => void;
    handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
    value: string;
    data?: IData;
    error: boolean;
    isLoading: boolean;
}

export interface IData {
    data: {
        main: {
            temp: number,
            feels_like: number,
            humidity: number,
            pressure: number,
        },
        wind: {
            speed: number,
        },
        visibility: number,
        name: string,
        sys: {
            country: string
        },
        weather: [],
        timezone: number;
    }
}

export function Weather({onChange, handleSubmit, value, data, error, isLoading}: IWeather) {
    const location = useSelector<RootState, string>(state => state.location);

    return (
        <div className={
            data &&
                (getLocalTime(data.data.timezone) >= 7) && (getLocalTime(data.data.timezone) < 19)
                ? styles.wrapperDay
                : styles.wrapperNight
        }>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder={location}
                    className={styles.formInput}
                    defaultValue={value}
                    onChange={onChange}
                />
                <button className={styles.formBtn} type="submit"></button>
            </form>
            {error && 
                <p className={styles.errorMessage}>
                    Request failed. Enter correct data and try again!
                </p>
            }
            {isLoading && <Spinner />}
            {!error && data && <Content data={data.data} />}
        </div>

    )
}
