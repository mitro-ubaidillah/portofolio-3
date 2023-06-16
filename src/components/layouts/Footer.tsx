import Typography from "../global/Typography";


const Footer = () => {
    return (
       <div className="bg-gray-dark py-10 px-20 grid grid-cols-2 text-start">
            <Typography name="© Mitro Ubaidillah 2023" textCase="capitalize" color="gray" />
            <div className="flex gap-5 justify-end">
            <Typography name="about" textCase="lowercase" color="gray" />
            <Typography name="experience" textCase="lowercase" color="gray" />
            <Typography name="contact" textCase="lowercase" color="gray" />
            </div>
       </div> 
    );
}

export default Footer;