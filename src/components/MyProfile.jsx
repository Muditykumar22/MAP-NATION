import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './MyProfile.css'; // Import CSS file

const MyProfile = () => {
    const navigate = useNavigate();

    const handleUpdateProfile = () => {
        navigate('/EditProfile'); // Navigate to the EditProfile page
    };

    return (
        <div className="profile-page-container">
            <div className="profile-card-container">
                {/* Profile Section */}
                <div className="profile-section">
                    <img
                        src="/avatar.jpg" // Updated path to the profile image
                        alt="Profile Avatar"
                    />
                    <h2>Student</h2>
                    <p>GLA University</p>
                </div>

                {/* Details Section */}
                <div className="details-section">
                    <div className="detail-item">
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <span style={{ fontWeight: 'bold', color: 'rgb(0, 0, 0)', textShadow: '4px 4px 4px rgba(0, 0, 0, 0.3)' }}>Name</span>
                            <span style={{fontWeight: 'bold', textShadow: '2px 2px 2px rgba(0, 0, 0, 0.2)'}}>Student</span>
                        </div>
                    </div>
                    <div className="detail-item">
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <span style={{ fontWeight: 'bold', color: 'rgb(0, 0, 0)', textShadow: '4px 4px 4px rgba(0, 0, 0, 0.3)' }}>Email</span>
                            <span style={{fontWeight: 'bold', textShadow: '2px 2px 2px rgba(0, 0, 0, 0.2)'}}>demostudent@gmail.com</span>
                        </div>
                    </div>
                    <div className="detail-item">
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <span style={{ fontWeight: 'bold', color: 'rgb(0, 0, 0)', textShadow: '4px 4px 4px rgba(0, 0, 0, 0.3)' }}>Phone</span>
                            <span style={{fontWeight: 'bold', textShadow: '2px 2px 2px rgba(0, 0, 0, 0.2)'}}>+91 8273619318</span>
                        </div>
                    </div>
                    <div className="detail-item">
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <span style={{ fontWeight: 'bold', color: 'rgb(0, 0, 0)', textShadow: '4px 4px 4px rgba(0, 0, 0, 0.3)' }}>LinkedIn</span>
                            <span>
                                <a
                                    href="https://www.linkedin.com/in/divyanshu-khandelwal-dkoder/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{fontWeight: 'bold', color: '#0073b1' }}
                                >
                                    LinkedIn Profile
                                </a>
                            </span>
                        </div>
                    </div>
                    <div className="detail-item">
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <span style={{ fontWeight: 'bold', color: 'rgb(0, 0, 0)', textShadow: '4px 4px 4px rgba(0, 0, 0, 0.3)' }}>GitHub</span>
                            <span>
                                <a
                                    href="https://github.com/Abhi-dr"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{fontWeight: 'bold', textShadow: '2px 2px 2px rgba(0, 0, 0, 0.2)'}}
                                >
                                    GitHub Profile
                                </a>
                            </span>
                        </div>
                    </div>
                    <div className="detail-item">
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <span style={{ fontWeight: 'bold', color: 'rgb(0, 0, 0)', textShadow: '4px 4px 4px rgba(0, 0, 0, 0.3)' }}>Website</span>
                            <span>
                                <a
                                    href="https://divyanshukhandelwal.tech/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{fontWeight: 'bold', color: '#1e88e5' }}
                                >
                                    Personal Website
                                </a>
                            </span>
                        </div>
                    </div>
                    <button
                        onClick={handleUpdateProfile}
                        className="update-button"
                    >
                        Update Profile
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;