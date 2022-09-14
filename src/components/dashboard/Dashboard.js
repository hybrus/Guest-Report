import React from 'react';
import { useHistory } from 'react-router-dom';
import { VisitorForm } from './VisitorForm';
import { VisitorLogout } from './VisitorLogout';

const Dashboard = () => {

    return (
        <div className='d-flex align-items-center vh-100'>
            <div className='bg-info w-50 h-100'>
                <VisitorForm />
            </div>
            <div className='bg-danger w-50 h-100'>
                <VisitorLogout />
            </div>
        </div>
    );
};

export default Dashboard;
