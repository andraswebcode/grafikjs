import { Stateful } from './mixins/statueful';
import { Observable } from './observable';
import { uniqueId, kebabize } from './utils';

class Element extends Stateful(Observable) {
	protected readonly tagName: string;
	protected id = '';
	protected name = '';
	protected className = '';

	protected getAttrMap(): string[] {
		return ['className'];
	}

	public getAttributes(makeKebabeCase = false): object {
		const attrMap = this.getAttrMap();
		let value;
		return attrMap.reduce((memo: object, key: string): object => {
			if (typeof this[key] !== 'undefined') {
				value = this[key];
				value = Array.isArray(value) ? value.join(' ') : value;
				memo[makeKebabeCase ? kebabize(key) : key] = value;
			}
			return memo;
		}, {});
	}

	public getStyle(): object {
		return {};
	}

	public createId(prefix?: string) {
		if (!this.id) {
			this.id = uniqueId(prefix);
		}
	}

	public addClass(...classNames: string[]) {
		const currentClasses = this.className.split(' ').filter((cn) => cn);
		const newClasses = classNames.filter((cn) => cn && !currentClasses.includes(cn));
		this.set('className', currentClasses.concat(newClasses).join(' '));
		return this;
	}

	public removeClass(...classNames: string[]) {
		const currentClasses = this.className.split(' ');
		this.set('className', currentClasses.filter((cn) => !classNames.includes(cn)).join(' '));
		return this;
	}

	public toJSON(): object {
		const { id, name, tagName } = this;
		const json: any = {
			id,
			name,
			tagName,
			...this.getAttributes()
		};
		// @ts-ignore
		const children = this.isCollection && this.mapChildren((child) => child.toJSON());

		if (children) {
			json.children = children;
		}

		return json;
	}
}

export { Element };
