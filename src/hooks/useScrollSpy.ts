import { useEffect, useState } from "react";
/**
 * useScrollSpy
 * Devuelve el id de la sección actualmente visible.
 * - ids: lista de ids de secciones en orden vertical de la página.
 */
export default function useScrollSpy(ids: string[]) {
  // id activo (sección resaltada en el menú)
  const [activo, setActivo] = useState<string>("");

  useEffect(() => {
    if (typeof window === "undefined" || ids.length === 0) return;
    
    if (!("IntersectionObserver" in window)) {
      setActivo(ids[0] ?? "");
      return;
    }

    // Obtener los elementos del DOM a partir de los ids (filtrando nulos)
    const secciones = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as Element[];

    // Configuramos el observador:
    // - rootMargin mueve la "ventana" de observación para detectar antes/después (top/bottom)
    // - 20% por arriba y 40% por abajo para que el "activo" sea el más centrado
    // - threshold define los porcentajes de visibilidad que disparan el callback
    const observador = new IntersectionObserver(
      (entradas) => {
        // Filtrar las que están intersectando y escoger la + visible
        const visible = entradas
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        // Actualizar el id activo si procede
        if (visible?.target && (visible.target as HTMLElement).id) {
          setActivo((visible.target as HTMLElement).id);
        }
      },
      { rootMargin: "-20% 0px -40% 0px", threshold: [0, 0.1, 0.25, 0.5] }
    );

    // Observar cada sección
    secciones.forEach((s) => observador.observe(s));

    // Limpieza al desmontar o cambiar ids
    return () => observador.disconnect();
  }, [ids]);

  return activo;
}
