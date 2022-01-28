import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { IData } from "../components/Weather/Weather";
import { RootState } from "../store/store";

const api = {
    url: `http://api.openweathermap.org/data/2.5/`,
    key: `40c21a2013ada1779d25b9efb54161bc`,
  }
  

export function useWeatherData() {
    const [ data, setData ] = useState<IData>();

    const [ error, setError ] = useState(false);
    const [ isLoading, setIsLoading ] = useState(true);

    const location = useSelector<RootState, string>(state => state.location);

    useEffect(() => {
        setIsLoading(true);

        axios.get(`${api.url}weather?q=${location}&units=metric&appid=${api.key}`)
            .finally(() => { setIsLoading(false) })
            .then((resp: IData) => {
                console.log('from request: ',resp);
                setData(resp);
            })
            .catch(function (error: any) {
                console.error('Error: ', error);
                setError(true);
            });
    }, [location])

    return {
        data,
        isLoading,
        error,
        setError
    }
}