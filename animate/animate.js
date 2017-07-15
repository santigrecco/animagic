import { addClass, removeClass } from '../common/utilities'; 
import Rx from 'rxjs/Rx';

export default function(element, config) {
	if(config.before){
		addClass(element, config.before);
	}
	
	element.style.animation = config.animation;

	if(config.after) {

		let listener = Rx.Observable.fromEvent(element, "animationend")
		listener.subscribe(
			() => {
				removeClass(element, config.before);
				addClass(element, config.after);
			}, 
			() => {},
			() => {
				listener.unsubscribe();
				element.style.animation = 'none';
			}
		)

	}
} 