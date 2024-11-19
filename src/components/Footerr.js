import {Link}from "react-router-dom";
export const Footerr = () => {
  return (
    <footer className="bg-white shadow   dark:bg-black">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2030 <Link to="/" className="hover:underline">Cinemate</Link>. All Rights Reserved.</span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="https://www.instagram.com/a.h_1107/" target="_blank" rel="noreferrer" className="hover:underline me-4 md:me-6">Instagram</a>
          </li>
          <li>
            <a href="www.linkedin.com/in/ansh-prajapati-8005a3252" target="_blank" rel="noreferrer" className="hover:underline me-4 md:me-6">LinkedIn</a>
          </li>
          <li>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" className="hover:underline me-4 md:me-6">Youtube</a>
          </li>
          <li>
            <a href="https://github.com/anshp1108" target="_blank" rel="noreferrer" className="hover:underline">GitHub</a>
          </li>
        </ul>
      </div>

    </footer>
  )
}
