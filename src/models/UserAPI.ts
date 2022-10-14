class UserAPI {
	email: string | null
	firstName: string | null
	lastName: string | null
	createdAt: Date | null
	updatedAt: Date | null
	id: string | null
	constructor(
		email: string | null,
		firstName: string | null,
		lastName: string | null,
		createdAt: Date | null,
		updatedAt: Date | null,
		id: string | null
	) {
		this.email = email
		this.firstName = firstName
		this.lastName = lastName
		this.createdAt = createdAt
		this.updatedAt = updatedAt
		this.id = id
	}
}

export default UserAPI
