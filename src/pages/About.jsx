import React, { useState } from 'react';
import Modal from '../components/Modal'; // Modal 컴포넌트 import

const About = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    
    return (
        <div>
            <h1>About</h1>
            <p>This is the about page</p>
            
            <button onClick={openModal}>팝업 열기</button>
            <Modal isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
}
export default About;