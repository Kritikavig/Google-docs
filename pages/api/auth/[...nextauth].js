import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { FirebaseAdapter } from "@next-auth/firebase-adapter";
import { firebaseConfig } from "../../../firebase";

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// import firebase from "firebase/app";
// import "firebase/firestore";

const firestore = (
  firebase.apps[0] ?? firebase.initializeApp(firebaseConfig)
).firestore();

export default NextAuth({
  // Configure one or more authentication providers, using google for firebase
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  adapter: FirebaseAdapter(firestore),  //to main, users in db
});
