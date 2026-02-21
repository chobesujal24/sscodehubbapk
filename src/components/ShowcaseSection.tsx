import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X, Info } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

/* ─── Project data from reference site ─── */
const projects = [
    {
        title: "Hotel Pro",
        description: "A complete hotel management system with booking engine and admin dashboard.",
        link: "https://luxuryhotelwebsite.netlify.app/",
        image: "https://sscodehubb.web.app/hotel.jpeg",
    },
    {
        title: "EduPortal",
        description: "Online learning platform for schools with student tracking and live classes.",
        link: "https://alpha288gg.github.io/VLSI-D-T/",
        image: "https://sscodehubb.web.app/eduportal.jpeg",
    },
    {
        title: "My Portfolio",
        description: "The official website of SS Code Hub, showcasing skills and services.",
        link: "https://myportfoliobyss.netlify.app/",
        image: "https://sscodehubb.web.app/portfolio.jpeg",
    },
    {
        title: "Alpha AI",
        description: "An AI-powered desktop assistant that handles PC tasks via voice commands.",
        link: "#",
        image: "https://sscodehubb.web.app/alphaAIassistant.jpeg",
    },
    {
        title: "Resume AI",
        description: "AI tool that scans resumes and provides ATS optimization feedback.",
        link: "#",
        image: "https://sscodehubb.web.app/resumeAnalyzer.jpeg",
    },
    {
        title: "EduStudy",
        description: "Comprehensive study portal with notes, quizzes, and progress tracking.",
        link: "https://edustudyy.netlify.app/#",
        image: "https://sscodehubb.web.app/study-portal.jpg",
    },
    {
        title: "VLSI Lab",
        description: "A learning model for VLSI and Verilog simulation.",
        link: "https://sscodevlsilab.web.app/index.html",
        image: "https://sscodehubb.web.app/vldilab.jpeg",
    },
];

/* ─── Main component ─── */
const ShowcaseSection = () => {
    const [selectedProject, setSelectedProject] = useState<number | null>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    /* Drag-to-scroll */
    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);

    const handleMouseDown = (e: React.MouseEvent) => {
        isDragging.current = true;
        startX.current = e.pageX - (containerRef.current?.offsetLeft || 0);
        scrollLeft.current = containerRef.current?.scrollLeft || 0;
        if (containerRef.current) containerRef.current.style.cursor = "grabbing";
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging.current || !containerRef.current) return;
        e.preventDefault();
        const x = e.pageX - (containerRef.current.offsetLeft || 0);
        const walk = (x - startX.current) * 1.5;
        containerRef.current.scrollLeft = scrollLeft.current - walk;
    };

    const handleMouseUp = () => {
        isDragging.current = false;
        if (containerRef.current) containerRef.current.style.cursor = "grab";
    };

    /* Auto-scroll animation */
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        let animationId: number;
        let speed = 0.8;

        const autoScroll = () => {
            if (!isDragging.current && container) {
                container.scrollLeft += speed;
                // Reset to beginning when halfway (seamless loop)
                if (container.scrollLeft >= container.scrollWidth / 2) {
                    container.scrollLeft = 0;
                }
            }
            animationId = requestAnimationFrame(autoScroll);
        };

        animationId = requestAnimationFrame(autoScroll);

        // Pause on hover
        const pause = () => { speed = 0; };
        const resume = () => { speed = 0.8; };
        container.addEventListener("mouseenter", pause);
        container.addEventListener("mouseleave", resume);

        return () => {
            cancelAnimationFrame(animationId);
            container.removeEventListener("mouseenter", pause);
            container.removeEventListener("mouseleave", resume);
        };
    }, []);

    const handleCardClick = (index: number) => {
        if (!isDragging.current) {
            setSelectedProject(selectedProject === index ? null : index);
        }
    };

    // Duplicate projects for seamless loop
    const displayProjects = [...projects, ...projects];

    return (
        <section id="showcase" className="showcase-section py-24 overflow-hidden" style={{ background: "#f8f8f8" }}>
            <div className="max-w-6xl mx-auto px-6">
                <FadeIn>
                    <h2 className="showcase-title text-center mb-12">Showcase Lab</h2>
                </FadeIn>

                {/* Scrolling marquee container */}
                <FadeIn delay={0.1}>
                    <div
                        ref={containerRef}
                        className="showcase-marquee-container"
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                        onMouseLeave={handleMouseUp}
                    >
                        <div ref={trackRef} className="showcase-marquee-track">
                            {displayProjects.map((project, i) => {
                                const realIndex = i % projects.length;
                                return (
                                    <div
                                        key={`${project.title}-${i}`}
                                        className="showcase-card-wrapper"
                                        onClick={() => handleCardClick(realIndex)}
                                    >
                                        <div className="showcase-card">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="showcase-card-img"
                                                draggable={false}
                                            />

                                            <span className="showcase-card-label">
                                                {project.title}
                                                <Info className="w-3 h-3 ml-1.5 inline-block opacity-60" />
                                            </span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </FadeIn>

                {/* Project detail panel */}
                <AnimatePresence>
                    {selectedProject !== null && (
                        <motion.div
                            initial={{ opacity: 0, y: 20, height: 0 }}
                            animate={{ opacity: 1, y: 0, height: "auto" }}
                            exit={{ opacity: 0, y: -10, height: 0 }}
                            transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
                            className="showcase-detail-panel mt-10"
                        >
                            <div className="showcase-detail-inner">
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="showcase-detail-close"
                                    aria-label="Close"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                                <h3 className="text-2xl font-bold text-foreground mb-3">
                                    {projects[selectedProject].title}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed mb-6">
                                    {projects[selectedProject].description}
                                </p>
                                {projects[selectedProject].link !== "#" ? (
                                    <a
                                        href={projects[selectedProject].link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-btn-dark text-sm font-semibold"
                                    >
                                        Visit Project
                                        <ExternalLink className="w-4 h-4" />
                                    </a>
                                ) : (
                                    <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-btn text-sm font-semibold opacity-60 cursor-not-allowed">
                                        Coming Soon
                                    </span>
                                )}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default ShowcaseSection;
