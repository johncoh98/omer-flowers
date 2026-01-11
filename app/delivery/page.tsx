import { redirect } from "next/navigation";

export const metadata = {
  title: "משלוחים | פרחי עומר",
  description: "מידע על משלוחים עבר לעמוד יצירת קשר.",
};

export default function DeliveryPage() {
  redirect("/contact");
}




