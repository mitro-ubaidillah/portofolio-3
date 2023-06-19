import Typography from "../global/Typography";

const Navbar = () => {
    return (
        <div className="flex bg-dark justify-between content-center py-8 px-36">
            <Typography name="Mitro" fontWeight="bold" size="2xl" color="white" />
            <div className="menu grid grid-cols-4 content-center gap-7">
                <Typography
                    name="about"
                    textCase="uppercase"
                    color="white"
                    className="hover:text-active"
                />
                <Typography
                    name="experience"
                    textCase="uppercase"
                    color="white"
                    className="hover:text-active"
                />
                <Typography
                    name="project"
                    textCase="uppercase"
                    color="white"
                    className="hover:text-active"
                />
                <Typography
                    name="contact"
                    textCase="uppercase"
                    color="white"
                    className="hover:text-active"
                />
            </div>
            <div className="grid grid-cols-3 content-center gap-3">
                <Typography name="Email" textCase="uppercase" color="white" />
                <Typography name="github" textCase="uppercase" color="white" />
                <Typography name="linkedin" textCase="uppercase" color="white" />
            </div>
        </div>
    )
}

export default Navbar;