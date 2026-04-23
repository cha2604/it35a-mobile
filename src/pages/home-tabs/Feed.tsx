import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonIcon, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { thumbsUpOutline, chatbubbleOutline, share } from "ionicons/icons";

const Feed: React.FC = () => {

  const AncientHeroes = [
    { name: 'Zeus', subtitle: 'God of Thunder', description: 'Ruler of Mount Olympus and the heavens.' },
    { name: 'Anti Mage', subtitle: 'The Outcast', description: 'A mage who rejects all magic and fights against it.' },
    { name: 'Phantom Assassin', subtitle: "Death's Daughter", description: 'A deadly assassin who strikes from the shadows.' },
    { name: 'Queen of Pain', subtitle: 'The Agony', description: 'Master of pain and suffering.' },
    { name: 'Shadow Fiend', subtitle: 'The Demon', description: 'A demon who feeds on souls.' },
  ];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Feed</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {AncientHeroes.map((hero, index) => (
          <IonCard key={index}>
            <img alt={hero.name} src="https://ionicframework.com/docs/img/demos/card-media.png" />
            <IonCardHeader>
              <IonCardTitle>{hero.name}</IonCardTitle>
              <IonCardSubtitle>{hero.subtitle}</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              {hero.description}
            </IonCardContent>
            <div style={{ display: 'flex', justifyContent: 'space-around', padding: '16px' }}>
              <IonButton fill="clear">
                <IonIcon slot="icon-only" icon={thumbsUpOutline} />
              </IonButton>
              <IonButton fill="clear">
                <IonIcon slot="icon-only" icon={chatbubbleOutline} />
              </IonButton>
              <IonButton fill="clear">
                <IonIcon slot="icon-only" icon={share} />
              </IonButton>
            </div>
          </IonCard>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Feed;