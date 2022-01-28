import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { useWeatherData } from "../hooks/useWeatherData";
import { setLocation } from "../store/store";
import { Weather } from "./Weather/Weather";

export function ContainerWeather() {
  const { data, isLoading, error, setError } = useWeatherData();

  const dispatch = useDispatch();
  const [value, setValue] = useState('');  

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    let clearValue = (event.target.value).replace(/[^a-zа-яё]/gi, '');
    setValue(clearValue);
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (value.length !== 0) {
      dispatch(setLocation(value));
    };
    setError(false);
  }

  return (
    <Weather
      handleSubmit={handleSubmit}
      onChange={handleChange} 
      value={value} 
      data={data}
      error={error}
      isLoading={isLoading}
    />
  )
}