# Images Folder Structure

This folder contains all images organized by purpose and screen size for optimal development workflow.

## Folder Structure

```
src/assets/images/
├── common/                    # Shared images across the app
│   ├── mobile/               # Mobile-specific common images
│   ├── tablet/               # Tablet-specific common images
│   └── desktop/              # Desktop-specific common images
├── screens/                  # Screen-specific images
│   ├── auth/                 # Authentication screens
│   │   ├── mobile/          # Mobile auth images
│   │   ├── tablet/          # Tablet auth images
│   │   └── desktop/         # Desktop auth images
│   ├── dashboard/            # Dashboard screens
│   │   ├── mobile/          # Mobile dashboard images
│   │   ├── tablet/          # Tablet dashboard images
│   │   └── desktop/         # Desktop dashboard images
│   ├── profile/              # Profile screens
│   │   ├── mobile/          # Mobile profile images
│   │   ├── tablet/          # Tablet profile images
│   │   └── desktop/         # Desktop profile images
│   ├── settings/             # Settings screens
│   │   ├── mobile/          # Mobile settings images
│   │   ├── tablet/          # Tablet settings images
│   │   └── desktop/         # Desktop settings images
│   └── onboarding/           # Onboarding screens
│       ├── mobile/          # Mobile onboarding images
│       ├── tablet/          # Tablet onboarding images
│       └── desktop/         # Desktop onboarding images
├── icons/                     # Icon assets
│   ├── navigation/          # Navigation icons
│   ├── actions/             # Action icons (edit, delete, etc.)
│   └── status/              # Status icons (success, error, etc.)
├── logos/                    # Logo assets
│   ├── brand/               # Main brand logos
│   └── variants/            # Logo variants (light, dark, etc.)
├── backgrounds/              # Background images
│   ├── gradients/           # Gradient backgrounds
│   └── patterns/            # Pattern backgrounds
├── avatars/                  # User avatar images
│   ├── defaults/            # Default avatar images
│   └── placeholders/        # Placeholder avatars
└── illustrations/            # Illustration assets
    ├── empty-states/        # Empty state illustrations
    ├── success/             # Success illustrations
    └── error/               # Error illustrations
```

## Usage Guidelines

### Screen-Specific Images
- Use responsive images based on screen size
- Mobile: Optimized for small screens (320px - 768px)
- Tablet: Optimized for medium screens (768px - 1024px)
- Desktop: Optimized for large screens (1024px+)

### Image Optimization
- Use WebP format when possible for better compression
- Provide fallbacks in PNG/JPG format
- Optimize images for web (compress without losing quality)
- Use appropriate dimensions for each screen size

### Naming Conventions
- Use kebab-case for file names (e.g., `user-profile-icon.svg`)
- Include screen size in filename when needed (e.g., `hero-banner-mobile.jpg`)
- Use descriptive names that indicate purpose (e.g., `empty-state-no-data.svg`)

### Import Examples
```javascript
// Common images
import logo from '../assets/images/logos/brand/main-logo.svg';
import defaultAvatar from '../assets/images/avatars/defaults/user-default.png';

// Screen-specific images
import authBackground from '../assets/images/screens/auth/desktop/auth-bg.jpg';
import dashboardIcon from '../assets/images/icons/navigation/dashboard.svg';

// Responsive images
import heroImageMobile from '../assets/images/screens/onboarding/mobile/hero-image.jpg';
import heroImageTablet from '../assets/images/screens/onboarding/tablet/hero-image.jpg';
import heroImageDesktop from '../assets/images/screens/onboarding/desktop/hero-image.jpg';
```
