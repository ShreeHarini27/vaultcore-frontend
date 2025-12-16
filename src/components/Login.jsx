import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:8080/login", {
        username,
        password,
      });

      // JWT token from backend
      const token = response.data.token;

      // Store token (frontend responsibility)
      localStorage.setItem("vaultcore_token", token);

      alert("Login successful!");
    } catch (err) {
      setError("Invalid username or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050814] flex items-center justify-center px-4">
      
      {/* Glow Effects */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-600/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 -right-32 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" />

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-10 shadow-2xl">
        
        <h1 className="text-4xl font-extrabold text-white text-center mb-2">
          VaultCore
        </h1>
        <p className="text-gray-300 text-center mb-8 text-sm">
          Next-Gen Financial Security Platform
        </p>

        <form onSubmit={handleLogin} className="space-y-6">
          
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-black/40 text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-black/40 text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />

          {error && (
            <p className="text-red-400 text-sm text-center">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-xl text-white font-semibold transition ${
              loading
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-90"
            }`}
          >
            {loading ? "Authenticating..." : "Enter Secure Vault"}
          </button>
        </form>

        <p className="text-center text-gray-400 text-xs mt-8">
          JWT-based authentication • Secure session handling
        </p>
      </div>
    </div>
  );
}

export default Login;
