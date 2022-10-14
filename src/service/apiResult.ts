export class ApiResult<T> {
	body: T
	constructor(body: T) {
		this.body = body
	}
}
