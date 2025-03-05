import React, { useState } from 'react';

interface Challenge {
  id: number;
  title: string;
  description: string;
  questions: number;
  points: number;
  difficulty: string;
  category: string;
  backgroundImage: string;
  link: string;
}

interface CardProps {
  challenge: Challenge;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({ challenge, onClick }) => {
  const [mouseX, setMouseX] = useState<number>(0);
  const [mouseY, setMouseY] = useState<number>(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    setMouseX(e.pageX - left - width / 2);
    setMouseY(e.pageY - top - height / 2);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setMouseX(0);
      setMouseY(0);
    }, 1000);
  };

  // Reduced rotation values for less motion
  const cardStyle = {
    transform: `rotateY(${(mouseX / 240) * 10}deg) rotateX(${(mouseY / 320) * -10}deg)`, // Reduced from 30 to 10
  };

  // Reduced translation values for less motion
  const cardBgTransform = {
    transform: `translateX(${(mouseX / 240) * -20}px) translateY(${(mouseY / 320) * -20}px)`, // Reduced from 40 to 20
  };

  return (
    <div
      className="card-wrap"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      <div className="card" style={cardStyle}>
        <div
          className="card-bg"
          style={{
            ...cardBgTransform,
            backgroundImage: `url(${challenge.backgroundImage})`,
          }}
        />
        <div className="card-info">
          <h1>{challenge.title || 'Coming Soon'}</h1>
          <p>{challenge.description || 'Stay tuned for new challenges!'}</p>
          <div className="mt-2 flex gap-2">
            <span
              className={`text-xs px-2 py-1 rounded-full ${
                challenge.difficulty === 'Easy'
                  ? 'bg-green-500/20 text-green-500'
                  : challenge.difficulty === 'Medium'
                  ? 'bg-yellow-500/20 text-yellow-500'
                  : challenge.difficulty === 'Hard'
                  ? 'bg-red-500/20 text-red-500'
                  : ''
              }`}
            >
              {challenge.difficulty}
            </span>
            <span className="text-xs bg-blue-500/20 text-blue-500 px-2 py-1 rounded-full">
              {challenge.category}
            </span>
          </div>
          {challenge.questions > 0 && (
            <div className="flex justify-between text-sm mt-4">
              <span className="text-primary-blue">{challenge.questions} Questions</span>
              <span className="text-primary-red">{challenge.points} Points</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
