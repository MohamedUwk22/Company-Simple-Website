
export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-6">
      <div className="bg-white w-full max-w-md rounded-3xl shadow-xl p-10">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-3">Welcome Back</h2>
          <p className="text-slate-500">
            Login to your Revolution Media account.
          </p>
        </div>

        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold">
            Login
          </button>
        </form>

        <p className="text-center text-sm text-slate-500 mt-6">
          Don’t have an account? Sign up
        </p>
      </div>
    </div>
  );
}

