# TechLabs - Modern React Landing Page

A professional, modern landing page built with React, TypeScript, and Tailwind CSS. This application demonstrates advanced frontend development techniques and includes a functional API integration demo.

## 🚀 Features

### Landing Page Sections
- **Navigation Header**: Fixed navigation with smooth scrolling to sections
- **Hero Slider**: Animated image slider with navigation controls
- **About Us**: Company information with animated cards
- **Our Team**: Team member profiles with professional images
- **Contact Form**: Functional contact form that sends data to `api.aakashlabs.com`
- **Footer**: Comprehensive footer with social links and company information
- **Social Links**: Integrated social media links throughout the application

### API Demo Page
- **Weather API Integration**: Uses WeatherAPI.com to display real-time weather data
- **Search Functionality**: Search weather for any city worldwide
- **Popular Cities**: Quick access to weather for popular cities
- **Recent Searches**: Track and reuse recent city searches
- **Responsive Design**: Beautiful weather display with detailed information

## 🛠️ Technologies Used

- **React 19** - Latest React with modern features
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **React Router** - Client-side routing
- **Lucide React** - Beautiful icon library
- **Vite** - Fast build tool and development server

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd techlabs-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🔧 Configuration

### Weather API Setup
To make the weather API demo functional:

1. Sign up for a free API key at [WeatherAPI.com](https://www.weatherapi.com/)
2. Replace `YOUR_API_KEY` in `src/pages/ApiPage.tsx` with your actual API key
3. The API will then provide real-time weather data for any city

### Contact Form API
The contact form is configured to send data to `https://api.aakashlabs.com/contact`. Ensure this endpoint is available and properly configured.

## 📁 Project Structure

```
src/
├── pages/
│   ├── LandingPage.tsx    # Main landing page with all sections
│   └── ApiPage.tsx        # Weather API demo page
├── App.tsx                # Main app component with routing
├── main.tsx              # Application entry point
├── index.css             # Global styles and Tailwind imports
└── assets/               # Static assets
```

## 🎨 Design Features

### Modern UI/UX
- **Responsive Design**: Works perfectly on all device sizes
- **Smooth Animations**: Framer Motion powered animations
- **Professional Typography**: Clean, readable fonts
- **Color Scheme**: Professional blue-based color palette
- **Interactive Elements**: Hover effects and transitions

### Performance Optimizations
- **Lazy Loading**: Images and components load efficiently
- **Optimized Images**: High-quality Unsplash images
- **Smooth Scrolling**: Native smooth scroll behavior
- **Fast Loading**: Vite-powered fast development and build

## 🌟 Key Components

### Landing Page
- **Hero Slider**: Auto-advancing slider with manual controls
- **Team Section**: Professional team member cards
- **Contact Form**: Fully functional form with validation
- **Social Integration**: Multiple social media platforms

### API Demo
- **Weather Search**: Real-time weather data lookup
- **City Suggestions**: Popular cities for quick access
- **Detailed Weather Info**: Temperature, humidity, wind, visibility, etc.
- **Weather Icons**: Dynamic weather condition icons

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Deploy to Vercel/Netlify
The project is ready for deployment on modern hosting platforms:
- **Vercel**: Connect your GitHub repository
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use GitHub Actions for deployment

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Unsplash** for beautiful stock photos
- **WeatherAPI.com** for weather data
- **Lucide** for amazing icons
- **Tailwind CSS** for the utility-first framework
- **Framer Motion** for smooth animations

## 📞 Support

For support or questions:
- Email: info@techlabs.com
- Website: https://techlabs.com
- GitHub Issues: [Create an issue](https://github.com/your-repo/issues)

---

**Built with ❤️ using modern web technologies**
