import LinkedinIcon from "@/assets/linkedin-icon.svg";

export default function Footer() {
  return (
    <footer className=" body-font p-10 bg-zinc-100">
      <div className="container  mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex gap-2 items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/128/5200/5200787.png?ga=GA1.1.1536754857.1700396359&semt=aisemanticweb&semd=none&semg=2105250945&se=google&sv=1"
            alt="Vite Logo"
            className="h-8"
          />
          <span className="font-montserrat font-bold text-xl">Monedo</span>
        </a>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © {new Date().getFullYear()} Monedo —
          <a
            href="https://twitter.com/brayanpaucar_"
            className="text-gray-600 ml-1 hover:underline"
            rel="noopener noreferrer"
            target="_blank"
          >
            @Brayan Paucar
          </a>
        </p>
        <span className="flex items-center gap-3 sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a
            href="https://twitter.com/brayanpaucar_"
            rel="noopener noreferrer"
            target="_blank"
            className="hover:opacity-70 cursor-pointer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/X_logo_2023.svg/120px-X_logo_2023.svg.png"
              alt="twitter"
              width={20}
              height={20}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/brayanpaucar"
            rel="noopener noreferrer"
            target="_blank"
            className="hover:opacity-70 cursor-pointer"
          >
            <img src={LinkedinIcon} alt="linkedin" width={30} height={30} />
          </a>
        </span>
      </div>
    </footer>
  );
}
