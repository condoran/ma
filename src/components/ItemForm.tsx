import './ItemForm.css'
import {FormEventHandler, MouseEventHandler, useEffect, useState} from "react";
import {IonButton, IonInput} from "@ionic/react";

interface ItemFormInterface {
    dmg?: string;
    rar?: string;
    prc?: string;
    dmgHandler(e): MouseEventHandler<HTMLIonButtonElement>;
    rarHandler(e): MouseEventHandler<HTMLIonButtonElement>;
    prcHandler(e): MouseEventHandler<HTMLIonButtonElement>;
    submitHandler(e): FormEventHandler<any>;
}

const ItemForm: React.FC<ItemFormInterface> = (props) => {


    return (
        <form onSubmit={props.submitHandler}>
            <div>
                <label>Damage</label>
                <input type="text" value={props.dmg} onChange={props.dmgHandler} />
            </div>
            <div>
                <label>Rarity</label>
                <input type="text" value={props.rar} onChange={props.rarHandler} />
            </div>
            <div>
                <label>Price</label>
                <input type="text" value={props.prc} onChange={props.prcHandler} />
            </div>
            <div>
                <IonButton type="submit">Add/Update</IonButton>
            </div>
        </form>
    );
}

export default ItemForm;