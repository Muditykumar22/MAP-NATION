import React, { useEffect, useState } from 'react';
import LanguageTopics from './LanguageTopics'; // Adjust the import path if necessary

const RoadmapPage = () => {
  const [roadmaps, setRoadmaps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRoadmaps = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/roadmaps/roadmaps');

        // Check if the response is OK
        if (!response.ok) {
          throw new Error(`Network response :was not ok: ${response.statusText}`);
        }

        const data = await response.json();
        console.log('Response Data:', data); // Log the response data to console
        setRoadmaps(data?.roadmaps || []); // Ensure we set the correct data
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRoadmaps();
  }, []);

  // Flatten the topics into a single array
  const allTopics = roadmaps.flatMap((roadmap) => 
    roadmap.topics.map((topic) => ({
      roadmapName: roadmap.name,
      days: roadmap.days,
      hours: roadmap.hours,
      topic: topic.topic,
      description: topic.description,
      resources: topic.resources || [],
      taskFormat: topic.task_format
    }))
  );

  if (loading) {
    return <div>Loading your roadmaps...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>All Roadmap Topics</h1>
      {allTopics.length > 0 ? (
        allTopics.map((topic, idx) => (
          <div key={idx} className="topic-container">
            <h3>Roadmap: {topic.roadmapName}</h3>
            <p><strong>Days:</strong> {topic.days}</p>
            <p><strong>Hours:</strong> {topic.hours}</p>
            <h4>Topic: {topic.topic}</h4>
            <p>Description: {topic.description}</p>

            <h4>Resources:</h4>
            {topic.resources.length > 0 ? (
              topic.resources.map((resource, rIdx) => (
                <div key={rIdx}>
                  <a href={resource.link} target="_blank" rel="noopener noreferrer">
                    {resource.resource_type}
                  </a>
                </div>
              ))
            ) : (
              <p>No resources available.</p>
            )}

            <h4>Task:</h4>
            <p>{topic.taskFormat}</p>
          </div>
        ))
      ) : (
        <p>No topics available for any roadmap.</p>
      )}
    </div>
  );
};

export default RoadmapPage;