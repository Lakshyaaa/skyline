# SkyLine - Smart Weather Forecasting

SkyLine is a smart weather forecasting Web Site using React + Vite. It fetches a 5-day weather forecast from the OpenWeatherMap API and displays temperature, humidity, and weather conditions for the entered city.

Features

         - Fetches 5-day weather forecast for any city
         - Displays temperature, humidity, and weather conditions
         - Uses OpenWeatherMap API for weather data
         - Built with React + Vite for fast and efficient performance

Installation & Setup

Prerequisites
         - Ensure you have Node.js and npm installed.

Clone the Repository
         - git clone https://github.com/yourusername/skyline.git
         - cd skyline

Install Dependencies
         - npm install

Set Up Environment Variables
         - Create a .env file in the root directory and add your OpenWeatherMap API key:
                  VITE_WEATHER_API_KEY=your_api_key_here

Run the Application
         - npm run dev

Usage
         - Enter a city name in the input field.
         - Click the Get Forecast button.
         - View the 5-day weather forecast, including:
                  Temperature
                  Humidity
                  Weather conditions
                  Weather icons (if available)