# WeWantWaste Skip Select Redesign

A modern, responsive redesign of the skip selection page for WeWantWaste, built with React and Tailwind CSS.

## Features

- Clean, modern UI design
- Fully responsive layout (mobile & desktop)
- Interactive animations with Framer Motion
- Clear pricing breakdown (including VAT)
- Accessible and user-friendly interface
- Real data fetching from WeWantWaste API

## Technologies Used

- React (Vite)
- Tailwind CSS
- Framer Motion (for animations)
- Axios (for API requests)
- React Icons

## Design Decisions

1. **Card-based Layout**: 
   - Used a grid of cards for skip options for better visual hierarchy
   - Clear differentiation between selected and unselected states

2. **Pricing Transparency**:
   - Displayed both pre-VAT and total prices
   - Clearly showed VAT percentage and amount

3. **Mobile-First Approach**:
   - Single column layout on mobile
   - Responsive grid on larger screens

4. **Interactive Elements**:
   - Subtle animations on hover/tap
   - Smooth transitions between states

5. **Accessibility**:
   - Sufficient color contrast
   - Clear visual feedback for interactions
   - Semantic HTML structure

## How to Run

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install