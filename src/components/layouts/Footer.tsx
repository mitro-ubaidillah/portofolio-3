import Typography from "../global/Typography";


const Footer = () => {
    return (
       <div className="bg-gray-dark py-10 px-20 grid grid-cols-2 text-start bottom-0 absolute w-full">
            <Typography name="© Mitro Ubaidillah 2023" textCase="capitalize" color="gray" size="base" />
            <div className="flex gap-5 justify-end">
            <Typography name="about" textCase="lowercase" color="gray" size="base" />
            <Typography name="experience" textCase="lowercase" color="gray" size="base" />
            <Typography name="contact" textCase="lowercase" color="gray" size="base" />
            </div>
       </div> 
    );
}

export default Footer;