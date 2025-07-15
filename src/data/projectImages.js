// Utilise Vite import.meta.glob pour mapper toutes tes images optimisées automatiquement
export const projectImages = import.meta.glob("../assets/optimized/*.webp", {
    eager: true,
    import: "default"
});
