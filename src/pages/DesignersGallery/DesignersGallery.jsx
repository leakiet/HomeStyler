import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./designersGallery.css";

function DesignersGallery() {
  const { id } = useParams();
  const [designer, setDesigner] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDesigner = async () => {
      try {
        const response = await fetch("/data/designer.json");
        if (!response.ok) {
          throw new Error("Failed to fetch designer data");
        }
        const data = await response.json();
        const foundDesigner = data.find((d) => d.id === parseInt(id));
        if (!foundDesigner) {
          throw new Error("Designer not found");
        }
        setDesigner(foundDesigner);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchDesigner();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="designer-gallery-container">
      <div className="designer-header">
        <img
          className="designer-image"
          src={designer.image}
          alt={designer.name}
        />
        <h2>{designer.name}</h2>
        <p className="designer-specialty">
          <strong>Specialty:</strong> {designer.specialty}
        </p>
      </div>

      <div className="designer-details">
        <div>
          <p className="designer-introduction">{designer.introduction}</p>
        </div>

        <h3>My Art Works</h3>
        <div className="designer-works">
          

          {designer.works && designer.works.length > 0 ? (
            designer.works.map((work, index) => (
              <div key={index} className="work-item">
                <img src={work.image} alt={work.title} className="work-image" />
                <p>
                  <strong>{work.title}</strong>
                </p>
              </div>
            ))
          ) : (
            <p>No works available.</p>
          )}
        </div>

        <h3>Articles</h3>
        <div className="designer-articles">
          {designer.articles && designer.articles.length > 0 ? (
            designer.articles.map((article, index) => (
              <div key={index} className="article-item">
                <h4>{article.title}</h4>
                <p>{article.summary}</p>
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read more
                </a>
              </div>
            ))
          ) : (
            <p>No articles available.</p>
          )}
        </div>

        <div className="designer-contact">
          <h3>Contact</h3>
          <p>
            <strong>Email:</strong> {designer.email}
          </p>
        </div>
      </div>
    </div>
  );
}

export default DesignersGallery;
