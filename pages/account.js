import AccountHeader from "../components/Account/AccountHeader";
import AccountPermissions from "../components/Account/AccountPermissions";
import AccountOrders from "../components/Account/AccountOrders";

function Account({ user }) {
  return (
    <>
      <AccountHeader {...user} />
      <AccountOrders />
      {user.role === "root" && <AccountPermissions currentUserId={user._id} />}
    </>
  );
}

export default Account;
