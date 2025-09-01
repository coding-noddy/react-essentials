export default function TabButton({ label, onSelectTab, isSelected }) {
  return (
    <li>
      <button className={isSelected ? 'active': ''} onClick={onSelectTab}>{label}</button>
    </li>
  );
}
