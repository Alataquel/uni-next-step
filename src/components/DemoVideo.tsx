import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useState } from "react";

interface DemoVideoProps {
  videoId: string;
  title?: string;
  description?: string;
}

const DemoVideo = ({ videoId, title, description }: DemoVideoProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {(title || description) && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            {title && (
              <h2 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                {description}
              </p>
            )}
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-5xl"
        >
          <div className="relative group">
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-primary opacity-20 rounded-3xl blur-2xl group-hover:opacity-30 transition-opacity" />

            {/* Video Container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-background bg-black">
              <div className="relative pb-[56.25%]">
                {!isPlaying ? (
                  <>
                    {/* Thumbnail */}
                    <img
                      src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                      alt="Video thumbnail"
                      className="absolute inset-0 w-full h-full object-cover"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] transition-all group-hover:bg-black/30" />

                    {/* Play Button */}
                    <motion.button
                      onClick={handlePlay}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="relative">
                        {/* Pulse Effect */}
                        <motion.div
                          className="absolute inset-0 bg-primary rounded-full"
                          animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.5, 0, 0.5],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />

                        {/* Play Button */}
                        <div className="relative flex items-center justify-center w-20 h-20 md:w-24 md:h-24 bg-primary rounded-full shadow-2xl transition-all group-hover:bg-primary/90">
                          <Play className="w-8 h-8 md:w-10 md:h-10 text-primary-foreground fill-current ml-1" />
                        </div>
                      </div>
                    </motion.button>

                    {/* Watch Demo Text */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-sm md:text-base font-medium"
                    >
                      Click to watch demo
                    </motion.div>
                  </>
                ) : (
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                    title="Demo Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DemoVideo;
