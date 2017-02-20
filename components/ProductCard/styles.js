import { vw } from '../../utils/dimensions'

export default {
  product: {
    margin: 10,
    alignSelf: 'flex-start',
    alignItems: 'center',
    width: vw(100) / 2 - 20,
    shadowColor: '#ccc',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 3,
    shadowOpacity: 0.4
  },
  touchable: {
    alignSelf: 'stretch',
  },
  productImg: {
    height: 150,

    // to width: 100% the image
    alignSelf: 'stretch',
    width: null,

    // to align the "featured" badge
    flexDirection: 'row',

    // to center the "featured" badge horizontally
    justifyContent: 'center',
  },
  featured: {
    // to send the badge to the bottom
    alignSelf: 'flex-end',
    marginBottom: 10,
  },
  price: {
    backgroundColor: 'white',
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 10
  }
}
