export class Note {
	type: string = "";
	title: string = "";
	description: string = "";
	location: {lat: number, lng: number, check: any} = null;
	pictures: any[]= [];
	reminder: string = "";
	color: string = "";
	
	constructor() {
	}
}