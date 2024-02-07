import PictureForm from './PictureForm';

export default function EditProfileForm() {
  return (
    <div className="flex flex-col gap-4">
      <PictureForm title="Profile picture"></PictureForm>
      <PictureForm title="Cover photo"></PictureForm>
    </div>
  );
}
