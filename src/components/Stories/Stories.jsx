import React from 'react';
import Stories from 'react-insta-stories';
import { useSelector } from 'react-redux';
import { storiesInfoSelector } from '../../selectors/forecast';

const STORIES = (stories) => stories.map((story) => ({
  content: () => (
    <div
      className="flex flex-col items-center justify-center gap-5 bg-purple-500 text-white p-10 rounded-lg shadow-lg"
      style={{
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
      }}
    >
      <h1 className="text-4xl font-extrabold underline decoration-wavy mb-4">{story.Name}</h1>
      <h2 className="text-2xl">
        Forecasted Value:
        {' '}
        <span className="font-semibold text-yellow-300">{story.Value}</span>
      </h2>
      <h3 className="text-xl italic">{story.Category}</h3>
    </div>
  ),
}));

const progressContainerStyles = {
  bottom: 30,
  width: '60%',
  zIndex: 10,
};

const storyContainerStyles = {
  borderRadius: '18px',
  background: '#BED7DC',
  display: 'flex',
  justifyContent: 'center',
};

export default function StoriesContainer({ k }) {
  const stories = useSelector(storiesInfoSelector(k));
  if (stories.length) {
    return (
      <Stories
        loop
        defaultInterval={5000}
        stories={STORIES(stories)}
        // width="40%"
        progressContainerStyles={progressContainerStyles}
        storyContainerStyles={storyContainerStyles}
      />
    );
  }
}
