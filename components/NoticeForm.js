const inputClasses =
  "w-full rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 text-sm text-gray-900 shadow-sm transition-colors placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100";

export default function NoticeForm({
  formData,
  handleChange,
  handleSubmit,
  buttonText,
}) {
  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8"
    >
      <div>
        <label htmlFor="title" className="mb-1.5 block text-sm font-semibold text-gray-700">
          Title
        </label>
        <input
          id="title"
          type="text"
          name="title"
          placeholder="Enter notice title"
          value={formData.title}
          onChange={handleChange}
          className={inputClasses}
          required
        />
      </div>

      <div>
        <label htmlFor="body" className="mb-1.5 block text-sm font-semibold text-gray-700">
          Body
        </label>
        <textarea
          id="body"
          name="body"
          placeholder="Write the notice details..."
          value={formData.body}
          onChange={handleChange}
          className={`${inputClasses} resize-none`}
          rows="5"
          required
        />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="category" className="mb-1.5 block text-sm font-semibold text-gray-700">
            Category
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className={`${inputClasses} cursor-pointer`}
          >
            <option value="GENERAL">General</option>
            <option value="EVENT">Event</option>
            <option value="EXAM">Exam</option>
          </select>
        </div>

        <div>
          <label htmlFor="priority" className="mb-1.5 block text-sm font-semibold text-gray-700">
            Priority
          </label>
          <select
            id="priority"
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            className={`${inputClasses} cursor-pointer`}
          >
            <option value="NORMAL">Normal</option>
            <option value="URGENT">Urgent</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="publishDate" className="mb-1.5 block text-sm font-semibold text-gray-700">
            Publish Date
          </label>
          <input
            id="publishDate"
            type="date"
            name="publishDate"
            value={formData.publishDate}
            onChange={handleChange}
            className={`${inputClasses} cursor-pointer`}
            required
          />
        </div>

        <div>
          <label htmlFor="image" className="mb-1.5 block text-sm font-semibold text-gray-700">
            Image URL <span className="font-normal text-gray-400">(optional)</span>
          </label>
          <input
            id="image"
            type="text"
            name="image"
            placeholder="https://example.com/image.jpg"
            value={formData.image}
            onChange={handleChange}
            className={inputClasses}
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-700 hover:shadow-md active:scale-[0.99] sm:w-auto sm:px-6"
      >
        {buttonText}
      </button>
    </form>
  );
}
