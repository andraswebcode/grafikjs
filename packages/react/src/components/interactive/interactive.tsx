import {
	useCanvas
} from './../../hooks';

const Interactive = ({
	className,
	children
}: any) => {

	const canvas = useCanvas();

	return (
		<div className={className}>
			{children}
		</div>
	);

};

export {
	Interactive
};
