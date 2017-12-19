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
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createCustRequestItemNote = {
  type: GraphQLString,
  description: 'mutation for ofbiz createCustRequestItemNote method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/custRequest/custRequestItemNotes/add?`, null, req);
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
