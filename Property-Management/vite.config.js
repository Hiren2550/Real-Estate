import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env from current directory and parent directory (root .env)
  const env = { ...process.env, ...loadEnv(mode, process.cwd(), "") };

  const firebaseKey =
    env.VITE_FIREBASE_API_KEY ||
    env.FIREBASE_API_KEY ||
    "";

  const web3Key =
    env.VITE_WEB3FORMS_ACCESS_KEY ||
    env.WEB3FORMS_ACCESS_KEY ||
    "";

  return {
    server: {
      proxy: {
        "/api": {
          target: "http://localhost:3000",
          secure: false,
        },
      },
    },
    define: {
      "import.meta.env.VITE_FIREBASE_API_KEY": JSON.stringify(firebaseKey),
      "import.meta.env.VITE_WEB3FORMS_ACCESS_KEY": JSON.stringify(web3Key),
    },
    plugins: [react()],
  };
});

