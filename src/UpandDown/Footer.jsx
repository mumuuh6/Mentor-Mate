import { Typography } from "@material-tailwind/react";

const Footer = () => {
    return (
        <div>
            <footer className="w-full  p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center md:justify-between">
        <img src="https://i.ibb.co.com/7G7FRxx/DALL-E-2024-12-24-00-11-18-A-fun-and-attractive-illustration-featuring-two-people-holding-the-Mentor.webp" alt="logo-ct" className="w-1/4 rounded-2xl shadow-xl" />
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="#"
              color=""
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              About Us
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color=""
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              License
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color=""
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contribute
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color=""
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contact Us
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="" className="text-center font-normal">
        &copy; 2024 MentorMate
      </Typography>
    </footer>
        </div>
    );
};

export default Footer;