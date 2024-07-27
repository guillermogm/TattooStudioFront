import React, { useEffect, useState } from 'react'
import { getServices } from '../../Services/apiCalls'

export const Services = () => {
    const [services, setServices] = useState([])
    const [error, setError] = useState("")

    useEffect(() => {
        const fetchData = async () => {
            try {
                setError('');
                const response = await getServices();
                if (response.success) {
                    setServices(response.data);
                } else {
                    setError('Error loading Services.');
                }
            } catch (error) {
                setError('Something unexpected happened.');
            }
        };
        fetchData();
    }, []);

    return (
        <>
        <div className="container">
            <h2 className="text-center mt-5">Available Services</h2>
            <div className="row">
                {
                    services.map((service, index) => {
                        // Center the last two cards
                        const cardClass = index >= services.length - 2 ? 'col-sm-6' : 'col-sm-4'; 
                        return (
                            <div key={service.id} className={`${cardClass} mt-4 mb-5`}>
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title text-center">{service.serviceName}</h5>
                                        <p className="card-text">{service.description}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
            <h2 className="text-center">{error}</h2>
        </div>
        </>
    )
}