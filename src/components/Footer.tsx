export default function Footer() {
  return (
    <footer className="bg-gray-800 py-8 text-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center">
          <p className="text-sm">
            © 2024 JHJ&apos;s Portfolio. All rights reserved.
          </p>
          <div className="mt-4 flex space-x-4">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              GitHub
            </a>
            <a
              href="mailto:your.email@example.com"
              className="hover:text-blue-400"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
