import { BackgroundGradientAnimation } from '@components/ui/background-gradient-animation';
import { CardBody, CardContainer, CardItem } from '@components/ui/3d-card';
import { OpenNewTabIcon } from '@components/icons';

const LandingBanner = () => {
  return (
    <BackgroundGradientAnimation>
      <div className="relative w-full grid grid-cols-2 justify-around items-center  h-full my-10  mx-0">
        <div className="inset-0 flex flex-col items-start justify-start gap-y-10 text-white font-bold px-12 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
          <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
            Money Spliter
          </p>
          <p className="text-white text-base text-left font-normal max-w-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto amet vero molestiae maiores illo dolores est
            eligendi soluta laboriosam inventore? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex sed quas
            cupiditate repellendus impedit vero voluptates ullam quibusdam sequi porro.
          </p>
          <a
            className=" inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 cursor-pointer"
            href="#"
          >
            <span className=" px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-white flex justify-center items-center cursor-pointer text-xl gap-x-2">
              Get Started
              <OpenNewTabIcon />
            </span>
          </a>
        </div>
        <div>
          <CardContainer className="inter-var h-full">
            <CardBody className="group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]   w-auto sm:w-[30rem] h-full rounded-xl p-6">
              <CardItem translateZ="100" className="w-full mt-4 h-full">
                <img
                  src="https://templatekit.jegtheme.com/cryptiva/wp-content/uploads/sites/53/2021/03/security.png"
                  className=" rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                  height={'1000px'}
                />
              </CardItem>
            </CardBody>
          </CardContainer>
        </div>
      </div>
    </BackgroundGradientAnimation>
  );
};

export default LandingBanner;
