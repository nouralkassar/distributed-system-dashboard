export function StatusCard({ nodes, systemHealth, heartbeat }) {
  return (
    <div className="backdrop-blur-xl bg-white/5 p-8 rounded-3xl border border-white/10 shadow-2xl text-center w-full max-w-sm">
      <h1 className="text-2xl font-bold mb-8 tracking-wide">لوحة مراقبة النظام</h1>
      
      <div className="flex justify-center items-center gap-3 mb-8 bg-black/20 p-4 rounded-2xl">
        <div className={`w-4 h-4 rounded-full animate-pulse ${systemHealth === "OPERATIONAL" ? "bg-green-400" : "bg-red-500"}`} />
        <h2 className="text-2xl font-black">{systemHealth}</h2>
      </div>

      <div className="space-y-4 text-slate-300">
        <div className="flex justify-between border-b border-white/5 pb-2">
          <span>العقد المتصلة:</span>
          <span className="font-bold text-white">{nodes}</span>
        </div>
        <div className="flex justify-between border-b border-white/5 pb-2">
          <span>آخر نبضة:</span>
          <span className="font-bold text-white">{heartbeat}</span>
        </div>
      </div>
    </div>
  );
}