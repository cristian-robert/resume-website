/**
 * Clerk appearance object to match site theme.
 * - Semi-transparent dark background
 * - White text
 * - Border radius 0.5rem
 * - Subtle border
 * - Backdrop blur (where supported)
 */
import type { Appearance } from "@clerk/types";

export const clerkAppearance: Appearance = {
  baseTheme: undefined,
  variables: {
    colorPrimary: 'hsl(221, 83%, 53%)',
    colorTextOnPrimaryBackground: 'white',
    colorBackground: 'rgba(40, 40, 50, 0.85)',
    colorInputBackground: 'rgba(255, 255, 255, 0.1)',
    colorInputText: 'white',
    colorTextSecondary: 'rgb(148, 163, 184)',
    borderRadius: '0.5rem',
  },
  elements: {
    card: {
      backgroundColor: 'rgba(40, 40, 50, 0.85)',
      backdropFilter: 'blur(16px)',
      borderRadius: '1rem',
      boxShadow: '0 8px 24px 0 rgba(0,0,0,0.18), 0 1.5px 6px 0 rgba(0,0,0,0.10)',
      border: '1.5px solid rgba(80, 80, 100, 0.25)',
    },
    socialButtonsIconButton: {
      backgroundColor: 'rgba(255,255,255,0.08)',
      border: '1.5px solid rgba(255,255,255,0.18)',
      color: 'white',
      boxShadow: '0 1.5px 6px 0 rgba(0,0,0,0.10)',
      transition: 'all 0.2s',
      '&:hover': {
        backgroundColor: 'rgba(255,255,255,0.16)',
        borderColor: 'rgba(255,255,255,0.28)',
        boxShadow: '0 4px 16px 0 rgba(0,0,0,0.18)',
      },
    },
    headerTitle: {
      fontSize: '1.875rem',
      fontWeight: '600',
      color: 'white',
    },
    headerSubtitle: {
      fontSize: '1rem',
      color: 'rgb(148, 163, 184)',
    },
    socialButtonsBlockButton: {
      backgroundColor: 'rgba(255,255,255,0.08)',
      border: '1.5px solid rgba(255,255,255,0.18)',
      color: 'white',
      boxShadow: '0 1.5px 6px 0 rgba(0,0,0,0.10)',
      transition: 'all 0.2s',
      '&:hover': {
        backgroundColor: 'rgba(255,255,255,0.16)',
        boxShadow: '0 4px 16px 0 rgba(0,0,0,0.18)',
        borderColor: 'rgba(255,255,255,0.28)',
      },
    },
    formButtonPrimary: {
      backgroundColor: 'hsl(221, 83%, 53%)',
      color: 'white',
      '&:hover': {
        backgroundColor: 'hsl(221, 83%, 47%)',
      },
    },
    formFieldInput: {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      borderColor: 'rgba(255, 255, 255, 0.1)',
      color: 'white',
      '&:focus': {
        borderColor: 'hsl(221, 83%, 53%)',
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
      },
    },
    dividerLine: {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
    dividerText: {
      color: 'rgb(148, 163, 184)',
    },
    footer: {
      '& + div': { // Target the "Don't have an account?" section
        color: 'rgb(148, 163, 184)',
        '& button': {
          color: 'hsl(221, 83%, 53%)',
          '&:hover': {
            color: 'hsl(221, 83%, 65%)',
          },
        },
      },
    },
  },
};
