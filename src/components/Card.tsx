// src/components/Card.jsx
interface Props {
    title: string;
    description: string;

}
const Card = ({ title, description }: Props) => {
    return (
        <div className="  container mx-auto mb-4  bg-white rounded-lg shadow-md hover:shadow-2xl overflow-hidden flex flex-col md:flex-row">
            {/* Contenedor de texto */}
            <div className="p-6 flex-1">
                <h2 className="text-2xl font-bold text-title">{title}</h2>
                <p className="mt-4 text-gray-600">
                    {description}
                </p>
            </div>




        </div>
    );
};

export default Card;
