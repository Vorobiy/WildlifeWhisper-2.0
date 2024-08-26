import videofile from '../src/assets/tigervideo.mp4';

function Video() {
  return (
    <div className="relative w-full h-screen">
      <video autoPlay loop muted className="w-full h-full object-cover opacity-80 z-10">
        <source src={videofile} type="video/mp4" />
      </video>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white space-y-4 px-4 md:px-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">Welcome to Wildlife Whisper.</h1>
        <h2 className="text-xl md:text-2xl lg:text-3xl text-center">An anonymous, online poaching awareness system and reporting tool.</h2>
      </div>
      <div className="button">
        <a href="/Pages/pinpointPoacher">Pinpoint Poacher</a>
      </div>
    </div>
  );
}

export default Video;