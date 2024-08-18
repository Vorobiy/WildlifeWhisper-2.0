import videofile from '../src/assets/tigervideo.mp4'

function Video() {
  return (
    <> 
    <div className="main">
        <video autoPlay loop muted>
          <source src={videofile} type="video/mp4"></source>
        </video>
      <div className="tiger-content">
        <h1>Welcome to Wildlife Whisper.</h1>
        <h2>An anonymous, online poaching awareness system and reporting tool.</h2>
      </div>
    </div>
    </>
  );
}

export default Video;