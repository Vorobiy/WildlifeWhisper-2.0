import videofile from '../src/assets/tigervideo.mp4';

function Video() {
  return (
    <div className="relative w-full h-screen">
      <video autoPlay loop muted className="w-full h-full object-cover opacity-80 z-10">
        <source src={videofile} type="video/mp4" />
      </video>
      <div className="absolute w-full h-full top-0 flex flex-col justify-center items-center text-white space-y-4">
        <h1 className="text-4xl font-bold">Welcome to Wildlife Whisper.</h1>
        <h1 className="text-2xl">An anonymous, online poaching awareness system and reporting tool.</h1>
      </div>
    </div>
  );
}

export default Video;