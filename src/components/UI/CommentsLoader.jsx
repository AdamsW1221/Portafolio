export function CommentsLoader({ title = "Cargando comentarios..." }) {
  return (
    <div className="mt-6 space-y-3">
      {/* Card principal */}
      <div className="bg-[#0c1322] border border-gray-800 rounded-md p-4">
        <div className="flex items-center justify-between gap-3">
          <p className="text-gray-300">{title}</p>

          {/* Spinner */}
          <div className="w-5 h-5 rounded-full border-2 border-gray-600 border-t-indigo-500 animate-spin" />
        </div>

        <p className="text-gray-500 text-xs mt-2">
          Si la base de datos estaba inactiva, puede tardar unos segundos…
        </p>
      </div>

      {/* Skeleton comments */}
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          className="bg-[#0c1322] border border-gray-800 rounded-md p-4"
        >
          <div className="flex items-center justify-between">
            <div className="h-4 w-28 bg-[#121c34] rounded animate-pulse" />
            <div className="h-3 w-20 bg-[#121c34] rounded animate-pulse" />
          </div>

          <div className="mt-3 space-y-2">
            <div className="h-3 w-full bg-[#121c34] rounded animate-pulse" />
            <div className="h-3 w-5/6 bg-[#121c34] rounded animate-pulse" />
            <div className="h-3 w-2/3 bg-[#121c34] rounded animate-pulse" />
          </div>
        </div>
      ))}
    </div>
  );
}
