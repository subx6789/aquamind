const Footer = () => {
  return (
    <footer className="bg-white py-2 px-2 flex items-center justify-between flex-wrap">
      <div className="flex flex-col gap-4 items-start">
      <a href="#navbar" className="flex items-center gap-1">
            <img className="w-12" src="Picture1.png" alt="logo"/>
        <h1 className="font-bold text-2xl text-blue-500">Aquamind</h1>
        </a>
      <p className="text-sm text-gray-400">© 2024 Aquamind</p>
      </div>
      <div className="flex gap-4 items-center flex-wrap">
      <a href="https://www.twitter.com"><i className="text-lg hover:text-blue-500 hover:scale-105 duration-200 fa-brands fa-twitter"></i></a>
      <a href="mailto:subhajits956@gmail.com" className="hover:text-blue-500 hover:scale-105 duration-200"><i className="fa-solid fa-envelope-open text-lg"></i></a>
      <a href="#navbar" className="text-white hover:scale-105 duration-200 py-2 px-4 rounded-full bg-teal-700 hover:bg-teal-900"><i className="fa-solid fa-arrow-up"></i></a>
      </div>
    </footer>
  );
};

export default Footer;
