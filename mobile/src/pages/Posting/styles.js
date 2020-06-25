import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 60,
    justifyContent: 'center'
  },

  postContainer: {
    alignItems: 'center',
    padding: 40,
    backgroundColor: '#fff',
    borderRadius: 8,
  },

  postForm: {
    padding: 10,
    marginTop: 6,
    alignItems: 'center',
  },

  formText: {
    fontSize: 16,
    marginTop: 14,
    marginBottom: 10,
    color: '#41414d',
  },

  formInput: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eee',
    borderRadius: 8,
    height: 60,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },

  backContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },

  backText: {
    fontSize: 12,
    color: '#bf1736',
    marginLeft: 2,
  },

  postButton: {
    backgroundColor: '#04d970',
    borderRadius: 8,
    height: 30,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },

  buttonText: {
    color: '#fff',
  },
})
