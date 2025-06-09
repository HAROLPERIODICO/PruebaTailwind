import { Card } from "./card"
export const Cards-container = () => {

  const services = [
    {
      id: 1,
      title: "La mona",
      description: "Pelicula de terror",
      img: "",
      color: ""
    },
    {
      id: 2,
      title: "Supervisor",
      description: "El que supervisa",
      img: "",
      color: ""
    },
    {
      id: 3,
      title: "El cantante",
      description: "Hector Lavo",
      img: "",
      color: ""
    },
    {
      id: 4,
      title: "El despresiable",
      description: "Pelicula de suspenso",
      img: "",
      color: ""
    },    
  ]
    
  return (
    <section>
      {
      services.map(service => {
        return(
          <Card key={service.id} />
        )        
      })
      }
    </section>
  )
}
