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
import {CustRequestNoteInputType} from '../../order/CustRequestNote/CustRequestNoteInputType.js';
import {CustRequestNoteResponseType} from '../../order/CustRequestNote/CustRequestNoteResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createCustRequestNote = {
  type: CustRequestNoteResponseType,
  description: 'mutation for ofbiz createCustRequestNote method',
  args:{custRequestNoteToBeAdded: {type: CustRequestNoteInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/custRequest/custRequestNotes/add?`, args.custRequestNoteToBeAdded, req);
  }
};
export {createCustRequestNote};


const deleteCustRequestNoteByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteCustRequestNoteByIdUpdated method',
  args:{custRequestNoteId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/custRequest/custRequestNotes/${args.custRequestNoteId}?`, null, req);
  }
};
export {deleteCustRequestNoteByIdUpdated};


const updateCustRequestNote = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateCustRequestNote method',
  args:{custRequestNoteToBeUpdated: {type: CustRequestNoteInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/custRequest/custRequestNotes/${args.nullVal}?`, args.custRequestNoteToBeUpdated, req);
  }
};
export {updateCustRequestNote};
