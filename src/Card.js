
const Card = (props) => {
    const card = props.card;
    
    return(
        <div class="col-sm-4 text-white my-4 ">
        <div class="card bg-secondary py-5">
          <div class="card-body  d-flex align-center justify-content-center">
            <h5 class="card-title">{card.title}</h5>
            <hr />
          
          </div>
        </div>
      </div>
    );
  }
  export default Card ;