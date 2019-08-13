export class Context {
	eatWith:string = 'alone';
	place:string = 'home';
	meal:string = 'full';
	time:string = 'long_before';
	modality:string = '';
	situation:string = '';

	public getData():object {
		const result = {};
		Object.keys(this).map(key => result[key] = this[key]);
		return result;
	}
}