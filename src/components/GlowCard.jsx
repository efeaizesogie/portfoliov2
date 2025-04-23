import React, {useRef, useCallback} from 'react'

const GlowCard = ({ card, children, index }) => {
    const cardRefs = useRef([]);
    const requestRef = useRef();
    const mousePositionRef = useRef({ x: 0, y: 0, angle: 0, needsUpdate: false });

    // Throttle mouse move updates using requestAnimationFrame
    const updateCardStyle = useCallback(() => {
        if (mousePositionRef.current.needsUpdate) {
            const card = cardRefs.current[index];
            if (card) {
                card.style.setProperty('--start', mousePositionRef.current.angle + 60);
            }
            mousePositionRef.current.needsUpdate = false;
        }
        requestRef.current = requestAnimationFrame(updateCardStyle);
    }, [index]);

    // Start the animation loop when component mounts
    React.useEffect(() => {
        requestRef.current = requestAnimationFrame(updateCardStyle);
        return () => cancelAnimationFrame(requestRef.current);
    }, [updateCardStyle]);

    const handleMouseMove = useCallback((index) => (e) => {
        const card = cardRefs.current[index];
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const mouseX = e.clientX - rect.left - rect.width / 2;
        const mouseY = e.clientY - rect.top - rect.height / 2;

        let angle = Math.atan2(mouseY, mouseX) * (180/ Math.PI);
        angle = (angle + 360) % 360;

        mousePositionRef.current = {
            x: mouseX,
            y: mouseY,
            angle: angle,
            needsUpdate: true
        };
    }, []);
    return (
        <div ref={(el) => (cardRefs.current[index] = el)} onMouseMove={handleMouseMove(index)} className="card card-border timeline-card rounded-xl p-10 mb-5 break-inside-avoid-column">
            <div className="glow"/>
            <div className="flex items-center gap-1 mb-5">
                {Array.from({length: 5}, (_, i) =>
                <img src="/images/star.png" key={i} alt="star" className="size-5" />)}
            </div>

            <div className="mb-5">
                <p className="text-white-50 text-lg text-start">{card.review}</p>
            </div>
            {children}
        </div>
    )
}
export default GlowCard
