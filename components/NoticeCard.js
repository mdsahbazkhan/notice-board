import Link from "next/link";

const CATEGORY_STYLES = {
  EXAM: "bg-purple-100 text-purple-700",
  EVENT: "bg-blue-100 text-blue-700",
  GENERAL: "bg-gray-100 text-gray-700",
};

const formatDate = (date) =>
  new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

export default function NoticeCard({ notice, onDelete }) {
  const categoryStyle = CATEGORY_STYLES[notice.category] || CATEGORY_STYLES.GENERAL;

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {notice.image && (
        <div className="h-40 w-full overflow-hidden bg-gray-100">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={notice.image}
            alt={notice.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h2 className="text-lg font-bold leading-snug text-gray-900">
            {notice.title}
          </h2>

          {notice.priority === "URGENT" && (
            <span className="flex shrink-0 items-center gap-1 rounded-full bg-red-100 px-2.5 py-1 text-xs font-semibold text-red-700">
              <span className="h-1.5 w-1.5 rounded-full bg-red-600" />
              Urgent
            </span>
          )}
        </div>

        <p className="mt-2 flex-1 whitespace-pre-line text-sm leading-relaxed text-gray-600">
          {notice.body}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${categoryStyle}`}>
            {notice.category}
          </span>
          <span className="text-xs font-medium text-gray-400">
            Published {formatDate(notice.publishDate)}
          </span>
        </div>

        <div className="mt-5 flex gap-2 border-t border-gray-100 pt-4">
          <Link
            href={`/edit/${notice.id}`}
            className="flex-1 rounded-lg border border-blue-200 bg-blue-50 px-4 py-2 text-center text-sm font-semibold text-blue-700 transition-colors hover:bg-blue-100"
          >
            Edit
          </Link>

          <button
            type="button"
            onClick={() => onDelete(notice.id)}
            className="flex-1 rounded-lg border border-red-200 bg-red-50 px-4 py-2 text-sm font-semibold text-red-700 transition-colors hover:bg-red-100"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
