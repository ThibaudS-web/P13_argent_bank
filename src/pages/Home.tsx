import Feature from "../components/Feature"
import chatIcon from "../assets/icon_chat.png"
import moneyIcon from "../assets/icon_money.png"
import securityIcon from "../assets/icon_security.png"
import { featuresText } from "../utils/staticText"
function Home() {
	return (
		<main>
			<div className="hero">
				<section className="hero-content">
					<h2 className="sr-only">Promoted Content</h2>
					<p className="subtitle">No fees.</p>
					<p className="subtitle">No minimum deposit.</p>
					<p className="subtitle">High interest rates.</p>
					<p className="text">Open a savings account with Argent Bank today!</p>
				</section>
			</div>
			<section className="features">
				<h2 className="sr-only">Features</h2>
				<Feature
					img={chatIcon}
					alt="chat icon"
					textContent={featuresText.featureChatText}
				/>
				<Feature
					img={moneyIcon}
					alt="moyen icon"
					textContent={featuresText.featureMoneyText}
				/>
				<Feature
					img={securityIcon}
					alt="security icon"
					textContent={featuresText.featureSecurityText}
				/>
			</section>
		</main>
	)
}

export default Home
