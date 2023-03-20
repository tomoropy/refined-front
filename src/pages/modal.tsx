// App.tsx
import { NextPage } from "next";
import React, { useState } from "react";
import Modal from "../components/Modal";

const Mod: NextPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <button
        className="px-4 py-1 m-5 bg-slate-500 text-white rounded-full"
        onClick={openModal}
      >
        Open
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2 className="text-xl font-bold mb-4 text-center">Modal Sample</h2>
        <p className="mb-4">
          サンプルテキスト。サンプルテキスト。サンプルテキスト。
          サンプルテキスト。 サンプルテキスト。 サンプルテキスト。
          サンプルテキスト。 サンプルテキスト。 サンプルテキスト。
          サンプルテキスト。 サンプルテキスト。 サンプルテキスト。
          サンプルテキスト。 サンプルテキスト。 サンプルテキスト。
        </p>
        <button
          className="px-4 py-1 border-2 border-gray-500 text-slate-500 rounded-full"
          onClick={closeModal}
        >
          Close
        </button>
      </Modal>
    </div>
  );
};

export default Mod;
