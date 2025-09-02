export default function Tabs({ Buttons, children, ButtonWrapper = "menu" }) {
  return (
    <>
      <ButtonWrapper>{Buttons}</ButtonWrapper>
      {children}
    </>
  );
}
