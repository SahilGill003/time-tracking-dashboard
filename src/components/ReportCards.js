
function nameBytitle(title) {
	title = title.toLowerCase();
	return title.replace(' ', '-');
}

function lastTimeText(category) {
	switch (category) {
		case "weekly": return 'Week';
		case "daily": return 'Day';
		case "monthly": return "Month";
		default: return "";
	}

}

const SingleReportCard = (cardData, category) => {

	const { title, timeframes
	}
		= cardData;

	const { current, previous } = timeframes[category];

	return {
		view: () => (
			m('.report-card',
				m('.card-bg' + '.' + nameBytitle(title),
					m('.card-content',
						[
							m('p.category-title', '' + title),
							m('.ellipsis-icon', m("svg[width='21'][height='5'][xmlns='http://www.w3.org/2000/svg']",
								m("path[d='M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z'][fill='currentColor'][fill-rule='evenodd']")
							)),
							m('p.time-spent', current + 'hrs'),
							m('p.last-time', 'Last ' + lastTimeText(category) + ' -  ' + previous + 'hrs')
						]
					)
				)
			)
		)
	}
}


export default function ReportCards(data, category) {
	return {
		view: () => (
			data.map(i =>
				m(() => SingleReportCard(i, category))
			)
		)
	}
}
