import Image from "next/image";
import Breadcomb from "./Breadcomb";
import NextPageButton from "./NextPageButton";
import ReactVisibilitySensor from "react-visibility-sensor";

interface AboutProps {
  onVisible: (currentPage: string) => void;
}

export default function About(props: AboutProps) {
  const { onVisible } = props;

  function handleChangeVisible(isVisible: Boolean) {
    if (isVisible) {
      onVisible("About");
    }
  }

  return (
    <ReactVisibilitySensor onChange={handleChangeVisible}>
      <div
        id="About"
        className="flex flex-col justify-between min-h-screen min-w-screen bg-night pt-24 pb-6 text-white"
      >
        <Breadcomb>About</Breadcomb>
        <div className="flex flex-col gap-3 my-6">
          <p>
            Hi! I am a skilled FullStack developer with 5 years of experience.
            I’m proficient in technologies such as{" "}
            <span className="text-hoolywood-cerise">Laravel</span> and{" "}
            <span className="text-hoolywood-cerise">React.JS</span>.
          </p>
          <p>
            I am passionate about maintaining a vegan lifestyle 🌱, watching TV
            Shows, and exploring new places around the world ⛰️. I have plans to
            embrace the digital nomad lifestyle 💻, allowing me to work and
            travel simultaneously.
          </p>
          <p>
            Interested in learning more about my background?{" "}
            <span className="text-hoolywood-cerise">
              Check out my full profile:
            </span>
          </p>
        </div>
        <a
          href="https://www.linkedin.com/in/marcelo-zapatta/"
          target="_blank"
          className="flex py-3 mb-6 px-6 bg-hoolywood-cerise rounded-lg w-fit mx-auto transition hover:bg-hoolywood-cerise-600"
        >
          <Image
            src="/linkedin-icon.svg"
            width={24}
            height={24}
            alt="linkedin icon"
            className="mr-3.5"
          />
          LinkedIn profile
        </a>
        <NextPageButton>Home</NextPageButton>
      </div>
    </ReactVisibilitySensor>
  );
}
