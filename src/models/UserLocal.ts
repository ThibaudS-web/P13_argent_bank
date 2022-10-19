class userLocal {
	email: string | null
	firstName: string | null
	lastName: string | null
	id: string | null
	constructor(
		email: string | null,
		firstName: string | null,
		lastName: string | null,
		id: string | null
    ) {
        this.email = email
        this.firstName = firstName
        this.lastName = lastName
        this.id = id
    }
}

export default userLocal