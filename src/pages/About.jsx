import React, { useState, useEffect } from 'react';
import Modal from '../components/Modal'; // Modal 컴포넌트 import
import Table from '../components/Table'; // Table 컴포넌트 import

const About = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [data, setData] = useState([]);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    useEffect(() => {
        // Fetch data from an API or define it statically
        const fetchData = async () => {
            // Example static data
            const result = [
                { name: 'John', age: 28, city: 'New York' },
                { name: 'Jane', age: 22, city: 'San Francisco' },
                { name: 'Mike', age: 32, city: 'Chicago' }
            ];
            setData(result);
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>About Page</h1>
            <p>This is the about page</p>
            
            <button onClick={openModal}>팝업 열기</button>
            <Modal isOpen={isModalOpen} onClose={closeModal} />

            {data.length > 0 ? <Table data={data} /> : <p>Loading...</p>}


            
        </div>
    );
};

export default About;