export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 text-white py-8 mt-20">
      <div className="max-w-7xl mx-auto px-4 text-center text-sm">
        <p>© {new Date().getFullYear()} Acharya Nikhil Shastri. All rights reserved.</p>
      </div>
    </footer>
  );
}
