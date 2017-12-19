import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';
import {postToUrl,deleteToUrl,putToUrl} from '../../framework/ofbizCon.js';


const createSystemInfoNote = {
  type: GraphQLString,
  description: 'mutation for ofbiz createSystemInfoNote method',
  args:{noteName: {type: GraphQLString},noteDateTime: {type: GraphQLString},noteInfo: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commonexts/createSystemInfoNote?noteName=${args.noteName}noteDateTime=${args.noteDateTime}noteInfo=${args.noteInfo}`, null, req);
  }
};
export {createSystemInfoNote};


const deleteAllSystemNotes = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteAllSystemNotes method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commonexts/deleteAllSystemNotes?`, null, req);
  }
};
export {deleteAllSystemNotes};


const deleteSystemInfoNote = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteSystemInfoNote method',
  args:{noteId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commonexts/deleteSystemInfoNote?noteId=${args.noteId}`, null, req);
  }
};
export {deleteSystemInfoNote};


const getLastSystemInfoNote = {
  type: GraphQLString,
  description: 'mutation for ofbiz getLastSystemInfoNote method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commonexts/getLastSystemInfoNote?`, null, req);
  }
};
export {getLastSystemInfoNote};


const getSystemInfoNotes = {
  type: GraphQLString,
  description: 'mutation for ofbiz getSystemInfoNotes method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commonexts/getSystemInfoNotes?`, null, req);
  }
};
export {getSystemInfoNotes};


const getSystemInfoStatus = {
  type: GraphQLString,
  description: 'mutation for ofbiz getSystemInfoStatus method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commonexts/getSystemInfoStatus?`, null, req);
  }
};
export {getSystemInfoStatus};
