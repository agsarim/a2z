"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  // Split each word into characters
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(""),
    };
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.02, // Stagger characters
        delayChildren: i * 0.05, // Delay for the whole word
      },
    }),
  };

  const characterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <div className={cn("flex space-x-1 my-6", className)}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-wrap"
      >
        {wordsArray.map((word, idx) => (
          <span key={word.text + idx} className="inline-block">
            {word.text.map((char, charIdx) => (
              <motion.span
                key={char + charIdx}
                variants={characterVariants}
                className={cn("inline-block", word.className)}
              >
                {char}
              </motion.span>
            ))}
            {/* Add a space after each word, except the last one */}
            {idx < wordsArray.length - 1 && (
              <span className="inline-block">&nbsp;</span>
            )}
          </span>
        ))}
      </motion.div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.5, // Adjust delay to appear after text
          repeat: Infinity,
          repeatType: "reverse",
          duration: 0.8,
        }}
        className={cn(
          "inline-block h-full w-[2px] bg-white",
          cursorClassName
        )}
      />
    </div>
  );
};
