
const ReportHeading = (categories, currentCategory, handleCategory) => (
  {
    view: () => (
      m('div#report-header',
        [
          m('div#report-profile', [
            m("img.image-jeremy", { src: './images/image-jeremy.png' }),
            m('div',
              [
                m('p.title', 'Report for'),
                m('p.name', 'Jeremy Robson')
              ]
            )],),
          categories.map((category) => {
            return m('p.category' + (currentCategory === category ? '.active' : ''), { onclick: () => handleCategory(category) }, category)
          })
        ]
      )
    )
  }
)




export default ReportHeading;