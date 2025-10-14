import React from "react";
import { motion } from "framer-motion";

type Props = {
  id: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
};

const SectionTitle: React.FC<Props> = ({ id, icon, children }) => (
  <motion.h2
    id={`${id}-title`}
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5 }}
    className="text-3xl md:text-4xl font-bold tracking-tight mb-8 flex items-center gap-3"
  >
    {icon} {children}
  </motion.h2>
);

export default SectionTitle;
