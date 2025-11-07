import "./Card.css"
function Card ({name, imgurl, description}) {
    
    const style  ={
  border: "1px solid #ccc",
  borderRadius: "10px",
  width: "250px",
  padding: "16px",
  textAlign: "center",
  background: "white",
  boxShadow:" 0 4px 8px rgba(0,0,0,0.1)"
}

  
    return(
        <>
        <div className="card" style={style}>
            <img src={imgurl} alt={`${name}'s Profile`}/>
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
        </>
    );

}
export default Card