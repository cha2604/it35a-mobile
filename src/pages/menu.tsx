<<<<<<< HEAD
import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonMenu,
  IonMenuToggle,
  IonPage,
  IonRouterOutlet,
  IonSplitPane,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { homeOutline, logOutOutline } from "ionicons/icons";
import { Redirect, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import template from "./template";

const Menu: React.FC = () => {
  const path = [
    { name: "Home", url: "/app/home", icon: homeOutline },
    { name: "About", url: "/app/about", icon: homeOutline }
=======
import {IonPage,IonHeader,IonToolbar,IonTitle,IonContent,IonSplitPane,IonMenu,IonRouterOutlet,IonMenuToggle,IonIcon,IonItem,IonButton} from "@ionic/react";

import { Redirect, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import { homeOutline, logOutOutline } from "ionicons/icons";

const Menu: React.FC = () => {

  const paths = [
    { name: 'Home', url: '/app/home', icon: homeOutline },
    { name: 'About', url: '/app/about', icon: homeOutline }
>>>>>>> d48d81c (fix Menu filename case)
  ];

  return (
    <IonPage>
      <IonSplitPane contentId="main">
<<<<<<< HEAD
=======

        {/* SIDE MENU */}
>>>>>>> d48d81c (fix Menu filename case)
        <IonMenu contentId="main">
          <IonHeader>
            <IonToolbar>
              <IonTitle>Menu</IonTitle>
            </IonToolbar>
          </IonHeader>
<<<<<<< HEAD
          <IonContent>
            {path.map((item, index) => (
=======

          <IonContent>
            {paths.map((item, index) => (
>>>>>>> d48d81c (fix Menu filename case)
              <IonMenuToggle key={index}>
                <IonItem routerLink={item.url} routerDirection="forward">
                  <IonIcon icon={item.icon} slot="start" />
                  {item.name}
                </IonItem>
              </IonMenuToggle>
            ))}
<<<<<<< HEAD
=======
        
>>>>>>> d48d81c (fix Menu filename case)
            <IonButton routerLink="/app/home" routerDirection="forward" expand="full">
              <IonIcon icon={homeOutline} slot="start" />
              Home
            </IonButton>
<<<<<<< HEAD
            <IonButton routerLink="/app/about" routerDirection="forward" expand="full">
              About
            </IonButton>
=======

            <IonButton routerLink="/app/about" routerDirection="forward" expand="full">
            About
            </IonButton>

>>>>>>> d48d81c (fix Menu filename case)
            <IonButton routerLink="/" routerDirection="back" expand="full">
              <IonIcon icon={logOutOutline} slot="start" />
              Logout
            </IonButton>
          </IonContent>
        </IonMenu>
<<<<<<< HEAD
        <IonRouterOutlet id="main">
          <Route exact path="/app/home" component={Home} />
          <Route exact path="/app/about" component={About} />
=======

        {/* MAIN CONTENT */}
        <IonRouterOutlet id="main">
          <Route exact path="/app/home" component={Home} />
>>>>>>> d48d81c (fix Menu filename case)
          <Route exact path="/app">
            <Redirect to="/app/home" />
          </Route>
        </IonRouterOutlet>
<<<<<<< HEAD
=======

>>>>>>> d48d81c (fix Menu filename case)
      </IonSplitPane>
    </IonPage>
  );
};

export default Menu;