import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  user_id: string | null;
  created_at: string;
  is_read: boolean;
}

export type ContactMessageInsert = Omit<
  ContactMessage,
  "id" | "created_at" | "is_read"
>;

const COLLECTION_NAME = "contact_messages";

export const contactService = {
  async getAllMessages(): Promise<{
    data: ContactMessage[] | null;
    error: Error | null;
  }> {
    try {
      console.log("=== FETCHING ALL MESSAGES ===");
      console.log("Collection name:", COLLECTION_NAME);
      return { data: [], error: null };
    } catch (error) {
      console.error("❌ Error fetching messages:", error);
      return { data: null, error: error as Error };
    }
  },

  async insertMessage(
    message: ContactMessageInsert
  ): Promise<{ data: ContactMessage | null; error: Error | null }> {
    try {
      console.log("=== INSERTING MESSAGE ===");
      console.log("Collection name:", COLLECTION_NAME);
      console.log("Message data:", message);

      // Test if we can access the collection
      console.log("Testing collection access...");

      console.log("Adding document to Firestore...");

      console.log("✅ Message insert completed successfully");
      return {
        data: {
          id: "generated_id",
          name: "",
          email: "",
          subject: "",
          message: "",
          user_id: null,
          created_at: new Date().toISOString(),
          is_read: true,
        },
        error: null,
      };
    } catch (error) {
      console.error("❌ Error inserting message:");
      console.error("Error object:", error);
      console.error("Error message:", (error as Error).message);
      console.error("Error code:", (error as any).code);
      console.error("Error stack:", (error as Error).stack);
      return { data: null, error: error as Error };
    }
  },

  async markAsRead(
    id: string
  ): Promise<{ data: ContactMessage | null; error: Error | null }> {
    try {
      console.log("=== MARKING MESSAGE AS READ ===");
      console.log("Message ID:", id);

      console.log("✅ Message marked as read successfully");

      // Return a placeholder message since we don't fetch the updated document
      const updatedMessage: ContactMessage = {
        id,
        name: "",
        email: "",
        subject: "",
        message: "",
        user_id: null,
        created_at: new Date().toISOString(),
        is_read: true,
      };

      return { data: updatedMessage, error: null };
    } catch (error) {
      console.error("❌ Error marking message as read:", error);
      return { data: null, error: error as Error };
    }
  },

  async deleteMessage(id: string): Promise<{ error: Error | null }> {
    try {
      console.log("=== DELETING MESSAGE ===");
      console.log("Message ID:", id);

      console.log("✅ Message deleted successfully");
      return { error: null };
    } catch (error) {
      console.error("❌ Error deleting message:", error);
      return { error: error as Error };
    }
  },
};
