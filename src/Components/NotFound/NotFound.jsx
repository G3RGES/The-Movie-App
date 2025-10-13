import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white px-6 text-center">
      <div className="relative">
        <h1 className="text-[120px] font-extrabold tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
          404
        </h1>
        <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-gray-400 text-sm tracking-widest">
          NOT FOUND
        </span>
      </div>

      <p className="mt-12 text-gray-300 max-w-md text-lg leading-relaxed">
        The page you tried to reach doesn’t exist. Maybe it moved. Maybe it
        never was. But you’re still here — and that’s what matters.
      </p>

      <div className="mt-10 flex gap-4">
        <button
          onClick={() => navigate(-1)}
          className="px-6 py-3 rounded-xl bg-gray-700 hover:bg-gray-600 transition font-semibold"
        >
          Go Back
        </button>
        <button
          onClick={() => navigate("/")}
          className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 transition font-semibold"
        >
          Home
        </button>
      </div>

      <div className="absolute bottom-6 text-xs text-gray-500">
        © {new Date().getFullYear()} The Movie App
      </div>
    </div>
  );
}
