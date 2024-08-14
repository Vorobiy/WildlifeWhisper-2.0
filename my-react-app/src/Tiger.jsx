import videofile from '../src/assets/tigervideo.mp4'

function Video() {
  return (
    <>
    <div>
      <video className="tiger-container" autoPlay loop muted>
        <source src={videofile} type="video/mp4"></source>
      </video>
    </div>
    <div className="tiger-content">
      <h1>Welcome to Wildlife Whisper.</h1>
      <h2>An anonymous, online poaching awareness system and reporting tool.</h2>
    </div>
    </>
  );
}

export default Video;