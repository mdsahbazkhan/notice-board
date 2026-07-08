import { useEffect, useState } from "react";
import axios from "axios";
import NoticeCard from "../components/NoticeCard";
import Spinner from "../components/Spinner";
import ConfirmDialog from "../components/ConfirmDialog";
import Link from "next/link";

export default function Home() {
  // notices starts as null (loading) until the first fetch resolves.
  const [notices, setNotices] = useState(null);
  const [pendingDeleteId, setPendingDeleteId] = useState(null);

  const loadNotices = async () => {
    const res = await axios.get("/api/notices");
    return res.data;
  };

  const refreshNotices = async () => {
    setNotices(await loadNotices());
  };

  const confirmDelete = async () => {
    const id = pendingDeleteId;
    setPendingDeleteId(null);

    await axios.delete(`/api/notices/${id}`);

    refreshNotices();
  };

  useEffect(() => {
    let ignore = false;

    loadNotices().then((data) => {
      if (!ignore) setNotices(data);
    });

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <div className="mx-auto max-w-5xl px-6 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Notice Board</h1>
        <p className="mt-1 text-sm text-gray-500">
          Stay up to date with the latest announcements.
        </p>
      </div>

      {notices === null ? (
        <Spinner label="Loading notices..." />
      ) : notices.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-white py-20 text-center">
          <span className="text-4xl">🗒️</span>
          <h2 className="mt-4 text-lg font-semibold text-gray-900">
            No notices found
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Get started by creating your first notice.
          </p>
          <Link
            href="/create"
            className="mt-5 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700"
          >
            + Create Notice
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {notices.map((notice) => (
            <NoticeCard
              key={notice.id}
              notice={notice}
              onDelete={setPendingDeleteId}
            />
          ))}
        </div>
      )}

      <ConfirmDialog
        open={pendingDeleteId !== null}
        title="Delete this notice?"
        message="This action cannot be undone."
        onConfirm={confirmDelete}
        onCancel={() => setPendingDeleteId(null)}
      />
    </div>
  );
}
