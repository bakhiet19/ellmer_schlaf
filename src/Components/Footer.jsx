import ellmer from '../assets/ellmer.png';

export default function Footer(){
    return(
        <footer class="bg-gray-900 text-gray-200 py-10">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
      
      <div>
        <img src={ellmer} alt="Firmenlogo" class="w-28 mb-3" />
        <p class="text-sm text-gray-400">Dein Zuhause in <span className='text-red-500'> Schleswig-Holstein</span> und <span className='text-red-500'> Hamburg </span></p>
      </div>

      <div class="space-y-2">
        <a href="/about" class="block hover:text-cyan-400 transition">Über uns</a>
        <a href="/contact" class="block hover:text-cyan-400 transition">Kontakt</a>
        <a href="/privacy" class="block hover:text-cyan-400 transition">Datenschutz</a>
        <a href="/terms" class="block hover:text-cyan-400 transition">AGB</a>
      </div>

      <div class="flex space-x-4">
        <a href="#" class="hover:text-cyan-400 transition"><i class="fab fa-facebook-f"></i></a>
        <a href="#" class="hover:text-cyan-400 transition"><i class="fab fa-instagram"></i></a>
        <a href="#" class="hover:text-cyan-400 transition"><i class="fab fa-twitter"></i></a>
      </div>
    </div>

    <div class="mt-8 text-center text-sm text-gray-500">
      &copy; 2025 DeineFirma. Alle Rechte vorbehalten.
    </div>
  </div>
</footer>
    )
}