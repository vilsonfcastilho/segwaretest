import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 60,
    justifyContent: 'center'
  },

  loginContainer: {
    alignItems: 'center',
    padding: 40,
    backgroundColor: '#fff',
    borderRadius: 8,
  },

  formContainer: {
    padding: 10,
    marginTop: 6,
    alignItems: 'center',
  },

  formText: {
    fontSize: 16,
    marginTop: 14,
    marginLeft: 8,
    marginBottom: 4,
    color: '#41414d',
  },

  formInput: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eee',
    borderRadius: 8,
    height: 26,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },

  forgotText: {
    marginTop: 10,
    fontSize: 12,
    lineHeight: 24,
    color: '#bf1736',
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  signUpButton: {
    backgroundColor: '#3dadf2',
    borderRadius: 8,
    height: 30,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 10,
  },

  signInButton: {
    backgroundColor: '#04d970',
    borderRadius: 8,
    height: 30,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 10,
  },
  
  buttonText: {
    color: '#fff',
  },
})
