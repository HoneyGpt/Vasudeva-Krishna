import React, { useEffect, useRef } from 'react';

const StarBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        // Define Krishna theme colors for stars
        const colors = ['#ffffff', '#ffffff', '#d4af37', '#16a085', '#ffd700'];

        const stars: {
            x: number;
            y: number;
            radius: number;
            vx: number;
            vy: number;
            alpha: number;
            color: string;
        }[] = [];

        const numStars = 250;

        for (let i = 0; i < numStars; i++) {
            stars.push({
                x: Math.random() * width,
                y: Math.random() * height,
                radius: Math.random() * 2,
                vx: (Math.random() - 0.5) * 0.2, // Very slow movement
                vy: (Math.random() - 0.5) * 0.2,
                alpha: Math.random(),
                color: colors[Math.floor(Math.random() * colors.length)]
            });
        }

        let animationFrameId: number;

        const render = () => {
            // Create a slight trailing effect for smooth movement
            ctx.fillStyle = 'rgba(5, 11, 20, 0.2)';
            ctx.fillRect(0, 0, width, height);

            for (let i = 0; i < numStars; i++) {
                const star = stars[i];

                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
                ctx.fillStyle = star.color;
                ctx.globalAlpha = star.alpha;
                ctx.fill();
                ctx.globalAlpha = 1.0; // Reset alpha

                star.x += star.vx;
                star.y += star.vy;

                // Twinkling effect
                star.alpha += (Math.random() - 0.5) * 0.05;
                if (star.alpha <= 0.1) star.alpha = 0.1;
                if (star.alpha >= 1) star.alpha = 1;

                // Wrap around screen
                if (star.x < 0) star.x = width;
                if (star.x > width) star.x = 0;
                if (star.y < 0) star.y = height;
                if (star.y > height) star.y = 0;
            }

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                zIndex: -1,
                pointerEvents: 'none'
            }}
        />
    );
};

export default StarBackground;
