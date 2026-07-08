import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import NoticeForm from "../components/NoticeForm";

export default function CreateNotice() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    title: "",
    body: "",
    category: "GENERAL",
    priority: "NORMAL",
    publishDate: "",
    image: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post("/api/notices", formData);

    router.push("/");
  };

  return (
    <div className="mx-auto max-w-2xl px-6 py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Create Notice</h1>
        <p className="mt-1 text-sm text-gray-500">
          Fill in the details below to publish a new notice.
        </p>
      </div>

      <NoticeForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        buttonText="Create Notice"
      />
    </div>
  );
}
