import ItemForm from "../components/ItemForm";
import "./AddItem.css";
import {useState} from "react";
import {IonButton, IonHeader, IonPage, IonTitle, IonToolbar} from "@ionic/react";
import axios from "axios";
import {useHistory} from "react-router";

const AddItem: React.FC = () => {

    const [item, setItem] = useState({damage: "", rarity: "", price: ""})

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
            url: 'http://localhost:8080/items',
            method: 'post',
            data: item
        }).then(response => {
            console.log(response);
            return response.data;
        }))
        history.push('/');
        return e;
    }

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

export default AddItem;