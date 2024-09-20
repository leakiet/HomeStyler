import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./designersGallery.css";

function DesignersGallery() {
  const { id } = useParams();
  const [designer, setDesigner] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedWork, setSelectedWork] = useState(null);

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

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  const handleWorkClick = (work) => {
    if (selectedWork && selectedWork.title === work.title) {
      setSelectedWork(null);
    } else {
      setSelectedWork(work);
    }
  };

  return (
    <div className="designer-gallery-container">
      <div className="header row">
        <div className="left-side-profile col-md-6">
          <img
            src={designer.image}
            alt={`${designer.name}'s portrait`}
            className="designer-image"
          />
        </div>
        <div className="right-side-profile col-md-6">
          <h2>{designer.name}</h2>
          <p>
            <strong>Specialty : </strong> {designer.specialty}
          </p>
          <p>{designer.introduction}</p>
          <p>
            <strong>Contact : </strong>
            {designer.email}
          </p>
        </div>
      </div>
      <div className="body mt-5">
        <h3 className="text-left">Projects</h3>
        <div className="table-wrap">
          <table className="table table-hover table-striped table-project">
            <thead>
              <tr>
                <th>My Artwork</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {designer.works.map((work, index) => (
                <tr key={index} onClick={() => handleWorkClick(work)}>
                  <td>{work.title}</td>
                  <td>{work.time}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {selectedWork && (
            <div className="selected-work mt-4 text-center">
              <h4>{selectedWork.title}</h4>
              <div className="row">
                <div className="description-left-side col-md-6 d-flex align-items-center">
                  <div>
                    <p>
                      <strong>Description : </strong>
                      {selectedWork.description}
                    </p>
                    <p>
                      <strong>Inspiration : </strong>
                      {selectedWork.inspiration}
                    </p>
                    <p>
                      <strong>Style : </strong>
                      {selectedWork.style}
                    </p>
                    <p>
                      <strong>Size : </strong>
                      {selectedWork.size}
                    </p>
                  </div>
                </div>
                <img
                  src={selectedWork.image}
                  alt={selectedWork.title}
                  className="img-fluid col-md-6"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DesignersGallery;
