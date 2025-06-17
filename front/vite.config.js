import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    plugins:[ tailwindcss(),],
    server:{
        watch:{
            usePolling:true,
        },
        host: true,
        strictPort:true,
        port:8888
    }
})