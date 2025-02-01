export interface WeatherData {
    name: string;
    main: {
      temp: number;
      humidity: number;
    };
    weather: {
      description: string;
      icon: string; 
    }[];
    wind: {
      speed: number;
    };
}

export interface CardData {
  city: string;
  temperature: number;
  description: string;
  iconCode: string;
}
