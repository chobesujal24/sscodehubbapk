import { motion } from "framer-motion";

interface FloatingAssetsProps {
    variant?: "hero" | "ambient";
}

const FloatingAssets = ({ variant = "hero" }: FloatingAssetsProps) => {
    if (variant === "ambient") {
        return (
            <div className="relative w-full h-40 overflow-hidden pointer-events-none select-none" aria-hidden="true">
                {/* Small floating diamond */}
                <div className="absolute left-[15%] top-4 animate-3d-spin-2" style={{ animationDelay: "0s" }}>
                    <div
                        className="w-10 h-10 rotate-45 rounded-md"
                        style={{
                            background: "linear-gradient(135deg, hsla(81,20%,42%,0.25), hsla(85,29%,70%,0.15))",
                            border: "1px solid hsla(85,29%,70%,0.3)",
                            boxShadow: "inset 0 1px 0 hsla(88,39%,81%,0.2), 0 4px 16px hsla(81,20%,42%,0.12)",
                            backdropFilter: "blur(8px)",
                        }}
                    />
                </div>

                {/* Small orb */}
                <div className="absolute right-[20%] top-8 animate-bob" style={{ animationDelay: "1.5s" }}>
                    <div
                        className="w-8 h-8 rounded-full"
                        style={{
                            background: "radial-gradient(circle at 30% 30%, hsla(85,29%,70%,0.4), hsla(81,20%,42%,0.15))",
                            border: "1px solid hsla(85,29%,70%,0.25)",
                            boxShadow: "inset 0 -2px 6px hsla(81,20%,33%,0.1), 0 2px 12px hsla(81,20%,42%,0.1)",
                        }}
                    />
                </div>

                {/* Tiny cube */}
                <div className="absolute left-[55%] top-12 animate-3d-spin-3" style={{ animationDelay: "3s" }}>
                    <div
                        className="w-6 h-6 rounded-[3px]"
                        style={{
                            background: "linear-gradient(145deg, hsla(88,39%,81%,0.3), hsla(81,20%,42%,0.1))",
                            border: "1px solid hsla(85,29%,70%,0.2)",
                            boxShadow: "0 2px 8px hsla(81,20%,42%,0.08)",
                        }}
                    />
                </div>
            </div>
        );
    }

    // Hero variant — larger, more prominent shapes
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-[1]" aria-hidden="true">
            {/* Large Torus Ring */}
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.6 }}
                className="absolute top-[12%] right-[8%] md:right-[12%] animate-3d-spin-1"
            >
                <div
                    className="w-28 h-28 md:w-40 md:h-40 rounded-full"
                    style={{
                        background: "transparent",
                        border: "6px solid hsla(81,20%,42%,0.2)",
                        boxShadow:
                            "inset 0 0 20px hsla(81,20%,42%,0.1), 0 0 40px hsla(81,20%,42%,0.08), inset 4px -4px 12px hsla(88,39%,81%,0.08)",
                    }}
                />
                {/* Inner ring for depth */}
                <div
                    className="absolute inset-4 rounded-full"
                    style={{
                        background: "transparent",
                        border: "3px solid hsla(85,29%,70%,0.15)",
                        boxShadow: "inset 0 2px 8px hsla(88,39%,81%,0.05)",
                    }}
                />
            </motion.div>

            {/* Sphere */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="absolute bottom-[18%] left-[6%] md:left-[10%] animate-bob"
                style={{ animationDelay: "0.5s" }}
            >
                <div
                    className="w-20 h-20 md:w-28 md:h-28 rounded-full"
                    style={{
                        background:
                            "radial-gradient(circle at 35% 30%, hsla(88,39%,81%,0.45), hsla(85,29%,70%,0.2) 50%, hsla(81,20%,42%,0.1) 100%)",
                        border: "1px solid hsla(85,29%,70%,0.3)",
                        boxShadow:
                            "inset 0 -8px 20px hsla(81,20%,33%,0.15), inset 0 4px 12px hsla(88,39%,81%,0.15), 0 8px 32px hsla(81,20%,42%,0.12)",
                    }}
                />
                {/* Highlight dot */}
                <div
                    className="absolute top-[22%] left-[30%] w-3 h-3 md:w-4 md:h-4 rounded-full"
                    style={{
                        background: "radial-gradient(circle, hsla(88,39%,81%,0.5), transparent)",
                    }}
                />
            </motion.div>

            {/* Cube */}
            <motion.div
                initial={{ opacity: 0, scale: 0.3 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.1, delay: 1 }}
                className="absolute top-[35%] left-[3%] md:left-[8%] animate-3d-spin-2"
                style={{ animationDelay: "2s" }}
            >
                <div
                    className="w-14 h-14 md:w-20 md:h-20 rounded-lg"
                    style={{
                        background:
                            "linear-gradient(145deg, hsla(88,39%,81%,0.35), hsla(85,29%,70%,0.15))",
                        border: "1px solid hsla(85,29%,70%,0.3)",
                        boxShadow:
                            "inset 0 1px 0 hsla(88,39%,81%,0.2), inset 0 -2px 6px hsla(81,20%,33%,0.1), 0 6px 24px hsla(81,20%,42%,0.1)",
                        backdropFilter: "blur(8px)",
                    }}
                />
            </motion.div>

            {/* Diamond */}
            <motion.div
                initial={{ opacity: 0, rotate: 0 }}
                animate={{ opacity: 1, rotate: 45 }}
                transition={{ duration: 1.3, delay: 1.2 }}
                className="absolute bottom-[30%] right-[5%] md:right-[8%] animate-3d-spin-3"
                style={{ animationDelay: "1s" }}
            >
                <div
                    className="w-16 h-16 md:w-24 md:h-24 rounded-xl"
                    style={{
                        background:
                            "linear-gradient(135deg, hsla(81,20%,42%,0.25), hsla(88,39%,81%,0.15))",
                        border: "1px solid hsla(85,29%,70%,0.25)",
                        boxShadow:
                            "inset 0 2px 0 hsla(88,39%,81%,0.15), 0 4px 20px hsla(81,20%,42%,0.1)",
                        backdropFilter: "blur(6px)",
                    }}
                />
            </motion.div>

            {/* Small floating dots */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 1.5 }}
                className="absolute top-[55%] right-[25%] animate-float"
                style={{ animationDelay: "0.8s" }}
            >
                <div
                    className="w-4 h-4 rounded-full"
                    style={{
                        background: "hsla(81,20%,42%,0.3)",
                        boxShadow: "0 0 12px hsla(81,20%,42%,0.2)",
                    }}
                />
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 1.8 }}
                className="absolute top-[20%] left-[25%] animate-float"
                style={{ animationDelay: "2.5s" }}
            >
                <div
                    className="w-3 h-3 rounded-full"
                    style={{
                        background: "hsla(85,29%,70%,0.35)",
                        boxShadow: "0 0 10px hsla(85,29%,70%,0.2)",
                    }}
                />
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 2 }}
                className="absolute bottom-[12%] right-[35%] animate-bob"
                style={{ animationDelay: "3.5s" }}
            >
                <div
                    className="w-5 h-5 rounded-full"
                    style={{
                        background: "hsla(88,39%,81%,0.3)",
                        boxShadow: "0 0 14px hsla(88,39%,81%,0.15)",
                    }}
                />
            </motion.div>
        </div>
    );
};

export default FloatingAssets;
