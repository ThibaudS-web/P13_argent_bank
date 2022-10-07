function Feature(props: {
	img: string
	alt: string
	textContent: { title: string; text: string }
}) {
	const { img, alt, textContent } = props

	return (
		<>
			<div className="feature-item">
				<img src={img} alt={alt} className="feature-icon" />
				<h3 className="feature-item-title">{textContent.title}</h3>
				<p>{textContent.text}</p>
			</div>
		</>
	)
}

export default Feature
