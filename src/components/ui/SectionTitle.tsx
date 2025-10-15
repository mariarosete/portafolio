import React from "react";
import { motion } from "framer-motion";

/**
 * Props públicas del componente.
*/
type Props = {
  /** Identificador base de la sección */
  id: string;
  /** Icono opcional a la izquierda del título */
  icon?: React.ReactNode;
  /** Contenido del título */
  children: React.ReactNode;
};

/**
 * Título de sección con animación suave al entrar en el viewport.
 * - Usa Framer Motion para fade + desplazamiento vertical.
 * - Expone un id accesible "seccion-title" para anclajes.
 */
const TituloSeccion: React.FC<Props> = ({ id: idSeccion, icon: icono, children }) => (
  <motion.h2
    // id accesible y estable para enlaces internos
    id={`${idSeccion}-title`}
    // Estado inicial: ligeramente desplazado y transparente
    initial={{ opacity: 0, y: 10 }}
    // Al entrar en viewport: aparece y vuelve a su lugar
    whileInView={{ opacity: 1, y: 0 }}
    // Solo animar una vez; amount 0.2 = activa cuando 20% del elemento es visible
    viewport={{ once: true, amount: 0.2 }}
    // Duración de la animación
    transition={{ duration: 0.5 }}
    // Estilos del título
    className="text-3xl md:text-4xl font-bold tracking-tight mb-8 flex items-center gap-3"
  >
    {icono} {children}
  </motion.h2>
);

export default TituloSeccion;
