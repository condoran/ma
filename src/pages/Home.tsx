import {IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import {useHistory} from "react-router";
import {MouseEventHandler} from "react";

interface HomeProps {
}

const Home: React.FC<HomeProps> = (props) => {

    // const changeToAdd = () => {
    //    const history = useHistory();
    //    history.push('additem')
    // }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>The Item List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">The Item Shop</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />
          <div className="add-button"><IonButton onClick={event => window.location.href="/additem"}>Add Item</IonButton></div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
