import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface ButtonProps {
  text: string;
  frontIcon?: React.ReactNode;
  backIcon?: React.ReactNode;
  type?: "primary" | "secondary";
  href?: string;
}

function Button(props: ButtonProps) {
  return (
    <>
      {props.type === "primary" ? (
        <Link to={props.href || "/"}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-linear-to-r from-(--c2) to-(--c1) text-white rounded-full font-semibold flex items-center justify-center space-x-2 mx-auto shadow-sm shadow-amber-400/50 cursor-pointer"
          >
            {props.frontIcon}
            <span>{props.text}</span>
            {props.backIcon}
          </motion.button>
        </Link>
      ) : (
        <Link to={props.href || "/"}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white/10 backdrop-blur-md border border-(--c1) text-gray-700 rounded-full font-semibold cursor-pointer"
          >
            {props.frontIcon}
            <span>{props.text}</span>
            {props.backIcon}
          </motion.button>
        </Link>
      )}
    </>
  );
}

export default Button;
