const objetivostxt =
  {
    title: "Mejorar Marketing digital",
    text: "Tengo una Empresa nueva y pequeña de la cual me encargo de muchas cosas, Marketing Digital y publicidad es una de ellas, y aunque tengo cierta experiencia quiero mejorar mucho más"
  }
const motivostxt =
  {
    title: "Cultura Leaping Frog",
    text: "Mi empresa fue organizador del StartUp Grind que asistió Leaping Frog, al conocer Leaping Frog inmediamente sentí una conección en sus valores y pensamientos de emprendimiento (y además tomé varios consejos que me ayudaron :D )"
  }
const habilidadestxt =
  {
    title: "Marketing y Psicología",
    text: "Ya tengo una buena base de redes sociales (ver portafolio), facebook ads y bots de Facebook (Manychat), pero quiero destacar que la psicología que sé realmente ayuda mucho en las campañas de las redes (estudio psicología), también que he pasado mi vida en internet, sé muy bien como funciona internet en muchos niveles.   Otras habilidades: educación, programación, música, trucos de magia :D"
  }
const debilidadestxt =
  {
    title: "Diseño Gráfico",
    text: "No es muy común mencionar las debilidades pero prefiero ser sincero y claro desde el  principio, en todas mis campañas uso una herramienta online llamada CANVA (se aprende muy rápido), pero en temas de Photoshop estoy en cero"
  }
class botones
{
  constructor (doc,txt)
  {
    this.doc = doc;
    this.txt=txt;
  }
  escucha()
  {
    this.doc.addEventListener("click", ()=>
    {
      swal
      (
          this.txt
      )
      .then((ok)=>
      {
        if(ok)
        {
          console.log(1)
        }
      })
    })
  }

}
const objetivos = new botones(document.getElementById("objetivos"),objetivostxt)
const motivos = new botones (document.getElementById("motivos"),motivostxt)
const habilidades = new botones (document.getElementById("habilidades"),habilidadestxt)
const debilidades = new botones (document.getElementById("debilidades"),debilidadestxt)
objetivos.escucha()
motivos.escucha()
habilidades.escucha()
debilidades.escucha()
const portafolio = document.getElementById("portafolio")
portafolio.addEventListener("click", ()=>
{
  swal(
    {
      title: "Página de Stars Generator",
      text: "Esta es la página de Facebook de mi empresa, todas las campañas de ads las hice yo, en las últimas campañas usé un bot que trabaja cuando comentan la palabra SI, notarán que de a poco estamos formando un Branding, etc. Creo que ver la página es el mejor portafolio que les puedo mostrar para esta pasantía",
      buttons:
      {
        cancel: "Cancelar",
        confirm: "Ver página"
      }
    }
  )
  .then(confirm=>
  {
    if (confirm)
    {
      location.href ="https://www.facebook.com/starsgenerator";
    }
  })

})
