export default function (context) {
  if (context.store.getters.role !== 'admin') {
    context.redirect('/welcome')
  }
}
