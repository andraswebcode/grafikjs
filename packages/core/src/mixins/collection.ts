import {
	Constructor
} from './../types/mixin';

function Collection<TBase extends Constructor>(Base: TBase){

	return class Collection extends Base {

		public isCollection = true;
		public shapes:object[] = [];

		public add(...shapes) : Collection {
			return this;
		}

		public remove(...shapes) : Collection {
			return this;
		}

	}

}

export {
	Collection
};
