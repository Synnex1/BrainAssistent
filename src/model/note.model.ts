export class Note {
	type: string = "";
	title: string = "";
	description: string = "";
	location: {lat: number, lng: number} = null;
	pictures: any[]= [];
	reminder: any = null;
	color: string = "";
	
	constructor() {
	}
}