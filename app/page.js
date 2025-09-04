import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';
import {ThreeDPhotoCarousel} from '@/components/ui/3d-carousel';

export default function Home() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center p-24'>
      <HoverBorderGradient>
        21st Dev work here
      </HoverBorderGradient>
      <ThreeDPhotoCarousel />
    </div>
  );
}
