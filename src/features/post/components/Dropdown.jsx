import { EllipsisIcon } from '../../../icons';

export default function Dropdown() {
  return (
    <div className="relative">
      <div
        className="w-9 h-9 rounded-full hover:bg-gray-200 flex items-center justify-center"
        role="button"
      >
        <EllipsisIcon />
      </div>
      <ul className="hidden absolute right-0 translate-y-1 w-28 bg-white rounded-lg p-2 shadow-[0_0_15px_rgb(0,0,0,0.2)]">
        <li
          className="text-sm p-2 rounded-lg hover:bg-gray-200 font-semibold"
          role="button"
        >
          Edit
        </li>
        <li
          className="text-sm p-2 rounded-lg hover:bg-gray-200 font-semibold"
          role="button"
        >
          Delete
        </li>
      </ul>
    </div>
  );
}
