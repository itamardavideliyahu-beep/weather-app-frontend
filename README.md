# Weather Dashboard - Frontend

A modern, responsive React application that displays real-time weather information for major cities around the world. This frontend microservice communicates with the Weather Backend API to fetch and display current weather data.

## Features

- Clean, modern user interface
- Dropdown selection for 4 major cities
- Real-time weather data display
- Temperature, humidity, and wind speed information
- Responsive design for mobile and desktop
- Loading states and error handling
- Beautiful gradient design

## Cities Supported

- New York
- Sydney
- Cape Town
- Bangkok

## Prerequisites

- Node.js 18 or higher
- npm (comes with Node.js)
- Weather Backend API running (see backend README)
- Docker (optional, for containerized deployment)

## Local Development Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Backend URL

Create a `.env` file in the project root:

```bash
cp .env.example .env
```

Edit the `.env` file to set your backend URL (default is localhost):

```
REACT_APP_BACKEND_URL=http://localhost:5000
```

### 3. Start Development Server

```bash
npm start
```

The application will open automatically in your browser at `http://localhost:3000`

## Docker Setup

### Build the Docker Image

```bash
docker build -t weather-frontend .
```

### Run the Container

```bash
docker run -p 3000:80 weather-frontend
```

The application will be available at `http://localhost:3000`

**Note:** When running in Docker, you may need to update the backend URL to match your backend container's network address.

## Production Build

To create an optimized production build:

```bash
npm run build
```

This creates a `build/` directory with optimized static files ready for deployment.

## Project Structure

```
weather-frontend/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── App.js             # Main React component
│   ├── App.css            # Styling
│   └── index.js           # Entry point
├── package.json           # Dependencies and scripts
├── Dockerfile            # Multi-stage Docker build
├── .env.example          # Environment variable template
├── .gitignore           # Git ignore rules
└── README.md            # This file
```

## Component Overview

### App.js

The main component that handles:

- City selection via dropdown
- API communication with backend
- Loading and error states
- Weather data display

## Configuration

### Environment Variables

- `REACT_APP_BACKEND_URL`: URL of the Weather Backend API
  - Development: `http://localhost:5000`
  - Production: Update to your deployed backend URL

## API Integration

The frontend expects the backend API to return weather data in this format:

```json
{
  "city": "New York",
  "temperature": 22.5,
  "description": "Clear sky",
  "humidity": 65,
  "wind_speed": 3.5
}
```

## UI Features

### Weather Display

- **City Name**: Displays the selected city
- **Temperature**: Shows current temperature in Celsius
- **Description**: Weather condition (e.g., "Clear sky", "Partly cloudy")
- **Humidity**: Percentage of humidity
- **Wind Speed**: Wind speed in meters per second

### User Experience

- Smooth animations when weather data loads
- Loading indicator during API calls
- Clear error messages if something goes wrong
- Disabled submit button while loading
- Responsive design adapts to screen size

## Available Scripts

### `npm start`

Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

### `npm run build`

Builds the app for production to the `build` folder

### `npm test`

Launches the test runner in interactive watch mode

## Styling

The application uses:

- Custom CSS with modern gradients
- Flexbox and Grid layouts
- Responsive media queries
- Smooth transitions and animations
- Purple/blue gradient theme

## Browser Support

Supports all modern browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Troubleshooting

### Backend Connection Issues

**Issue:** "Failed to fetch weather data" or network errors

**Solutions:**

1. Verify the backend is running at the configured URL
2. Check the `REACT_APP_BACKEND_URL` in your `.env` file
3. Ensure CORS is enabled on the backend
4. Check browser console for detailed error messages

### Port Already in Use

**Issue:** Port 3000 is already in use

**Solution:** Stop other applications using port 3000 or specify a different port:

```bash
PORT=3001 npm start
```

### Blank Page After Build

**Issue:** Production build shows blank page

**Solution:** Ensure the backend URL is correctly set for production environment

## Development Tips

1. **Hot Reload**: Changes to source files automatically refresh the browser
2. **Console Logs**: Check browser console for debugging information
3. **Network Tab**: Use browser DevTools Network tab to inspect API calls
4. **React DevTools**: Install React DevTools browser extension for component inspection

## Docker Multi-Stage Build

The Dockerfile uses a multi-stage build:

1. **Stage 1 (Build)**: Uses Node.js to build the React application
2. **Stage 2 (Serve)**: Uses Nginx to serve the static files

This results in a much smaller final image (~25MB vs ~1GB).

## Security Notes

- Never commit `.env` files to version control
- The `.env` file is included in `.gitignore`
- Environment variables starting with `REACT_APP_` are embedded in the build
- Only expose environment variables that are safe for client-side code

## Future Enhancements

Potential improvements for the app:

- Add weather icons for different conditions
- Show 5-day forecast
- Add more cities
- Implement geolocation to detect user's city
- Add dark mode toggle
- Save favorite cities
- Display local time for each city

## Contributing

When making changes:

1. Test locally with `npm start`
2. Verify Docker build works: `docker build -t weather-frontend .`
3. Ensure responsive design on mobile devices
4. Test error handling by stopping the backend
5. Update this README if adding new features

## License

This is a student project for DevOps training.
