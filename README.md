# Shopping Cart Project

A modern e-commerce shopping cart application built with React, featuring user authentication
and a seamless shopping experience.

## Features

- User authentication (login/signup)
- Product catalog with categories
- Shopping cart functionality with local storage persistence
- Responsive design using Tailwind CSS
- Real-time cart updates
- Secure checkout process
- Toast notifications for user feedback

## Technologies Used

- React.js with TypeScript
- React Router for navigation
- Context API for state management
- Tailwind CSS for styling
- Shadcn UI components
- Vite for fast development and building

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

TODO:

1. Clone the repository:

```bash
   git clone https://github.com/warathepj/simple-login-gate.git

```

2. Install dependencies:

````bash
npm install
# or
yarn install```
3. Start the development server:
```bash
npm run dev
# oryarn dev
````

4. Open your browser and navigate to:`
http://localhost:8080`

## Project Structure

````
src/├── components/         # UI components
│   └── ui/             # Shadcn UI components├── context/            # React Context providers
├── hooks/              # Custom React hooks├── lib/                # Utility functions
├── pages/              # Page components├── types/              # TypeScript type definitions
├── App.tsx             # Main application component├── index.css           # Global styles
└── main.tsx            # Application entry point```
## Usage
### Adding Products
Products are defined in `src/products.ts`. To add more products, extend the array with
additional product objects:
```typescript
{  id: '3',
  name: 'Product Name',  price: 99.99,
  description: 'Product description',  imageUrl: 'https://example.com/image.jpg',
}
```
### Cart Functionality
The cart functionality is managed through the CartContext provider in
`src/context/CartContext.tsx`. It provides methods for:
- Adding items to cart
- Removing items from cart
- Updating item quantities
- Calculating totals
- Toggling cart visibility

## Building for Production
To build the application for production:
```bash
npm run build
# or
yarn build
```

The build artifacts will be stored in the `dist/` directory.

## License

This project is licensed under the MIT License - see the LICENSE file for details.




























































# Shopping Cart Project

A modern e-commerce shopping cart application built with React, featuring user authentication and a seamless shopping experience.

## Features

- User authentication (login/signup)
- Product catalog with categories
- Shopping cart functionality with local storage persistence
- Responsive design using Tailwind CSS
- Real-time cart updates
- Secure checkout process
- Toast notifications for user feedback

## Technologies Used

- React.js with TypeScript
- React Router for navigation
- Context API for state management
- Tailwind CSS for styling
- Shadcn UI components
- Vite for fast development and building

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
cd shopping-cart-project
````

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to:

```
http://localhost:8080
```

## Project Structure

```
src/
├── components/         # UI components
│   └── ui/             # Shadcn UI components
├── context/            # React Context providers
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── pages/              # Page components
├── types/              # TypeScript type definitions
├── App.tsx             # Main application component
├── index.css           # Global styles
└── main.tsx            # Application entry point
```

## Usage

### Adding Products

Products are defined in `src/products.ts`. To add more products, extend the array with additional product objects:

```typescript
{
  id: '3',
  name: 'Product Name',
  price: 99.99,
  description: 'Product description',
  imageUrl: 'https://example.com/image.jpg',
}
```

### Cart Functionality

The cart functionality is managed through the CartContext provider in `src/context/CartContext.tsx`. It provides methods for:

- Adding items to cart
- Removing items from cart
- Updating item quantities
- Calculating totals
- Toggling cart visibility

## Building for Production

To build the application for production:

```bash
npm run build
# or
yarn build
```

The build artifacts will be stored in the `dist/` directory.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
