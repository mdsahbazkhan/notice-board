import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import NoticeForm from "../../components/NoticeForm";
import Spinner from "../../components/Spinner";
import axios from "axios";

export default function EditNotice() {
  const router = useRouter();
  const { id } = router.query;

  // formData starts as null (loading) until the notice is fetched.
  const [formData, setFormData] = useState(null);

  const loadNotice = async () => {
    const res = await axios.get(`/api/notices/${id}`);

    return {
      title: res.data.title,
      body: res.data.body,
      category: res.data.category,
      priority: res.data.priority,
      publishDate: res.data.publishDate.split("T")[0],
      image: res.data.image || "",
    };
  };

  useEffect(() => {
    if (!id) return;

    let ignore = false;

    loadNotice().then((data) => {
      if (!ignore) setFormData(data);
    });

    return () => {
      ignore = true;
    };
  }, [id]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.put(`/api/notices/${id}`, formData);

    router.push("/");
  };

  return (
    <div className="mx-auto max-w-2xl px-6 py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Edit Notice</h1>
        <p className="mt-1 text-sm text-gray-500">
          Update the notice details below.
        </p>
      </div>

      {formData === null ? (
        <Spinner label="Loading notice..." />
      ) : (
        <NoticeForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          buttonText="Update Notice"
        />
      )}
    </div>
  );
}
