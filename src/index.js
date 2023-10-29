
import ReportCards from './components/ReportCards.js'
import ReportHeading from './components/ReportHeading.js'
import data from '../data.json';

const root = document.getElementById('root');
const categories = ['daily', 'weekly', 'monthly'];

const categoryState = { category: 'weekly' };

function handleCategory(category) {
  categoryState.category = category;

}

const Main = () => ({
  view: () =>
  (m('main',
    [
      m(() => ReportHeading(categories, categoryState.category, handleCategory)),
      m(() => ReportCards(data, categoryState.category))
    ])
  )
})

m.mount(root, Main);




