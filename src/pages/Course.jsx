import videoMp4 from "/videos/coursee.MP4";
import videoWebm from "/videos/courseewebm.webm";

const Course = () => {
  return (
    <section name="hero" className="section text-white h-screen">
      <div className="relative overflow-hidden bg-transparent flex h-screen">
      

        {/* Video Background */}
        <video
          autoPlay
          loop
        //   muted
          playsInline
          className="w-full h-screen object-cover brightness-5 "
          style={{ aspectRatio: "16/9" }}
          preload="metadata"
          loading="eager"
        >
          <source src={videoWebm} type="video/webm" />
          <source src={videoMp4} type="video/mp4" />
        </video>

        <img src="/logo.png" alt="logo" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:w-[600px] w-[350px]  h-auto z-10 opacity-50" />

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white space-y-6 px-4">
       

        </div>
      </div>
    </section>
  )
}

export default Course