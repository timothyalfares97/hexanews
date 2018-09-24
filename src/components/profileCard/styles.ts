/**
 * Style file for profile card component.
 */

export default {
  card: {
    display: 'flex',
    boxShadow: '0px 0px 0px 0px rgba(0, 0, 0, 0.2)',
  },

  details: {
    display: 'flex',
    flex: 4,
    flexDirection: 'column',
  },

  content: {
    flex: '1 0 auto',
  },

  description: {
    marginTop: 4,
  },

  avatar: {
    width: 100,
    height: 100,
    borderRadius: '50%',
  },

  memberText: {
    marginTop: 12,
    fontSize: 12,
    color: 'gray',
  },

  imageContainer: {
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
  },
}