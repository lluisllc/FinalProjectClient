import { Link } from 'react-router-dom';

// We are deconstructing props object directly in the parentheses of the function
function SubjectCard({ title, description, _id, tags, resources  }) {
	return (
		<div className="SubjectCard card">
			<Link to={`/subjects/${_id}`}>
				<h3>{title}</h3>
			</Link>
			<p>Tags: {tags}</p>
			<p style={{ maxWidth: '400px' }}>{description} </p>
			<p> Resources: {resources}</p>
		</div>
	);
}

export default SubjectCard;