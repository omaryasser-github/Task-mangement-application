export default function MainLayout({ children }) {
  return (
    <div className="max-w-xl mx-auto p-8 bg-white rounded-3xl min-h-screen">
      {children}
    </div>
  );
}
