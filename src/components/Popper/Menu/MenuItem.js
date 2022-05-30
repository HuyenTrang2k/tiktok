import Button from "../../Button";

function MenuItem({data}) {
    // convert sang chuoi
    return (
        <Button>{data.title}</Button>
        
    );
}

export default MenuItem;