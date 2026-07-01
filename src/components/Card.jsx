function Card(props) {
return (
<div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
{props.children} </div>
);
}

export default Card;
