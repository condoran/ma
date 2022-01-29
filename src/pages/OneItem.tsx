import ItemForm from "../components/ItemForm";
import "./OneItem.css";
import axios from "axios";
import {useEffect, useState} from "react";
import {useHistory, useParams} from "react-router";
import {IonBackdrop, IonButton, IonHeader, IonPage, IonTitle, IonToolbar} from "@ionic/react";

interface OneItemProps {

}

const OneItem: React.FC<OneItemProps> = () => {

    const [item, setItem] = useState(null)

    // @ts-ignore
    const { id } = useParams();
    const sendGetRequest = () => {
        return axios({
            url: 'http://localhost:8080/item/' + id,
            method: 'get'
        }).then(response => {
            console.log(response);
            return response.data;
        })
    }

    useEffect(() => {
        sendGetRequest().then(data => setItem(data));
    }, [id])

    useEffect( () => {
        console.log(item)
    }, [item])

    function dmgHandler(e) {
        setItem({...item, damage: e.target.value});
        return e;
    }

    function rarHandler(e) {
        setItem({...item, rarity: e.target.value});
        return e;
    }

    function prcHandler(e) {
        setItem({...item, price: e.target.value});
        return e;
    }

    const history = useHistory();

    function submtiHandler(e) {
        e.preventDefault();
        console.log(axios({
            url: 'http://localhost:8080/item/' + id,
            method: 'put',
            data: item
        }).then(response => {
            console.log(response);
            return response.data;
        }))
        history.push("/");
        return e;
    }

    // @ts-ignore
    return (
        <IonPage className={"item-page"}>
            <IonHeader>
                <IonToolbar>
                    <IonButton href="/">&lt;</IonButton>
                    <IonTitle>The Item</IonTitle>
                </IonToolbar>
            </IonHeader>
            <div className="form">
                <ItemForm dmg={item!=null ? item?.damage : ""} rar={item!=null ? item?.rarity : ""} prc={item!=null ? item?.price : ""} dmgHandler={dmgHandler} rarHandler={rarHandler} prcHandler={prcHandler} submitHandler={submtiHandler} />
            </div>
        </IonPage>
    );
}

export default OneItem;