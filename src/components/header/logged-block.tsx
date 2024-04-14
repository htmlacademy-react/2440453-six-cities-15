type TLoggedBlockProps = {
  email: string;
  count: number;
}

function LoggedBlock({email, count}: TLoggedBlockProps) : JSX.Element {
  return (
    <>
      <span className="header__user-name user__name">{email}</span>
      <span className="header__favorite-count">{count}</span>
    </>
  );
}

export default LoggedBlock;
