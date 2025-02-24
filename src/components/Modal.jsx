import React, { useState } from 'react';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  // popup 영역 클릭 시 팝업창 닫히지 않도록 이벤트 전파 방지
  const handlePopupClick = (e) => {
    e.stopPropagation(); 
  };

  return (
    <div className="popup-wrap" onClick={onClose}>
      <div className="bg-popup"></div>
      <div className="popup-box">
        <div className="popup-cont">
          <div className="popup" style={{ maxWidth: '680px' }} onClick={handlePopupClick}>
            <div className="popup-body">
              <div className="popup-msg">
                <strong>진짜 나가시겠어요?</strong>
                <div>
                  지금 가시면 입력했던 <span>정보가 모두 사라져요...</span>
                </div>
              </div>
            </div>
            <div className="popup-btns">
              <button className="btn">계속하기</button>
              <button className="btn" onClick={onClose}>
                나가기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Modal;