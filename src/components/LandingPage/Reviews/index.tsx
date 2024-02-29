import Marquee from 'react-fast-marquee';
import { BackgroundGradient } from '@components/ui/background-gradient';
import { Rating } from 'react-simple-star-rating';

const testimonials = [
  {
    message:
      'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.',
    name: 'Charles Dickens',
    title: 'A Tale of Two Cities',
    id: 1,
  },
  {
    message:
      'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.',
    name: 'Charles Dickens',
    title: 'A Tale of Two Cities',
    id: 2,
  },
  {
    message:
      'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.',
    name: 'Charles Dickens',
    title: 'A Tale of Two Cities',
    id: 3,
  },
  {
    message:
      'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.',
    name: 'Charles Dickens',
    title: 'A Tale of Two Cities',
    id: 4,
  },
  {
    message:
      'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.',
    name: 'Charles Dickens',
    title: 'A Tale of Two Cities',
    id: 5,
  },
];

const Reviews = () => {
  return (
    <div className="py-8 group">
      <div className="w-full flex justify-center items-center flex-col my-4">
        <h2 className="text-center text-3xl">Our Reviews</h2>
        <div className="transtion-all  duration-300  h-1 w-0 group-hover:w-56 bg-[#00b0ff] rounded backdrop-blur-lg"></div>
      </div>
      <Marquee
        gradient={false}
        speed={80}
        pauseOnHover={true}
        pauseOnClick={true}
        delay={0}
        play={true}
        direction="left"
      >
        {testimonials?.map((etm) => (
          <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 transtion-all  duration-300 hover:scale-110">
            <p className="text-base text-center sm:text-xl  mt-4 mb-2 ">Air Jordan 4 Retro Reimagined</p>

            <div className="flex">
              <Rating initialValue={2} className="flex flex-row" readonly iconsCount={5} allowFraction />
            </div>

            <p className="text-sm text-center">
              The Air Jordan 4 Retro Reimagined Bred will release on Saturday, February 17, 2024. Your best opportunity
              to get these right now is by entering raffles and waiting for the official releases.
            </p>
          </BackgroundGradient>
        ))}
      </Marquee>
    </div>
  );
};

export default Reviews;
