import React, { useState } from "react";

function Jobs() {
	const [jobList, setJobList] = useState([]);

	const listings = jobList.map((j) => {
		if (!j) {
			return;
		}
		return (
			<div className="job">
				<h2 className="job__employer">{j.employer}</h2>
				<p className="job__title">{j.title}</p>
				<p className="job__dates">
					{j.dates.start} - {j.dates.end}
					test
				</p>
				<p className="job__location">
					{j.location.city}, {j.location.state}
				</p>
				<div className="job__duties">
					{j.duties.map((x) => {
						return <li>{x.duty}</li>;
					})}
				</div>
			</div>
		);
	});
	return <div>{listings}</div>;
}

export default Jobs;
