export default function (context) {
  if (!context.store.getters.loggedInUser) {
    context.redirect('/login')
  }
}
