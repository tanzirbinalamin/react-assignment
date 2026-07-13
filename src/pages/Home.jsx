import heroCircle from "../assets/hero-circle.png";
import microphone from "../assets/microphone.png";
import spotify from "../assets/spotify.png";
import msg from "../assets/msg.png";
import bg from "../assets/hero-bg.png"

function Banner() {
  return (
    <section className="banner banner bg-cover bg-center h-screen"
    style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="content pt-32">
        
          
        <div className="relative w-fit mx-auto">
            <img src={heroCircle} alt="" className="w-full max-w-md" />

  <div className="absolute inset-0 flex items-center justify-center">
    <img
      src={microphone}
      alt=""
      className="w-24 md:w-32 lg:w-36"
    />
  </div>

        </div>
          
       

        <div className="text-white font-bold text-center mt-10">
          <h1>TechWave</h1>

          <p>
            Your daily dose of tech insights, productivity hacks,
            and personal growth
          </p>
        </div>

        <div className="buttons flex gap-4 justify-center mt-4">
          <button className="bg-indigo-950 text-white gap-2 flex items-center hover:bg-slate-700 transition-colors duration-300 ease-in-out px-2 py-2 rounded-xl">
            <img src={spotify} alt="" />
            <p>

            Listen On Spotify
            </p>
          </button>

          <button className="bg-indigo-950 hover:bg-slate-700 transition-colors duration-300 ease-in-out text-white gap-2 flex items-center px-2 py-2 rounded-xl ">
            <img src={msg} alt="" />
            <p>

            Subscribe
            </p>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Banner;