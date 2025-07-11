import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import { app } from "./config";

const db = getFirestore(app);

export const getProducts = async () => {
    const querySnapshot = await getDocs(collection(db, "productos"));
    const productos = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
    }));
    return productos;
};

export const createOrder = async (orderData) => {
    try {
        const docRef = await addDoc(collection(db, "orders"), orderData);
        return docRef.id;
    } catch (error) {
        console.error("Error al crear la orden:", error);
        throw error; // Re-lanza el error para que lo maneje quien llame la función
    }
};