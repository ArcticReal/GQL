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
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createCustRequestNote = {
  type: ResopnseType,
  description: 'mutation for ofbiz createCustRequestNote method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/custRequest/custRequestNotes/add?`, null, req);
  }
};
export {createCustRequestNote};


const deleteCustRequestNoteByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteCustRequestNoteByIdUpdated method',
  args:{custRequestNoteId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/custRequest/custRequestNotes/${args.custRequestNoteId}?`, null, req);
  }
};
export {deleteCustRequestNoteByIdUpdated};


const updateCustRequestNote = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateCustRequestNote method',
  args:{custRequestNoteToBeUpdated: {type: CustRequestNoteInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/custRequest/custRequestNotes/${args.nullVal}?`, args.custRequestNoteToBeUpdated, req);
  }
};
export {updateCustRequestNote};
