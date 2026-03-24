import { collection, addDoc, getDocs, query, orderBy, doc, updateDoc, deleteDoc, getDoc, serverTimestamp, Timestamp } from "firebase/firestore";
import { db } from "@/firebase/config";

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  created_at: string;
  is_read: boolean;
}

export type ContactMessageInsert = Omit<
  ContactMessage,
  "id" | "created_at" | "is_read"
>;

const COLLECTION_NAME = "contacts";

const normalizeContactMessage = (id: string, data: Record<string, unknown>): ContactMessage => {
  const createdAtRaw = data.created_at;
  let createdAtString = new Date().toISOString();

  if (createdAtRaw instanceof Timestamp) {
    createdAtString = createdAtRaw.toDate().toISOString();
  } else if (createdAtRaw) {
    const parsed = new Date(typeof createdAtRaw === "string" ? createdAtRaw : "");
    if (!isNaN(parsed.getTime())) {
      createdAtString = parsed.toISOString();
    }
  }

  return {
    id,
    name: typeof data.name === "string" ? data.name : "",
    email: typeof data.email === "string" ? data.email : "",
    subject: typeof data.subject === "string" ? data.subject : "",
    message: typeof data.message === "string" ? data.message : "",
    created_at: createdAtString,
    is_read: typeof data.is_read === "boolean" ? data.is_read : false,
  };
};

export const contactService = {
  async getAllMessages(): Promise<{
    data: ContactMessage[] | null;
    error: Error | null;
  }> {
    try {
      const q = query(collection(db, COLLECTION_NAME), orderBy("created_at", "desc"));
      const snapshot = await getDocs(q);
      const messages = snapshot.docs.map((docSnapshot) => normalizeContactMessage(docSnapshot.id, docSnapshot.data()));
      return { data: messages, error: null };
    } catch (error) {
      console.error("❌ Error fetching messages:", error);
      return { data: null, error: error as Error };
    }
  },

  async insertMessage(
    message: ContactMessageInsert
  ): Promise<{ data: ContactMessage | null; error: Error | null }> {
    try {
      const docRef = await addDoc(collection(db, COLLECTION_NAME), {
        ...message,
        created_at: serverTimestamp(),
        is_read: false,
      });

      return {
        data: {
          id: docRef.id,
          name: message.name,
          email: message.email,
          subject: message.subject,
          message: message.message,
          created_at: new Date().toISOString(),
          is_read: false,
        },
        error: null,
      };
    } catch (error) {
      console.error("❌ Error inserting message:", error);
      return { data: null, error: error as Error };
    }
  },

  async markAsRead(
    id: string
  ): Promise<{ data: ContactMessage | null; error: Error | null }> {
    try {
      const docRef = doc(db, COLLECTION_NAME, id);
      await updateDoc(docRef, { is_read: true });

      const updatedDoc = await getDoc(docRef);
      if (!updatedDoc.exists()) {
        throw new Error("Message not found");
      }

      return { data: normalizeContactMessage(updatedDoc.id, updatedDoc.data()), error: null };
    } catch (error) {
      console.error("❌ Error marking message as read:", error);
      return { data: null, error: error as Error };
    }
  },

  async deleteMessage(id: string): Promise<{ error: Error | null }> {
    try {
      await deleteDoc(doc(db, COLLECTION_NAME, id));
      return { error: null };
    } catch (error) {
      console.error("❌ Error deleting message:", error);
      return { error: error as Error };
    }
  },
};
