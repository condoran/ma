import './Item.css';
import {IonButton} from "@ionic/react";
import {MouseEventHandler} from "react";
import axios from "axios";
import {useHistory} from "react-router";

interface ItemProp {
    id?: string;
    damage: string;
    rarity: string;
    price: string;
}

// @ts-ignore
const Item: React.FC<ItemProp> = (props) => {

    const history = useHistory();

    function deleteHandler(e) {
        e.preventDefault();
        console.log(axios({
            url: 'http://localhost:8080/items/' + props.id,
            method: 'delete',
            data: props.id
        }).then(response => {
            console.log(response);
            return response.data;
        }))
        history.push("/");
        return e;
    }

    return (
        <div className="card">
            <div className='item-details'>{props.damage}</div>
            <div className='item-details'>{props.rarity}</div>
            <div className='item-details'>{props.price}</div>
            <IonButton className="item-button" href={'/items/'+props.id} color="primary" slot="end" >See More</IonButton>
            <IonButton className="item-button" onClick={deleteHandler} color="primary" slot="end" >Delete</IonButton>
        </div>
    )
}

export default Item;