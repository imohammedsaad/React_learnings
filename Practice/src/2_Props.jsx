import PropTypes from 'prop-types'

function Results (props){
const BgColor= props.score >= 7 ? "#07cc00ff" : "#cc0700ff";
const style = {
    border: "2px solid #000000ff",
    borderRadius: "10px",
    width: "120px",
    padding: "10px",
    textAlign: "center",
    margin: "20px auto",
    background: BgColor,
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
}
    return(
        <div style={style}>
            <p>Name: {props.name}</p>
            <p>Current GPA : {props.score}</p>
        </div>
    );
}
    
    Results.propTypes = {
        name: PropTypes.string,      
        score: PropTypes.number.isRequired,
    };
    // Results.defaultProps = {
    //     name: "Guest User",
    //     score: 9,
    // }
export default Results