import AchievementList from "@/components/AchievementList";
import Card from "@/components/Card";
import Hero from "@/components/Hero";

export default function AboutPage() {
  return (
    <div>
      <Hero
        colorWave="#fafafa"
        subtitle="NUESTRA HISTORIA"
        title="¿Quienes Somos?"
      />
      <Card
        title="¿Quienes Somos ?"
        description="Somos un Colegio de reconocida trayectoria educativa, que imparte una educación democrática centrada en el desarrollo del ser humano, en el marco del conocimiento y valoración de la cultura peruana."
      />
      <Card
        title="Nuestra Historia"
        description="RESEÑA HISTÓRICA
En el Barrio Villa Hermosa del Misti de la ciudad de Juliaca, a comienzos del año 2000 en pleno desarrollo de la ciudad, surge una nueva propuesta educativa, conocedores de la necesidad de tener una educación de calidad en nuestra localidad, es así, que un gran equipo de profesionales jóvenes de la zona elaboran un proyecto educativo la cual fue presentando a la Dirección Regional de Educación Puno, cumpliendo con los requisitos establecidos por la oficina de asesoramiento técnico, visado por la oficina de asesoría jurídica, opinado por la Dirección Técnica Pedagógica de la Dirección Regional de Educación Puno, en concordancia con la Ley General de Educación Nº 23384, Ley Orgánica del Ministerio de Educción Nº 25762 y su modificatoria Ley  Nº 26510, Ley de Centros Educativos  Privados Nº 26549. Se   Autoriza el funcionamiento del Centro Educativo de Gestión no Estatal Internacional “Nuevo Horizonte” Juliaca,  mediante la  Resolución Directoral N° 7826 – DREP. Con fecha 20 de Agosto del 2002, para ofrecer servicios educativos en sus niveles: Inicial, Primaria y Secundaria; siendo representado por el Mg. Walter Canaza Choquehuanca en calidad de Promotor. 
A lo largo de todos estos años la institución ha ido creciendo no sólo en infraestructura, sino también en Calidad Educativa con una tecnología de punta de acuerdo a los retos y desafíos de la realidad educativa de nuestra patria. 
En los 5 últimos años la Institución Educativa, ha sido participe en los diferentes concursos organizados por la Ugel San Román y Dirección Regional de Educación Puno, tal es así.
 

Finalmente cabe mencionar los estudiantes egresados de 5to. de secundaria, actualmente cursan en las distintas universidades: Universidad Nacional del Altiplano – Puno, Universidad Nacional de Juliaca, Universidad Católica Santa María de Arequipa, Universidad Católica San Pablo de Arequipa, UPeU de Juliaca y la Universidad UNI VALLE de Bolivia en sus distintas carreras profesionales. 
"
      />
      <AchievementList />
    </div>
  );
}
