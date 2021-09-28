import React from "react";

const Touristinfocards = () => {
  const infos = [
    {
      city: "Glasgow",
      image:
        "https://images.unsplash.com/photo-1611605877189-b9743c2ef324?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2xhc2dvd3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
      link: "peoplemakeglasgow.com",
      des:
        "Glasgow est une ville portuaire située sur la rivière Clyde dans les Lowlands à l'ouest de l'Écosse. Elle est connue pour son architecture victorienne et art nouveau, témoignage de la prospérité de la ville du XVIIIe au XXe siècle grâce au commerce et à la construction navale. "
    },
    {
      city: "Manchester",
      image:
        "https://images.unsplash.com/photo-1619284518317-85b1ab8c7723?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFuY2hlc3RlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
      link: "visitmanchester.com",
      des:
        "Grande ville du nord-ouest de l'Angleterre, Manchester possède un riche patrimoine industriel. Le système de canaux de la zone de préservation de Castlefield, datant du XVIIIe siècle, rappelle la vie de la cité lorsque cette dernière était un important centre de production textile."
    },
    {
      city: "London",
      image:
        "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bG9uZG9uJTIwY2l0eXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
      link: "visitlondon.com",
      des:
        "Londres, la capitale de l'Angleterre et du Royaume-Uni, est une ville moderne dont l'histoire remonte à l'époque romaine. En son centre se dressent l'imposant Parlement, l'emblématique Big Ben et l'abbaye de Westminster, lieu de couronnement des monarques britanniques"
    }
  ];

  return (
    <div className="cardcontainer">
      <div className="card">
        {infos.map(function(inf) {
          return (
            <div className="unicard" key={inf.city}>
              <img src={inf.image} />
              <h3>{inf.city}</h3>
              <p>{inf.des}</p>
              <button>
                <a href={inf.link}>More informations</a>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Touristinfocards;
