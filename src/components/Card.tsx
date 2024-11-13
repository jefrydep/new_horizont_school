// src/components/Card.jsx
interface Props {
    title: string;
    description: string;
    img?: string;
}
const Card = ({ title,description, img }: Props) => {
    return (
        <div className="  container mx-auto mb-4  bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
            {/* Contenedor de texto */}
            <div className="p-6 flex-1">
                <h2 className="text-2xl font-bold text-title">{title}</h2>
                <p className="mt-4 text-gray-600">
                    {description}
                </p>
            </div>

            {/* Imagen a la derecha */}
            <div className="w-full md:w-1/2">
                <img
                    className="w-full h-full object-cover"
                    src={img ? img : "/ajedrez.png"}
                    alt="Imagen de quiénes somos"
                />
            </div>

        </div>
    );
};

export default Card;
