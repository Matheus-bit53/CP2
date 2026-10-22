import { useState } from 'react';

export function CounterCard() {
    const [count, setCount] = useState(0);

    return (
        <div className="bg-white shadow-lg rounded-xl p-6 max-w-md mx-auto my-8 border border-gray-100 text-center">
            {}
            <img
                src="https://picsum.photos/400/200"
                alt="Imagem do Card"
                className="w-full h-40 object-cover rounded-lg mb-4"
            />

            <h3 className="text-xl font-semibold text-gray-800 mb-4">Componente Interativo</h3>
            <p className="text-gray-600 mb-4">
                Você clicou <span className="font-bold text-blue-600">{count} vezes</span>
            </p>
            <button
                onClick={() => setCount(count + 1)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg transition-colors"
            >
                Clique Aqui
            </button>
        </div>
    );
}