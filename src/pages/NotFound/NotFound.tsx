import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="bg-slate-300 h-screen flex flex-col justify-center items-center">
      <h1 className="text-8xl">404 </h1>
      <p className="text-4xl mb-2">Sahifa topilmadi</p>
      <Link to="/root" className="text-lg underline text-blue-400">Bosh sahifa</Link>
    </section>
  );
};

export default NotFound;
