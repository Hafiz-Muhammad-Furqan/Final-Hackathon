import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(""); // For handling form errors

  const { setUser } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email.trim() === "" || password.trim() === "") {
      toast.error("All Fields are required");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/auth/login`,
        {
          email,
          password,
        }
      );
      localStorage.setItem("token", response.data.token);
      setUser(response.data);

      navigate("/");
    } catch (error) {
      setError(
        error.response?.data?.message || "Login failed. Please try again."
      );
      toast.error(error.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#121212] p-2 md:p-4">
      <div className="w-full max-w-md bg-[#1c1c1c] px-4 py-8 md:p-8 rounded-lg border border-blue-900">
        <h2 className="text-3xl text-white font-semibold text-center mb-6">
          Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-2 p-3 rounded-md bg-[#2a2a2a] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-white"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-2 p-3 rounded-md bg-[#2a2a2a] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Error Message */}
          {error && <div className="text-red-500 text-sm">{error}</div>}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 mt-4 rounded-md ${
              loading ? "bg-gray-600" : "bg-blue-900 hover:bg-blue-700"
            } text-white font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer`}
          >
            {loading ? "Loading..." : "Login"}
          </button>
        </form>

        {/* Alternative sign-up link */}
        <div className="text-center mt-4">
          <p className="text-sm text-gray-400">
            Don't have an account?
            <Link to="/signup" className="text-blue-400 hover:underline">
              {" "}
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
