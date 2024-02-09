import { Link } from 'react-router-dom';
import Avatar from '../../../components/Avatar';
import { useState } from 'react';
import Modal from '../../../components/Modal';

export default function CreatePostContainer() {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white rounded-lg py-3 px-4 flex gap-2">
      <Link to="/" className="shrink-0">
        <Avatar />
      </Link>
      <button
        className="w-full bg-gray-200 hover:bg-gray-300 text-left rounded-full px-2.5 py-1.5 text-gray-500"
        onClick={() => setOpen(true)}
      >
        What&rsquo;s on your mind?
      </button>
      {open && (
        <Modal
          title="Create post"
          width={32}
          onClose={() => setOpen(false)}
        ></Modal>
      )}
    </div>
  );
}
