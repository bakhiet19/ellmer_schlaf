import {
  FaFileSignature,
  FaComments,
  FaHome,
} from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

export default function HowItWorksSection() {
  const steps = [
    {
      icon: <FaFileSignature className="logoTextWhite text-2xl" />,
      title: "Anfrage stellen",
      desc: "Füllen Sie einfach unseren kurzen Fragebogen aus oder rufen Sie uns direkt an. Wir nehmen Ihre Wünsche und Anforderungen auf.",
    },
    {
      icon: <FaComments className="logoTextWhite text-2xl" />,
      title: "Unverbindliche Beratung",
      desc: "Sie erhalten von uns eine persönliche und digitale Beratung – von der Auftragsbestätigung über die Zahlung bis hin zur Schlüsselübergabe. Transparent, schnell und unverbindlich.",
    },
    {
      icon: <FaHome className="logoTextWhite text-2xl" />,
      title: "Einziehen & wohlfühlen",
      desc: "Beziehen Sie unkompliziert Ihre Unterkunft und genießen Sie einen reibungslosen Aufenthalt – alles ist für Sie vorbereitet.",
    },
  ];

  return (
    <section className="w-full  py-16 logoBGWhite">
      <div className="max-w-8xl mx-auto px-4">
        {/* العنوان */}
        <h2 className="text-3xl font-bold text-center logoText mb-12">
          Ganz einfach zur perfekten Unterkunft
        </h2>

        {/* الخطوات */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center relative">
              {/* عنصر الخطوة */}
              <div className="shadow-2xl group relative flex flex-col items-center text-center logoBG p-6 rounded-2xl hover:shadow-xl transition-all duration-300 min-w-[240px] pt-12">
                
                {/* الأيقونة الطايرة فوق */}
                <div className="absolute -top-6 flex items-center justify-center w-12 h-12 rounded-full logoBG shadow-lg">
                  {step.icon}
                </div>

                {/* الرقم */}
                <div className="w-8 h-8 rounded-full logoBGWhite logoText flex items-center justify-center mb-2 font-bold border border-red-600">
                  {index + 1}
                </div>

                <h3 className="text-lg font-semibold logoTextWhite mb-2">
                  {step.title}
                </h3>
                <p className="text-sm logoTextWhite leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* السهم */}
              {index < steps.length - 1 && (
                <FaArrowRightLong className="hidden md:block logoText text-8xl mx-6 opacity-70 animate-pulse animate-moveRight" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
