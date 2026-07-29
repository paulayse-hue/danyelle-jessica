export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      <section className="bg-green-700 text-white p-10 text-center">
        <h1 className="text-4xl font-bold">
          Danyelle Jessica
        </h1>

        <p className="mt-4 text-xl">
          Soluções em crédito rápido, seguro e personalizado
        </p>

        <button className="mt-6 bg-yellow-400 text-black px-8 py-3 rounded-full font-bold">
          Simule agora pelo WhatsApp
        </button>
      </section>


      <section className="p-10 text-center">
        <h2 className="text-3xl font-bold text-gray-800">
          Por que escolher a Danyelle Jessica?
        </h2>

        <div className="mt-8 grid md:grid-cols-3 gap-6">

          <div className="p-6 shadow rounded">
            <h3 className="font-bold text-xl">
              Atendimento personalizado
            </h3>
            <p>
              Análise completa para encontrar a melhor opção para você.
            </p>
          </div>

          <div className="p-6 shadow rounded">
            <h3 className="font-bold text-xl">
              Segurança
            </h3>
            <p>
              Processo transparente e acompanhamento do início ao fim.
            </p>
          </div>

          <div className="p-6 shadow rounded">
            <h3 className="font-bold text-xl">
              Agilidade
            </h3>
            <p>
              Simulações rápidas e atendimento online.
            </p>
          </div>

        </div>
      </section>


      <footer className="bg-gray-900 text-white text-center p-6">
        © 2026 Danyelle Jessica - Todos os direitos reservados
      </footer>

    </main>
  );
}