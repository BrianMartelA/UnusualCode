import { Injectable } from '@angular/core';
import { Users } from '../models/user.models';
import {
  Firestore,
  doc,
  setDoc,
  getDoc,
  collection,
  getDocs,
  collectionData,
  query,
  getFirestore
} from '@angular/fire/firestore';
import { Classes } from '../models/classes.models';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  constructor(private firestore: Firestore) {}

  async createUser(uid: string, userData: Users) {
    const userDocRef = doc(this.firestore, `Users/${uid}`);
    try {
      await setDoc(userDocRef, userData);
    } catch (error) {}
  }

  async getUser(uid: string) {
    const userDocRef = doc(this.firestore, `Users/${uid}`);
    const userDoc = await getDoc(userDocRef);
    return userDoc.exists() ? userDoc.data() : null;
  }




  async getAllClasses(): Promise<Classes[]> {
    const classesCollectionRef = collection(this.firestore, 'Classes'); // Referencia a la colección
    const classesSnapshot = await getDocs(classesCollectionRef); // Obtener snapshot de la colección

    // Mapear el snapshot a un arreglo de objetos `Classes`
    return classesSnapshot.docs.map(doc => {
      const data = doc.data() as Classes;
      return {
        id: doc.id, // Asignar el ID manualmente
        name: data.name,
        teacher: data.teacher,
        hour: data.hour,
        classroom: data.classroom,
        section: data.section
      } as Classes;
    });
  }



}

