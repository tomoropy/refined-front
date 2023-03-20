import React, { useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  // モーダルが開いた時,スクロールができないようにする
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // モーダルが開いていない時は何も表示しない
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10"
      onClick={onClose}
    >
      <div
        className="bg-white rounded p-4 min-w-[300px] min-h-[200px] max-w-[80%] max-h-[80%] overflow-auto relative"
        onClick={(e) => e.stopPropagation()} // モーダル内のクリックイベントを親要素に伝播させない
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
