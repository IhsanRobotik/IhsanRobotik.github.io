import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["'Space Grotesk'", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        /* 🌈 Semua warna pelangi sebagai warna Tailwind: bg-rainbow-red, text-rainbow-blue, dst. */
        rainbow: {
          red: "#FF3838",
          orange: "#FF8A00",
          yellow: "#FFD60A",
          green: "#00C853",
          blue: "#0091FF",
          indigo: "#5E5CE6",
          violet: "#BF5AF2",
        },
      },
      backgroundImage: {
        rainbow:
          "linear-gradient(90deg,#FF3838 0%,#FF8A00 16.6%,#FFD60A 33.3%,#00C853 50%,#0091FF 66.6%,#5E5CE6 83.3%,#BF5AF2 100%)",
        "rainbow-conic":
          "conic-gradient(from 180deg,#FF3838,#FF8A00,#FFD60A,#00C853,#0091FF,#5E5CE6,#BF5AF2,#FF3838)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "rainbow-pan": {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "300% 50%" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.6s ease-out",
        "rainbow-pan": "rainbow-pan 8s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
