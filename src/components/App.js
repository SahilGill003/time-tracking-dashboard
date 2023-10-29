
import ReportCards from './ReportCards.js'

const Main = () => ({
	view: () => [m('#report-heading', 'Report-Heading'),
	m(ReportCards)]

})


const App = m('main');

App.mount(App, Main);

export default App;

