# ซอร์สโค้ดนี้ ใช้สำหรับเป็นตัวอย่างเท่านั้น ถ้านำไปใช้งานจริง ผู้ใช้ต้องจัดการเรื่องความปลอดภัย และ ประสิทธิภาพด้วยตัวเอง

# Pixel Avatar Generator

A retro-styled React Native app built with Expo that generates and downloads pixel art avatars. Features a nostalgic Famicom/NES-inspired user interface.

## Features

- Generate unique pixel art avatars using DiceBear API
- Download avatars in SVG format
- Cross-platform support (iOS, Android, Web)
- Retro gaming UI with classic Famicom styling

## Prerequisites

- Node.js (version 16 or newer)
- npm or yarn
- Expo CLI
- iOS Simulator (for iOS development)
- Android Studio (for Android development)

## Installation

1. Clone the repository:

```bash
   git clone https://github.com/warathepj/reactnative-avatar.git
```

````
2. Install dependencies:
```bash
npm install
```
3. Start the development server:
```bash
npx expo start

```

## Usage

- Enter a name in the input field to generate a unique pixel art avatar
- Press "SUBMIT" to update the avatar
- Use the download button to save the avatar as an SVG file
- On mobile devices, the app will use the native sharing functionality
- On web, the avatar will download directly to your downloads folder

## Project Structure

- `/app` - Main application screens and navigation
- `/components` - Reusable UI components
- `/constants` - Theme and styling constants
- `/assets` - Images, fonts, and other static assets

## Technologies

- React Native
- Expo
- expo-router (for navigation)
- expo-file-system (for file handling)
- expo-sharing (for mobile sharing)
- DiceBear API (for avatar generation)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [DiceBear](https://dicebear.com) for the pixel art avatar API
- [Expo](https://expo.dev) for the development framework
- Nintendo's Famicom for UI inspiration
````
