import headphone from "../assets/headphone.png"
import device from "../assets/device.png"
import location from "../assets/location.png"
import thunder from "../assets/thunder.png"
import resource from "../assets/resource.png"
const features = [
  {
    title: "Premium Audio Quality",
    image: headphone,
    description: "Experience crystal-clear sound with professional-grade recording equipment and expert audio engineering. Every episode is mastered for optimal listening across all devices and platforms.",
  },
  {
    title: "Mobile Friendly",
    image: device,
    description: "Listen on the go with seamless mobile experience and offline downloads.",
  },
   {
    title: "Global Community",
    image: location,
    description: "Connect with tech enthusiasts from over 120 countries worldwide.",
  },
   {
    title: "Exclusive Interviews",
    image: thunder,
    description: "Get unprecedented access to industry titans, startup founders, and tech visionaries. Our host secures exclusive conversations you won't find anywhere else, diving deep into their journeys, failures, and success strategies.",
  },
   {
    title: "Rich Resources",
    image: resource,
    description: "Access show notes, transcripts, and additional learning materials for every episode.",
  },
  


];




function Choose() {
  return (
    <section className="bg-[#1A0B2E] py-20">
      <h2 className="text-white text-4xl text-center font-bold mb-10">
        Why Choose TechWave
      </h2>

      <div className="grid md:grid-cols-3 gap-6 px-10">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="bg-[#250F3F] rounded-3xl p-8"
          >
            <img src={feature.image} alt={feature.title} />

            <h3 className="text-white text-2xl font-bold mt-6">
              {feature.title}
            </h3>

            <p className="text-gray-400 mt-4">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Choose