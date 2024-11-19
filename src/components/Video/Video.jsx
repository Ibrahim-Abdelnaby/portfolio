import "./video.css";
import floatingText from "../../../public/floating-text.png";
const Video = () => {
  return (
    <>
      <section id="video" className="relative bottom-80">
        <div className="relative video-container opacity-0 translate-y-12 animate-video-slide delay-1000">
          <div className="absolute w-32 -top-20 -right-32">
            <img src={floatingText} alt="See what's inside the video?" />
          </div>
          <video
            src="https://cdn.loom.com/sessions/thumbnails/ed3a608d6eef4c97a8cb91b2a3aee2be-00001.mp4"
            controls
            muted
            loop
          ></video>
        </div>
      </section>
    </>
  );
};

export default Video;
