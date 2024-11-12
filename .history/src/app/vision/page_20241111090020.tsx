import Hero from '@/components/Hero'

export default function VisionPage() {
    return (
        <div> <Hero title='Nuestra Misión' subtitle='Nuestra Visión' />
            <div className="max-w-7xl mx-auto my-10 px-6">
                {/* Título centrado */}
                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-10">Nuestra Visión y Misión</h2>

                {/* Grid de 2 columnas */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* Tarjeta de Visión */}
                    <div className="bg-white shadow-xl rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Visión</h3>
                        <p className="text-gray-600 text-base  tracking-widest">
                            En  el Colegio <b>NUEVO HORIZONTE</b>, aspiramos a ser una institución educativa de excelencia,
                            comprometida con la formación integral de nuestros estudiantes, impulsando su crecimiento
                            académico, personal y social, para que sean ciudadanos responsables y capaces de enfrentar
                            los retos del futuro.
                        </p>
                    </div>

                    {/* Tarjeta de Misión */}
                    <div className="bg-white shadow-xl rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Misión</h3>
                        <p className="text-gray-600 text-base tracking-widest">
                            Nuestra misión es ofrecer una educación de alta calidad basada en valores, que fomente
                            el pensamiento crítico, el respeto mutuo y la solidaridad, preparando a nuestros estudiantes
                            para ser líderes positivos en sus comunidades y profesionales de éxito.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
