import { FaComments } from "react-icons/fa";

const articles = [
  {
    id: 1,
    title: "Netto vs. Brutto: Das müssen Vermieter zur korrekten Besteuerung wissen",
    description:
      "Erfahren Sie, was der Unterschied zwischen netto & brutto ist und wie die Umsatzsteuer bei Kurzzeitvermietung berechnet wird.",
    img: "https://images.unsplash.com/photo-1584697964193-cb89d7d42b46?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    title: "City Tax und Preisangaben: Das sollten Vermieter wissen",
    description:
      "City Tax eintragen – für mehr Transparenz, professionelle Darstellung und rechtliche Sicherheit.",
    img: "https://images.unsplash.com/photo-1607082349566-187342b6f2a5?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    title: "Das Vermieterprofil",
    description:
      "Das neue Vermieterprofil – für mehr Vertrauen, bessere Sichtbarkeit und professionelle Präsentation.",
    img: "https://images.unsplash.com/photo-1522202195465-dc3c7f3b9a2c?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    title: "Chat-System: Ihr sicherer Kommunikationskanal",
    description:
      "Entdecken Sie das neue Chat-System für eine sichere und unkomplizierte Kommunikation zwischen Mietern und Vermietern.",
    img: "https://images.unsplash.com/photo-1519222970733-f546218fa6d7?auto=format&fit=crop&w=600&q=80",
  },
];

export default function VermieterArticles() {
  return (
    <section className="bg-[#f7f4ee] py-12">
      <div className="max-w-8xl mx-auto px-4">
        {/* العنوان */}
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">
          Vermieter-Informationen
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
          Umfangreiche Informationen, Tipps und Tricks rund um das Thema (Monteurzimmer-)Vermietung
        </p>

        {/* البطاقات */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={article.img}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
                <p className="text-gray-600 text-sm">{article.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* زر مشاهدة كل المقالات */}
        <div className="flex justify-center mt-10">
          <button className="logoBG text-white font-semibold px-6 py-3 rounded-md hover:bg-yellow-600 transition">
            Alle Artikel
          </button>
        </div>
      </div>
    </section>
  );
}
