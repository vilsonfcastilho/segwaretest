import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
  },

  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  headerText: {
    fontSize: 16,
    color: '#13131a',
    marginLeft: 20,
  },

  logoutContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  logoutText: {
    fontSize: 16,
    color: '#bf1736',
    marginRight: 8,
  },

  feed: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
  },

  title: {
    fontSize: 30,
    marginBottom: 16,
    color: '#13131a',
    fontWeight: 'bold'
  },

  postButton: {
    backgroundColor: '#3dadf2',
    borderRadius: 8,
    height: 30,
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -16,
  },

  buttonText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#fff',
  },

  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },

  filterText: {
    fontSize: 12,
    lineHeight: 24,
    color: '#737380',
  },

  filter: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 6,
    backgroundColor: '#fff',
    borderRadius: 8,
    height: 18,
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  filterType: {
    fontSize: 12,
    color: '#737380',
    marginRight: 0,
  },

  feedText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#737380',
  },

  feedList: {
    marginTop: 20,
  },

  feedPost: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 16,
  },

  postUser: {
    fontSize: 14,
    color: '#41414d',
    fontWeight: 'bold',
  },

  postContent: {
    marginTop: 10,
    fontSize: 15,
    marginBottom: 6,
  },

  infoPost: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  reactionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  likeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  loveContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },

  upVoteNumber: {
    fontSize: 15,
    color: '#737380',
    marginLeft: 2,
  },

  postTime: {
    fontSize: 10,
    color: '#737380',
  },
});
