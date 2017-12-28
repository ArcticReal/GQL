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
import {CustRequestItemNoteInputType} from '../../order/CustRequestItemNote/CustRequestItemNoteInputType.js';
import {CustRequestItemNoteResponseType} from '../../order/CustRequestItemNote/CustRequestItemNoteResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createCustRequestItemNote = {
  type: CustRequestItemNoteResponseType,
  description: 'mutation for ofbiz createCustRequestItemNote method',
  args:{custRequestItemNoteToBeAdded: {type: CustRequestItemNoteInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/custRequest/custRequestItemNotes/add?`, args.custRequestItemNoteToBeAdded, req);
  }
};
export {createCustRequestItemNote};


const deleteCustRequestItemNoteByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteCustRequestItemNoteByIdUpdated method',
  args:{custRequestItemNoteId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/custRequest/custRequestItemNotes/${args.custRequestItemNoteId}?`, null, req);
  }
};
export {deleteCustRequestItemNoteByIdUpdated};


const updateCustRequestItemNote = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateCustRequestItemNote method',
  args:{custRequestItemNoteToBeUpdated: {type: CustRequestItemNoteInputType},custRequestItemSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/custRequest/custRequestItemNotes/${args.custRequestItemSeqId}?`, args.custRequestItemNoteToBeUpdated, req);
  }
};
export {updateCustRequestItemNote};
