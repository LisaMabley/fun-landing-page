import { useEffect, useRef, useState } from 'react';
import { Effect } from '../classes/Effect';
import { useWindowSize } from '@react-hook/window-size';

const ParticleUnderlay = () => {
  const canvasReference = useRef<HTMLCanvasElement>(null);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
  const [effect, setEffect] = useState<Effect | null>(null);
  const [width, height] = useWindowSize();

  useEffect(() => {
    const { current } = canvasReference;
    const ctx = current?.getContext('2d') || null;
    setContext(ctx);
    if (context) {
      setEffect(new Effect({ width, height }, context));
      animate();
    }
    }, [context, width, height]);

  const animate = () => {
    if (context && effect) {
      context.clearRect(0, 0, width, height);
      effect.handleParticles(context);
      requestAnimationFrame(animate);
    }
  }
  
  return <canvas width={width} height={height} ref={canvasReference} className='w-full h-full' />;
}

export default ParticleUnderlay;
