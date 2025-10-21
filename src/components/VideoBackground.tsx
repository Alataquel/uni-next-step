import heroYoungStudents from "@/assets/hero-young-students.jpg";

interface VideoBackgroundProps {
  opacity?: number;
}

const VideoBackground = ({ opacity = 0.7 }: VideoBackgroundProps) => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Video Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroYoungStudents})`,
        }}
      />
      
      {/* White Sheer Overlay */}
      <div 
        className="absolute inset-0 bg-white"
        style={{ opacity }}
      />
    </div>
  );
};

export default VideoBackground;
