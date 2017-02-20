import { vw } from '../../utils/dimensions'

export default {
  header: {
    zIndex: 10,
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,

    elevation: 0,
    shadowColor: null,
    shadowOffset: {width: 0, height: 0},
    shadowRadius: null,
    shadowOpacity: 0,
    borderBottomWidth: null,

  },
  content: {
    backgroundColor: '#f0f0f0',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 0
  },
  productImg: {
    height: vw(100),

    // to width: 100% the image
    alignSelf: 'stretch',
    width: null,

    // to align the "featured" badge
    flexDirection: 'row',

    // to center the "featured" badge horizontally
    justifyContent: 'center',
  },
  // price: {
  //   fontWeight: 'bold'
  // },
  title: {
    marginTop: 10
  },
  type: {
    backgroundColor: 'white',
    padding: 10,
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  description: {
    backgroundColor: 'white',
    padding: 10,
    marginTop: 15,
  },
  buyNow: {
    backgroundColor: '#02b875',
    margin: 15,
  }
}
