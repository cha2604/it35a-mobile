import { IonContent, IonHeader, IonIcon, IonItem, IonMenu, IonMenuButton, IonMenuToggle, IonPage, IonRouterOutlet, IonSplitPane, IonTitle, IonToolbar } from '@ionic/react';
import { Redirect, Route } from 'react-router-dom';


const Menu: React.FC = () => {
  const path = [
    { url: '/app/home', icon: 'home', name: 'Home' },
    // Add more menu items as needed
  ];

  return (
    <IonPage>
        <IonSplitPane contentId= "main">
            <IonMenu contentId="main">
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Menu</IonTitle>
                    </IonToolbar>
                </IonHeader>
                
            </IonMenu>
            <IonContent>
                <IonHeader>
                    <IonToolbar>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    {path.map((item, index) => (
                        <IonMenuToggle key={index}>
                            <IonItem routerLink={item.url} routerDirection="forward">
                                <IonIcon icon={item.icon} slot="start"></IonIcon>
                                {item.name}
                            </IonItem>
                        </IonMenuToggle>
                    ))}
                </IonContent>
            </IonMenu>
            <IonContent>
                <IonRouterOutlet id="main">
                    <Route path="/app/home" component={Home} />
                    <Route exact path="/app">
                        <Redirect to="/app/home" />
                    </Route>
                </IonRouterOutlet>
            </IonContent>
            </IonSplitPane>
        </IonPage>
      );
    };