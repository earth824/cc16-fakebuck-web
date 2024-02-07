import { useRef } from 'react';
import FormButton from './FormButton';
import { useState } from 'react';
import Spinner from '../../../components/Spinner';
import { toast } from 'react-toastify';

export default function PictureForm({ title, children, initialSrc, onSave }) {
  const fileEl = useRef(null);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleClickSave = async () => {
    try {
      setLoading(true);
      await onSave(file);
    } catch (err) {
      toast.error(err.response?.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {loading && <Spinner />}
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
              <FormButton onClick={handleClickSave}>Save</FormButton>
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
      <div className="flex justify-center pb-4 px-4">
        {children(file ? URL.createObjectURL(file) : initialSrc)}
      </div>
    </div>
  );
}
