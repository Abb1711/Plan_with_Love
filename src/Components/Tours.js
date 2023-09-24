import Card from "./Cards";

function Tours({tours,removeTour}){
    return (
        <div className="container">
            <div className="title">
            <h2> Plan With Love</h2>
            </div>
            <div className="cards">
            {
                tours.map( (tour) => {
                    return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>
                    //this ...tour is doing clonig and this is spread operator
                    //tht copy tht entire data of tour in card's components.

                })
            }
            </div>
            
        </div>
    );
}
export default Tours;