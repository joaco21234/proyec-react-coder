import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import { app } from "./config";
import { doc, getDoc } from "firebase/firestore";

const db = getFirestore(app);

export const getProducts = async () => {
    const querySnapshot = await getDocs(collection(db, "productos"));
    const productos = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
    }));
    return productos;
};

export const getProductById = async (id) => {
    try {
        const docRef = doc(db, "productos", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return { id: docSnap.id, ...docSnap.data() };
        } else {
            return null;
        }
    } catch (error) {
        console.error("Error al obtener el producto por ID:", error);
        throw error;
    }
};

export const createOrder = async (orderData) => {
    try {
        const docRef = await addDoc(collection(db, "orders"), orderData);
        return docRef.id;
    } catch (error) {
        console.error("Error al crear la orden:", error);
        throw error;
    }
};