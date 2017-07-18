import { addClass, removeClass } from '../common/utilities'; 
import Rx from 'rxjs/Rx';

export default function(element, config) {
	let beforeClass = '';

	if(!element) {
		throw new Error("Element don't exist");
	}

	if(config.before){
		if(typeof config.before === 'object'){

			config.before.doBefore(element);
			addClass(element, config.before.beforeClass);
			beforeClass = config.before.beforeClass;

		 } else if(typeof config.before === 'string'){

			addClass(element, config.before);
			beforeClass = config.before;
			
		 }
		
	}
	
	element.style.animation = config.animation;

	if(config.after) {
		if(typeof config.after === 'object') {
			let listener = Rx.Observable.fromEvent(element, "animationend")
			.subscribe(
				() => {
					removeClass(element, beforeClass);
					addClass(element, config.after.afterClass);
					config.after.doAfter(element);
					element.style.animation = 'none';
					listener.unsubscribe()
				}, 
				(error) => {throw error},
			)
		} else if(typeof config.after === 'string') {
			let listener = Rx.Observable.fromEvent(element, "animationend")
			.subscribe(
				() => {
					removeClass(element, beforeClass);
					addClass(element, config.after);
					element.style.animation = 'none';
					listener.unsubscribe();
				}, 
				(error) => {throw error},

			)
		}
		
	}
} 