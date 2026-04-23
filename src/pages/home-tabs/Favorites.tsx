import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";

const Favorites: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Favorites</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <p>Favorites page content</p>
      </IonContent>
    </IonPage>
  );
};

export default Favorites;