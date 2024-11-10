import { Button } from "./ui/button";



interface Props {
    title: string
}
export default function WorkShopCard({ title }: Props) {
    return (
        <div className="max-w-7xl mx-auto my-10 px-6">

            <h2 className="text-3xl font-semibold text-center text-gray-800 mb-10"> {title}</h2>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                <div className="bg-white shadow-xl rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-center text-gray-800 mb-4">Taller de Arte</h3>
                    <img
                        src="https://via.placeholder.com/150"
                        alt="Taller de Arte"
                        className="w-full h-40 object-cover rounded-lg mb-4"
                    />
                    <p className="text-gray-600 text-base">
                        En este taller los estudiantes explorarán diferentes técnicas artísticas como pintura, dibujo y escultura, fomentando la creatividad y expresión personal.
                    </p>
                    <div className="text-center mt-3 text-white font-semibold tracking-wider">
                        <Button className="bg-subtitle rounded-3xl">+Mas Información</Button>
                    </div>
                </div>


                <div className="bg-white shadow-xl rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-center text-gray-800 mb-4">Taller de Ciencias</h3>
                    <img
                        src="https://via.placeholder.com/150"
                        alt="Taller de Ciencias"
                        className="w-full h-40 object-cover rounded-lg mb-4"
                    />
                    <p className="text-gray-600 text-base">
                        El taller de ciencias proporciona a los estudiantes una comprensión profunda de conceptos científicos mediante experimentos prácticos y actividades interactivas.
                    </p>
                    <div className="text-center mt-3 text-white font-semibold tracking-wider">
                        <Button className="bg-subtitle rounded-3xl">+Mas Información</Button>
                    </div>
                </div>


                <div className="bg-white shadow-xl rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-center text-gray-800 mb-4">Taller de Música</h3>
                    <img
                        src="https://via.placeholder.com/150"
                        alt="Taller de Música"
                        className="w-full h-40 object-cover rounded-lg mb-4"
                    />
                    <p className="text-gray-600 text-base">
                        En este taller los estudiantes aprenderán sobre teoría musical, interpretación de instrumentos y composición, desarrollando su sentido del ritmo y la armonía.
                    </p>
                    <div className="text-center mt-3 text-white font-semibold tracking-wider">
                        <Button className="bg-subtitle rounded-3xl">+Mas Información</Button>
                    </div>
                </div>
            </div>
        </div>
    );

}
