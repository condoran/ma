import './ExploreContainer.css';
import axios from "axios";
import {MouseEventHandler, useEffect, useState} from "react";
import {IonButton, IonHeader, IonItem, IonList, IonListHeader} from "@ionic/react";
import Item from './Item';

interface ContainerProps {

}

const ExploreContainer: React.FC<ContainerProps> = (props) => {

    const [items, setItems] = useState([]);

    const sendGetRequest = () => {
        return axios({
            url: 'http://localhost:8080/items',
            method: 'get'
        }).then(response => {
            console.log(response);
            return response.data;
        })
    }

    useEffect(() => {
        sendGetRequest().then(data => setItems(data));
    })

    return (
        <div className="container">
            <IonList>
            {items.map(item => {
                return (
                    <IonItem key={item['id']}>
                        <Item id={item['id']} damage={"damage: "+item['damage']} price={"price: "+item['price']} rarity={"rarity: "+item['rarity']} ></Item>
                    </IonItem>
                )
            })}
            </IonList>
        </div>
    );
};

export default ExploreContainer;