import Image from "next/image";
import { prefix } from '../prefix';
import FloatingImageContainer from '@/components/FloatingImagesContainer';

const Home: React.FC = () => {
  return (
    <main>
			<h1 className="text-4xl font-bold text-center">Tech</h1>
      <FloatingImageContainer />
    </main>
  );
}

export default Home;