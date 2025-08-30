export default function TabButton({ label, onSelectTab }) {
  return (
    <li>
      <button onClick={onSelectTab}>{label}</button>
    </li>
  );
}
