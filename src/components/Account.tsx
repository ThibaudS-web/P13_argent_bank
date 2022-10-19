import ButtonTransaction from "./ButtonTransaction"

function Account(props: { account: { title: string; amount: string; balance: string } }) {
	const { account } = props
	return (
		<section className="account">
			<div className="account-content-wrapper">
				<h3 className="account-title">{account.title}</h3>
				<p className="account-amount">${account.amount}</p>
				<p className="account-amount-description">{account.balance}</p>
			</div>
			<ButtonTransaction />
		</section>
	)
}

export default Account
