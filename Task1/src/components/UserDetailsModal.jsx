import React from 'react';
import '../styles/main.scss';

const UserDetailsModal = ({ user, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal-content">
        <button className="close icon close-icon" onClick={onClose}></button>
        <h2>{user.name}</h2>
        <div className="user-detail">
          <span className="detail-label">Телефон:</span>
          <span className="detail-value">{user.phone}</span>
        </div>
        <div className="user-detail">
          <span className="detail-label">Почта:</span>
          <span className="detail-value">{user.email}</span>
        </div>
        <div className="user-detail">
          <span className="detail-label">Дата приема:</span>
          <span className="detail-value">{user.hire_date}</span>
        </div>
        <div className="user-detail">
          <span className="detail-label">Должность:</span>
          <span className="detail-value">{user.position_name}</span>
        </div>
        <div className="user-detail user-detail-department">
          <span className="detail-label">Подразделение:</span>
          <span className="detail-value">{user.department}</span>
        </div>
        <div className="user-detail-no-margin">
          <span className="detail-label">Дополнительная информация:</span>
          <span className="detail-value">{user.additionalInfo}</span>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsModal;
