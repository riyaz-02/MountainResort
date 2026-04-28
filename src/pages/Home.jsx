import Hero from '../components/Hero';
import Arrival from '../components/Arrival';
import About from '../components/About';
import Rooms from '../components/Rooms';
import Experiences from '../components/Experiences';
import Gallery from '../components/Gallery';
import SeasonalHighlight from '../components/SeasonalHighlight';
import Testimonials from '../components/Testimonials';
import Booking from '../components/Booking';

const Home = () => {
    return (
        <>
            <Hero />
            <Arrival />
            <About />
            <Rooms />
            <Experiences />
            <Gallery />
            <SeasonalHighlight />
            <Testimonials />
            <Booking />
        </>
    );
};

export default Home;
