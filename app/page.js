'use client';

import { useEffect, useState } from "react";
import {
  AlertCircle,
  ArrowRight,
  BookOpen,
  Camera,
  CheckCircle2,
  ChevronRight,
  Coins,
  Copy,
  Crown,
  Gem,
  Globe,
  Home,
  Instagram,
  LayoutGrid,
  Leaf,
  Loader2,
  Lock,
  LogOut,
  Mail,
  Map,
  Menu,
  Palette,
  QrCode,
  Scan,
  Scroll,
  Search,
  Shield,
  Smartphone,
  Sparkles,
  Sword,
  TrendingUp,
  User,
  X,
  Zap,
} from "lucide-react";

/**
 * FOMUS APP - Production Edition (v3.0 Final)
 * Status: Production Ready
 */

const COLORS = {
  black: "#0a0a0a",
  gold: "#C19865",
  blue: "#6BC4D6",
  error: "#ef4444",
  success: "#22c55e",
};

const generateId = () => "8021-" + Math.floor(1000 + Math.random() * 9000);

const getLevelData = (exp) => {
  const level = Math.floor(exp / 1000) + 1;
  const nextLevelExp = level * 1000;
  const progress = ((exp % 1000) / 1000) * 100;

  let tierData = {
    name: "NOVICE",
    color: "#94a3b8",
    bgGradient: "from-slate-900 via-slate-800 to-black",
    border: "border-slate-500/30",
    shadow: "shadow-slate-500/20",
    icon: Shield,
  };

  if (level >= 10 && level < 30)
    tierData = {
      name: "ADEPT",
      color: "#cd7f32",
      bgGradient: "from-orange-950 via-stone-900 to-black",
      border: "border-orange-700/30",
      shadow: "shadow-orange-700/20",
      icon: Sword,
    };
  else if (level >= 30 && level < 50)
    tierData = {
      name: "MASTER",
      color: "#e2e8f0",
      bgGradient: "from-gray-900 via-slate-800 to-black",
      border: "border-white/30",
      shadow: "shadow-white/10",
      icon: Zap,
    };
  else if (level >= 50 && level < 80)
    tierData = {
      name: "LEGEND",
      color: "#C19865",
      bgGradient: "from-yellow-950 via-amber-950 to-black",
      border: "border-[#C19865]/40",
      shadow: "shadow-[#C19865]/20",
      icon: Crown,
    };
  else if (level >= 80)
    tierData = {
      name: "MYTHIC",
      color: "#a855f7",
      bgGradient: "from-indigo-950 via-purple-950 to-black",
      border: "border-purple-500/40",
      shadow: "shadow-purple-500/20",
      icon: Sparkles,
    };

  return { level, nextLevelExp, progress, ...tierData };
};

const ToastContainer = ({ toasts }) => (
  <div className="fixed top-4 left-0 right-0 z-[100] flex flex-col items-center gap-2 pointer-events-none px-4">
    {toasts.map((toast) => (
      <div
        key={toast.id}
        className={`flex items-center gap-3 px-4 py-3 rounded-xl shadow-2xl backdrop-blur-md border animate-in slide-in-from-top-5 fade-in duration-300 max-w-sm w-full pointer-events-auto
          ${
            toast.type === "success"
              ? "bg-[#1a1a1a]/90 border-green-500/30 text-green-400"
              : toast.type === "error"
                ? "bg-[#1a1a1a]/90 border-red-500/30 text-red-400"
                : "bg-[#1a1a1a]/90 border-white/10 text-white"
          }`}
      >
        {toast.type === "success" && <CheckCircle2 size={18} />}
        {toast.type === "error" && <AlertCircle size={18} />}
        <span className="text-sm font-medium">{toast.message}</span>
      </div>
    ))}
  </div>
);

const AuthScreen = ({ onLogin, addToast }) => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      addToast("Please enter a valid email address", "error");
      return;
    }
    if (!password || password.length < 6) {
      addToast("Password must be at least 6 characters", "error");
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      const userData = {
        id: generateId(),
        email: email,
        class: "Novice Adventurer",
        exp: isLoginMode ? 45800 : 0,
        fomusPoint: isLoginMode ? 2500 : 500,
        badges: isLoginMode ? 7 : 0,
        name: email.split("@")[0],
        instagram: "",
      };

      onLogin(userData);
      addToast(`Welcome back, ${userData.name}!`, "success");
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute top-[-20%] left-[-20%] w-[140%] h-[140%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#C19865]/10 via-transparent to-transparent animate-pulse duration-[5000ms]"></div>

      <div className="w-full max-w-sm z-10">
        <div className="text-center mb-12 animate-in slide-in-from-top-10 duration-700 flex flex-col items-center">
          <div className="w-32 h-32 bg-white rounded-3xl flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(193,152,101,0.2)] p-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="FOMUSlogo_edited.png"
              alt="FOMUS"
              className="w-full h-full object-contain"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "block";
              }}
            />
            <span className="hidden font-black text-4xl text-[#0a0a0a]">F</span>
          </div>
          <p className="text-xs text-[#C19865] font-bold tracking-[0.2em] uppercase">
            Connect to the Craft
          </p>
        </div>

        <div className="bg-[#1e1e1e]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl animate-in slide-in-from-bottom-10 duration-700 delay-100">
          <div className="flex gap-4 mb-8 p-1 bg-black/40 rounded-full">
            <button
              onClick={() => setIsLoginMode(true)}
              className={`flex-1 py-2.5 text-xs font-bold rounded-full transition-all ${
                isLoginMode
                  ? "bg-[#C19865] text-black shadow-lg"
                  : "text-gray-500 hover:text-gray-300"
              }`}
            >
              LOGIN
            </button>
            <button
              onClick={() => setIsLoginMode(false)}
              className={`flex-1 py-2.5 text-xs font-bold rounded-full transition-all ${
                !isLoginMode
                  ? "bg-[#6BC4D6] text-black shadow-lg"
                  : "text-gray-500 hover:text-gray-300"
              }`}
            >
              SIGN UP
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="text-xs text-gray-400 font-bold ml-1">EMAIL</label>
              <div className="relative">
                <Mail className="absolute left-4 top-3.5 text-gray-500" size={16} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full bg-black/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-sm text-white focus:outline-none focus:border-[#C19865] transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs text-gray-400 font-bold ml-1">
                PASSWORD
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-3.5 text-gray-500" size={16} />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-black/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-sm text-white focus:outline-none focus:border-[#C19865] transition-colors"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-4 rounded-xl font-bold text-sm tracking-wide shadow-lg mt-4 flex items-center justify-center gap-2 transition-all active:scale-[0.98] ${
                isLoginMode
                  ? "bg-gradient-to-r from-[#C19865] to-[#E3BE8C] text-black hover:shadow-[#C19865]/30"
                  : "bg-gradient-to-r from-[#6BC4D6] to-[#549BB0] text-black hover:shadow-[#6BC4D6]/30"
              } ${isLoading ? "opacity-80 cursor-not-allowed" : ""}`}
            >
              {isLoading ? (
                <Loader2 size={18} className="animate-spin" />
              ) : (
                <>
                  {isLoginMode ? "ENTER WORLD" : "JOIN GUILD"} <ArrowRight size={16} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const ScanModal = ({ isOpen, onClose, addToast }) => {
  const [mode, setMode] = useState("nfc");
  const [isScanning, setIsScanning] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // reset scanning state each time modal opens
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsScanning(false);
    }
  }, [isOpen]);

  const handleSimulateScan = () => {
    if (isScanning) return;
    setIsScanning(true);

    setTimeout(() => {
      addToast(
        mode === "nfc" ? "Artifact Synced Successfully!" : "QR Code Verified!",
        "success",
      );
      setIsScanning(false);
      onClose();
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="w-full max-w-sm bg-[#1a1a1a] rounded-3xl p-6 text-center border border-white/10 relative overflow-hidden flex flex-col items-center">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-white z-10"
        >
          <X size={24} />
        </button>

        <h3 className="text-xl font-bold text-white mb-6">Sync Artifact</h3>

        <div className="flex bg-[#0a0a0a] p-1 rounded-full mb-8 border border-white/10 w-full max-w-[200px]">
          <button
            onClick={() => setMode("nfc")}
            className={`flex-1 py-2 rounded-full text-xs font-bold flex items-center justify-center gap-2 transition-all ${
              mode === "nfc"
                ? "bg-[#C19865] text-black shadow-lg"
                : "text-gray-500 hover:text-gray-300"
            }`}
          >
            <Smartphone size={14} />
            <span>NFC</span>
          </button>
          <button
            onClick={() => setMode("qr")}
            className={`flex-1 py-2 rounded-full text-xs font-bold flex items-center justify-center gap-2 transition-all ${
              mode === "qr"
                ? "bg-[#6BC4D6] text-black shadow-lg"
                : "text-gray-500 hover:text-gray-300"
            }`}
          >
            <QrCode size={14} />
            <span>QR</span>
          </button>
        </div>

        <div
          onClick={handleSimulateScan}
          className="w-full h-64 flex flex-col items-center justify-center relative mb-4 cursor-pointer hover:opacity-90 active:scale-95 transition-all"
        >
          {isScanning ? (
            <div className="flex flex-col items-center">
              <Loader2 size={48} className="text-white animate-spin mb-4" />
              <p className="text-xs text-white">Verifying...</p>
            </div>
          ) : (
            <>
              {mode === "nfc" && (
                <div className="animate-in fade-in zoom-in duration-300 flex flex-col items-center">
                  <div className="w-32 h-32 relative flex items-center justify-center mb-6">
                    <div className="absolute inset-0 bg-[#C19865]/20 rounded-full animate-ping duration-[2000ms]"></div>
                    <div
                      className="relative z-10 w-24 h-24 rounded-full flex items-center justify-center text-3xl text-black shadow-[0_0_30px_rgba(193,152,101,0.3)]"
                      style={{
                        background: "linear-gradient(135deg, #C19865 0%, #E3BE8C 100%)",
                      }}
                    >
                      <Smartphone size={48} />
                    </div>
                  </div>
                  <p className="text-sm text-gray-300 font-bold">Tap to Simulate Scan</p>
                </div>
              )}

              {mode === "qr" && (
                <div className="animate-in fade-in zoom-in duration-300 flex flex-col items-center w-full">
                  <div className="w-48 h-48 relative border-2 border-[#6BC4D6] rounded-2xl flex items-center justify-center overflow-hidden bg-black/50 mb-4">
                    <div className="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 border-[#6BC4D6] rounded-tl-sm"></div>
                    <div className="absolute top-0 right-0 w-4 h-4 border-t-4 border-r-4 border-[#6BC4D6] rounded-tr-sm"></div>
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b-4 border-l-4 border-[#6BC4D6] rounded-bl-sm"></div>
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 border-[#6BC4D6] rounded-br-sm"></div>
                    <div className="w-full h-0.5 bg-[#6BC4D6] absolute top-1/2 shadow-[0_0_10px_#6BC4D6] animate-[scan_2s_ease-in-out_infinite]"></div>
                    <Camera size={32} className="text-gray-600" />
                  </div>
                  <p className="text-sm text-gray-300 font-bold">Tap to Simulate Scan</p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
      <style>
        {`@keyframes scan { 0% { top: 10%; opacity: 0; } 50% { opacity: 1; } 100% { top: 90%; opacity: 0; } }`}
      </style>
    </div>
  );
};

const HomeTab = ({ user, addToast }) => {
  const levelData = getLevelData(user.exp);
  const TierIcon = levelData.icon;

  const handleCopyId = () => {
    navigator.clipboard.writeText(user.id);
    addToast("ID copied to clipboard", "success");
  };

  return (
    <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500 pb-24">
      <div
        className={`relative w-full aspect-[1.58/1] rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:scale-[1.01] group border ${levelData.border} ${levelData.shadow}`}
      >
        <div
          className={`absolute inset-0 bg-gradient-to-br ${levelData.bgGradient} transition-colors duration-500`}
        ></div>
        <div
          className="absolute -top-20 -right-20 w-60 h-60 rounded-full blur-3xl opacity-30 group-hover:opacity-40"
          style={{ backgroundColor: levelData.color }}
        ></div>
        <div
          className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t to-transparent opacity-20"
          style={{ from: `${levelData.color}20` }}
        ></div>

        <div className="absolute inset-0 p-6 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-2">
              <TierIcon size={18} style={{ color: levelData.color }} />
              <span
                className="text-[10px] font-bold tracking-[0.2em] uppercase"
                style={{ color: levelData.color }}
              >
                Adventure Pass
              </span>
            </div>
            <div
              className="flex items-center gap-1 px-2 py-1 rounded text-[10px] border backdrop-blur-md"
              style={{
                color: levelData.color,
                borderColor: `${levelData.color}40`,
                backgroundColor: `${levelData.color}10`,
              }}
            >
              <Sparkles size={10} />
              <span className="font-bold">Lv.{levelData.level}</span>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs text-gray-400">Class:</span>
              <span className="text-xs font-bold text-[#6BC4D6]">{user.class}</span>
            </div>
            <div
              className="text-3xl font-black tracking-tight drop-shadow-lg"
              style={{
                background: `linear-gradient(to right, ${levelData.color}, white, ${levelData.color})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: `0 0 20px ${levelData.color}40`,
              }}
            >
              {levelData.name}
            </div>
            <div className="mt-4 w-full">
              <div className="flex justify-between text-[8px] text-gray-400 mb-1 font-mono">
                <span>EXP: {user.exp.toLocaleString()}</span>
                <span>NEXT: {levelData.nextLevelExp.toLocaleString()}</span>
              </div>
              <div className="w-full h-1 bg-gray-800/50 rounded-full overflow-hidden border border-white/5">
                <div
                  className="h-full rounded-full transition-all duration-1000 ease-out shadow-[0_0_10px_currentColor]"
                  style={{
                    width: `${levelData.progress}%`,
                    backgroundColor: levelData.color,
                    color: levelData.color,
                  }}
                ></div>
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between">
              <button
                onClick={handleCopyId}
                className="text-[10px] text-gray-500 font-mono tracking-widest flex items-center gap-2 hover:text-white transition-colors"
              >
                <span>ID: {user.id}</span>
                <Copy size={10} />
              </button>
              {user.instagram && (
                <div className="flex items-center gap-1 text-[10px] text-gray-400 bg-black/50 px-2 py-1 rounded-full backdrop-blur-md">
                  <Instagram size={10} />
                  <span>@{user.instagram}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-[#1e1e1e]/60 backdrop-blur-md border border-[#C19865]/20 rounded-2xl p-5 flex flex-col justify-between h-32 hover:bg-[#1e1e1e]/80 transition-colors relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-2 opacity-50">
            <button className="text-[10px] bg-[#C19865] text-black px-2 py-0.5 rounded font-bold hover:bg-white transition-colors">
              USE
            </button>
          </div>
          <div className="w-8 h-8 rounded-full bg-[#C19865]/20 flex items-center justify-center text-[#C19865] mb-2 group-hover:scale-110 transition-transform">
            <Coins size={16} />
          </div>
          <div>
            <div className="text-xs text-gray-400 flex items-center gap-1">FOMUS POINT</div>
            <div className="text-2xl font-bold text-[#C19865]">
              {user.fomusPoint.toLocaleString()} <span className="text-xs text-gray-500">Pt</span>
            </div>
          </div>
          <Coins size={60} className="absolute -right-4 -bottom-6 text-[#C19865]/5 rotate-12" />
        </div>
        <div className="bg-[#1e1e1e]/60 backdrop-blur-md border border-[#6BC4D6]/20 rounded-2xl p-5 flex flex-col justify-between h-32 hover:bg-[#1e1e1e]/80 transition-colors relative overflow-hidden">
          <div className="w-8 h-8 rounded-full bg-[#6BC4D6]/20 flex items-center justify-center text-[#6BC4D6] mb-2">
            <TrendingUp size={16} />
          </div>
          <div>
            <div className="text-xs text-gray-400">Total Exp</div>
            <div className="text-2xl font-bold text-white">{user.exp.toLocaleString()}</div>
          </div>
        </div>
      </div>

      <a
        href="https://forms.google.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-[#1e1e1e]/60 backdrop-blur-md border border-white/5 rounded-2xl p-1 active:scale-[0.98] transition-transform"
      >
        <div className="flex items-center bg-[#2a2a2a]/50 rounded-xl p-4">
          <div className="flex-1">
            <h3 className="font-bold text-sm text-white mb-1 flex items-center gap-2">
              プロフィール設定{" "}
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            </h3>
            <p className="text-[10px] text-gray-400">
              報酬: <span className="text-[#6BC4D6] font-bold">+500 Exp</span> &amp;{" "}
              <span className="text-[#C19865] font-bold">100 FOMUS POINT</span>
            </p>
          </div>
          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
            <ChevronRight size={16} className="text-gray-400" />
          </div>
        </div>
      </a>
    </div>
  );
};

const MapTab = () => {
  const [filter, setFilter] = useState("All");
  const ROLES = ["All", "Guardians", "Alchemists", "Bards"];
  const NEARBY_USERS = [
    { id: 1, name: "T. Suzuki", role: "Masu Guardian", instagram: "suzuki_masu_life", active: true },
    { id: 2, name: "M. Chen", role: "KUKU Alchemist", instagram: "chen_art_works", active: false },
    { id: 3, name: "Alex W.", role: "Grand Voyager", instagram: "alex_global_88", active: true },
  ];

  return (
    <div className="h-full flex flex-col animate-in fade-in duration-300 pb-24">
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-white mb-4">Guild Map</h2>
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="冒険者やクラスを検索"
            className="w-full bg-[#1e1e1e] border border-white/10 rounded-xl py-3 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-[#6BC4D6] transition-colors"
          />
          <Search className="absolute left-3 top-3 text-gray-500" size={18} />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {ROLES.map((role) => (
            <button
              key={role}
              onClick={() => setFilter(role)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-colors border ${
                filter === role
                  ? "bg-[#C19865] text-black border-[#C19865]"
                  : "bg-[#1e1e1e] text-gray-400 border-white/10"
              }`}
            >
              {role}
            </button>
          ))}
        </div>
      </div>
      <div className="flex-1 bg-[#1e1e1e] rounded-3xl relative overflow-hidden border border-[#C19865]/20 mb-4 group shadow-lg shadow-black/50">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-40 grayscale mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-[#C19865]/20 rounded-full animate-ping duration-[3000ms]"></div>
        <div className="absolute top-[40%] left-[60%] flex flex-col items-center">
          <div className="w-10 h-10 rounded-full bg-[#1a1a1a] border-2 border-[#C19865] p-0.5 shadow-[0_0_15px_#C19865]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
              alt="User"
              className="w-full h-full rounded-full bg-white"
            />
          </div>
          <div className="bg-black/80 text-[10px] px-2 py-0.5 rounded-full mt-1 text-[#C19865] border border-[#C19865]/30 backdrop-blur-sm">
            You
          </div>
        </div>
      </div>
      <div className="space-y-3">
        <div className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-2">
          <Sparkles size={10} />
          <span>Active Party Members</span>
        </div>
        {NEARBY_USERS.map((u) => (
          <div
            key={u.id}
            className="bg-[#1e1e1e]/60 p-3 rounded-xl flex items-center justify-between border border-white/5 hover:border-[#6BC4D6]/30 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-2 h-2 rounded-full shadow-[0_0_8px_currentColor] ${u.active ? "bg-green-500 text-green-500" : "bg-gray-600 text-transparent"}`}
              ></div>
              <div>
                <div className="text-sm font-bold text-white flex items-center gap-2">
                  {u.name}
                  {u.active && (
                    <span className="text-[8px] bg-green-500/20 text-green-400 px-1 rounded">
                      ONLINE
                    </span>
                  )}
                </div>
                <div className="text-[10px] text-[#C19865]">{u.role}</div>
              </div>
            </div>
            {u.instagram && (
              <a
                href={`https://instagram.com/${u.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 bg-gradient-to-tr from-purple-900/40 to-pink-900/40 border border-white/10 px-3 py-1.5 rounded-full hover:border-pink-500/50 transition-all group"
              >
                <Instagram size={12} className="text-pink-400 group-hover:text-pink-300" />
                <span className="text-[10px] text-gray-300 group-hover:text-white">
                  @{u.instagram}
                </span>
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const QuestTab = () => (
  <div className="animate-in fade-in duration-300 pb-24">
    <h2 className="text-2xl font-bold text-white mb-6">Adventure Log</h2>
    <div className="space-y-4">
      <div className="bg-[#1e1e1e]/60 border-l-4 border-[#C19865] p-4 rounded-r-xl flex items-center relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-r from-[#C19865]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div className="w-10 h-10 rounded-full bg-[#C19865]/20 flex items-center justify-center text-[#C19865] mr-4 z-10">
          <Shield size={20} />
        </div>
        <div className="flex-1 z-10">
          <h3 className="font-bold text-white text-sm">冒険の始まり</h3>
          <p className="text-xs text-gray-400">Tutorial Completed</p>
        </div>
        <div className="text-right z-10">
          <div className="text-[#6BC4D6] text-xs font-bold">+100 Exp</div>
          <div className="text-[#C19865] text-xs font-bold">+50 Pt</div>
        </div>
      </div>
      <div className="bg-[#1e1e1e]/40 p-4 rounded-xl flex items-center border border-white/5 opacity-90 relative">
        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-500 mr-4">
          <Smartphone size={20} />
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-gray-300 text-sm">古代遺跡（イベント）の探索</h3>
          <p className="text-xs text-gray-500">Masu Photo イベントに参加し、証を刻め</p>
        </div>
        <div className="flex flex-col items-end gap-2">
          <button className="text-xs bg-[#2a2a2a] text-gray-300 border border-white/20 px-3 py-1 rounded font-bold hover:bg-[#C19865] hover:text-black hover:border-[#C19865] transition-all">
            ACCEPT
          </button>
          <div className="text-[9px] text-gray-500">
            Reward: <span className="text-[#6BC4D6]">300 Exp</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const MenuTab = ({ onLogout }) => {
  const MENU_ITEMS = [
    {
      id: "official",
      label: "OFFICIAL SITE",
      sub: "Global Portal",
      tag: "PORTAL",
      icon: Globe,
      color: "#C19865",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop",
    },
    {
      id: "manga",
      label: "KUKU\nCHRONICLES",
      sub: "Dive into the Story",
      tag: "MANGA",
      icon: BookOpen,
      color: "#6BC4D6",
      image: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?q=80&w=2000&auto=format&fit=crop",
    },
    {
      id: "parure",
      label: "FOMUS\nPARURE",
      sub: "Jewelry Collection",
      tag: "LUXURY",
      icon: Gem,
      color: "#A855F7",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2000&auto=format&fit=crop",
    },
    {
      id: "masukame",
      label: "MASUKAME",
      sub: "Masu Photography",
      tag: "PHOTO",
      icon: Camera,
      color: "#EC4899",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2000&auto=format&fit=crop",
    },
    {
      id: "masuwall",
      label: "MASU WALL",
      sub: "Installation Art",
      tag: "ART",
      icon: LayoutGrid,
      color: "#F97316",
      image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=2000&auto=format&fit=crop",
    },
    {
      id: "silva",
      label: "SILVA",
      sub: "Nature Project",
      tag: "NATURE",
      icon: Leaf,
      color: "#22C55E",
      image: "https://images.unsplash.com/photo-1448375240586-dfd8d395ea6c?q=80&w=2000&auto=format&fit=crop",
    },
    {
      id: "creative",
      label: "FOMUS\nCREATIVE",
      sub: "Design Firm",
      tag: "STUDIO",
      icon: Palette,
      color: "#EAB308",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2000&auto=format&fit=crop",
    },
  ];

  return (
    <div className="animate-in fade-in duration-300 pb-24">
      <h2 className="text-2xl font-bold text-white mb-6">Grimoire (Menu)</h2>
      <div className="space-y-6">
        {MENU_ITEMS.map((item) => (
          <a
            key={item.id}
            href="#"
            className="block w-full h-40 rounded-3xl bg-[#1e1e1e] relative overflow-hidden group shadow-lg transition-transform active:scale-[0.98] border border-white/5"
            style={{ boxShadow: `0 10px 30px -10px ${item.color}40` }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:scale-105 transition-transform duration-700 grayscale mix-blend-luminosity group-hover:grayscale-0"
              style={{ backgroundImage: `url(${item.image})` }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 w-full">
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-block px-2 py-0.5 text-black text-[10px] font-bold rounded" style={{ backgroundColor: item.color }}>
                  {item.tag}
                </span>
                <span className="text-[10px] tracking-widest uppercase font-bold" style={{ color: item.color }}>
                  FOMUS
                </span>
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="text-2xl font-black italic text-white leading-none tracking-tighter drop-shadow-lg whitespace-pre-line">
                    {item.label}
                  </h3>
                  <p className="text-xs text-gray-300 mt-1 font-medium">{item.sub}</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <item.icon size={18} />
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
      <div className="mt-8 mb-4">
        <button
          onClick={onLogout}
          className="w-full py-4 rounded-xl border border-red-500/20 bg-red-500/5 text-red-500 font-bold text-sm flex items-center justify-center gap-2 hover:bg-red-500/10 transition-colors"
        >
          <LogOut size={16} />
          <span>LOGOUT</span>
        </button>
      </div>
      <div className="text-center">
        <p className="text-[10px] text-gray-600">FOMUS Hub v3.0.0</p>
        <p className="text-[10px] text-gray-700">© FOMUS Global</p>
      </div>
    </div>
  );
};

export default function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [isScanOpen, setIsScanOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type = "default") => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => setToasts((prev) => prev.filter((t) => t.id !== id)), 3000);
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("fomus_user");
    setTimeout(() => {
      if (storedUser) setUser(JSON.parse(storedUser));
      setIsLoading(false);
    }, 1000);
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem("fomus_user", JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("fomus_user");
    setActiveTab("home");
    addToast("Logged out successfully", "default");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 border-4 border-[#C19865] border-t-transparent rounded-full animate-spin mb-4 shadow-[0_0_15px_#C19865]"></div>
          <div className="text-[#C19865] font-bold tracking-widest text-sm animate-pulse">
            LOADING WORLD...
          </div>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <>
        <AuthScreen onLogin={handleLogin} addToast={addToast} />
        <ToastContainer toasts={toasts} />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-[#C19865] selection:text-black pb-24">
      <ToastContainer toasts={toasts} />

      <header className="fixed top-0 w-full z-40 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5 pt-safe-top">
        <div className="h-16 px-6 flex justify-between items-center max-w-md mx-auto">
          <div className="flex items-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="FOMUSlogo_edited.png" alt="FOMUS" className="h-8 w-auto object-contain" />
          </div>
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 border border-white/10 flex items-center justify-center shadow-lg">
            <User size={16} className="text-gray-400" />
          </div>
        </div>
      </header>

      <main className="pt-24 px-5 max-w-md mx-auto min-h-screen">
        {activeTab === "home" && <HomeTab user={user} addToast={addToast} />}
        {activeTab === "map" && <MapTab />}
        {activeTab === "quest" && <QuestTab />}
        {activeTab === "menu" && <MenuTab onLogout={handleLogout} />}
      </main>

      <div className="fixed bottom-0 w-full z-40 pb-6 pt-2 px-4 pointer-events-none">
        <nav className="mx-auto max-w-sm bg-[#1a1a1a]/90 backdrop-blur-xl border border-white/10 rounded-2xl h-16 shadow-2xl flex justify-around items-center px-1 pointer-events-auto relative">
          <NavButton active={activeTab === "home"} onClick={() => setActiveTab("home")} icon={<Home size={20} />} label="HOME" />
          <NavButton active={activeTab === "map"} onClick={() => setActiveTab("map")} icon={<Map size={20} />} label="GUILD" color="text-[#6BC4D6]" />
          <div className="relative -top-6 mx-2">
            <button
              onClick={() => setIsScanOpen(true)}
              className="w-14 h-14 rounded-full flex items-center justify-center text-black shadow-[0_0_20px_rgba(193,152,101,0.4)] transition-transform active:scale-95 border-4 border-[#0a0a0a] relative group"
              style={{ background: "linear-gradient(135deg, #C19865 0%, #E3BE8C 100%)" }}
            >
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 rounded-full transition-opacity"></div>
              <Scan size={24} strokeWidth={2.5} />
            </button>
          </div>
          <NavButton active={activeTab === "quest"} onClick={() => setActiveTab("quest")} icon={<Scroll size={20} />} label="QUEST" />
          <NavButton active={activeTab === "menu"} onClick={() => setActiveTab("menu")} icon={<Menu size={20} />} label="MENU" color="text-[#6BC4D6]" />
        </nav>
      </div>

      <ScanModal isOpen={isScanOpen} onClose={() => setIsScanOpen(false)} addToast={addToast} />
      <style>
        {`.pt-safe-top { padding-top: env(safe-area-inset-top, 20px); } .scrollbar-hide::-webkit-scrollbar { display: none; }`}
      </style>
    </div>
  );
}

const NavButton = ({ active, onClick, icon, label, color = "text-[#C19865]" }) => (
  <button
    onClick={onClick}
    className={`w-14 h-full flex flex-col items-center justify-center gap-1 transition-all duration-300 ${
      active ? "-translate-y-1" : "opacity-50 hover:opacity-100"
    }`}
  >
    <div className={`${active ? color : "text-white"}`}>{icon}</div>
    <span className={`text-[9px] font-bold ${active ? "text-white" : "text-gray-500"}`}>{label}</span>
    {active && <div className={`w-1 h-1 rounded-full ${color.replace("text-", "bg-")} mt-0.5 shadow-[0_0_5px_currentColor]`}></div>}
  </button>
);
