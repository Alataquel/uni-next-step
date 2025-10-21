import heroYoungStudents from "@/assets/hero-young-students.jpg";

interface VideoBackgroundProps {
  opacity?: number;
  videoUrl?: string;
}

const VideoBackground = ({ opacity = 0.7, videoUrl }: VideoBackgroundProps) => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Video Background */}
      {videoUrl ? (
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      ) : (
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroYoungStudents})`,
          }}
        />
      )}
      
      {/* White Sheer Overlay */}
      <div 
        className="absolute inset-0 bg-white"
        style={{ opacity }}
      />
    </div>
  );
};

export default VideoBackground;
