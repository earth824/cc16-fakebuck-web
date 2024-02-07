import { useRef } from 'react';
import Avatar from '../../../components/Avatar';
import FormButton from './FormButton';
import { useState } from 'react';

export default function PictureForm({ title, children }) {
  const fileEl = useRef(null);
  const [file, setFile] = useState(null);

  return (
    <div>
      <input
        type="file"
        className="hidden"
        ref={fileEl}
        onChange={e => {
          if (e.target.files[0]) {
            setFile(e.target.files[0]);
          }
        }}
      />
      <div className="flex justify-between items-center p-4">
        <h5 className="text-xl font-bold">{title}</h5>
        <div>
          {file && (
            <>
              <FormButton>Save</FormButton>
              <FormButton
                onClick={() => {
                  setFile(null);
                  fileEl.current.value = '';
                }}
              >
                Cancel
              </FormButton>
            </>
          )}
          <FormButton onClick={() => fileEl.current.click()}>Edit</FormButton>
        </div>
      </div>
      <div className="flex justify-center pb-4">
        <Avatar
          size={10.5}
          src={file ? URL.createObjectURL(file) : undefined}
        />
      </div>
    </div>
  );
}
