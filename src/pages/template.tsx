import {IonButtons, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar} from '@ionic/react';

const Template: React.FC = () => {
  return (
    <IonPage> 
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonMenuButton />
                </IonButtons>
                <IonTitle>Template</IonTitle>   
            </IonToolbar>
        </IonHeader>
    </IonPage>
  );
};

export default Template;      