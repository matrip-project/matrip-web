import React from 'react';
import ReactDOM from 'react-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const LoadingIndicatorPortal: React.FC = () => {
    const isLoading = useSelector((state: RootState) => state.loading);
    // console.log(isLoading);
    if (isLoading) {
        return null;
    }

    return ReactDOM.createPortal(
        <div style={{
            position: 'fixed',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            background: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <div>Loading...</div>
        </div>,
        document.body,
    );
};

export default LoadingIndicatorPortal;
