import TestChatBot from '@/components/TestChatBot'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-yellow-600 to-amber-700 rounded-full mb-6 shadow-lg">
            <span className="text-3xl">👑</span>
          </div>
          
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Chat met Napoleon Bonaparte
          </h1>
          
          <p className="text-xl text-amber-700 font-medium mb-6 max-w-3xl mx-auto">
            Welkom bij een unieke geschiedenisles! Chat direct met Napoleon Bonaparte en ontdek zijn verhaal, strategieën en gedachten. 
            Perfect voor HAVO 5 geschiedenis.
          </p>

          {/* Historische Context Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-4xl mx-auto mb-8 border-l-4 border-yellow-600">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">📚</span>
                </div>
              </div>
              <div className="text-left">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Historische Context</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Napoleon Bonaparte (1769-1821) was een Franse militaire leider en keizer die Europa domineerde in het begin van de 19e eeuw. 
                  Hij voerde de Napoleontische Oorlogen, introduceerde het Napoleontisch Wetboek en veranderde de politieke kaart van Europa voor altijd.
                </p>
              </div>
            </div>
          </div>

          {/* Instructies voor Leerlingen */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-lg p-6 max-w-4xl mx-auto mb-8 border border-blue-200">
            <h3 className="text-lg font-semibold text-blue-800 mb-4 flex items-center">
              <span className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-2">
                <span className="text-white text-sm">💡</span>
              </span>
              Tips voor je gesprek met Napoleon
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="text-green-600">✓</span>
                  <span className="text-gray-700">Vraag naar zijn militaire strategieën</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-600">✓</span>
                  <span className="text-gray-700">Bespreek de Slag bij Waterloo</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-600">✓</span>
                  <span className="text-gray-700">Vraag naar zijn tijd op Elba</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="text-green-600">✓</span>
                  <span className="text-gray-700">Bespreek het Napoleontisch Wetboek</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-600">✓</span>
                  <span className="text-gray-700">Vraag naar zijn relatie met Josephine</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-600">✓</span>
                  <span className="text-gray-700">Ontdek zijn visie op Europa</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Chat Interface */}
        <div className="max-w-4xl mx-auto">
          <TestChatBot />
        </div>

        {/* Footer met Educatieve Info */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-4xl mx-auto border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">📖 Leermateriaal</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <h4 className="font-semibold text-yellow-800 mb-2">⚔️ Militaire Carrière</h4>
                <p className="text-yellow-700">Van Corsicaanse officier tot Keizer van Frankrijk</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-800 mb-2">🏛️ Politieke Hervormingen</h4>
                <p className="text-blue-700">Het Napoleontisch Wetboek en bestuurlijke vernieuwingen</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <h4 className="font-semibold text-red-800 mb-2">🌍 Europese Impact</h4>
                <p className="text-red-700">Hoe Napoleon Europa voor altijd veranderde</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-gray-500 text-sm">
            <p>💜 Educatieve AI-tool voor HAVO 5 Geschiedenis • Powered by Gemini AI</p>
          </div>
        </div>
      </div>
    </div>
  )
}