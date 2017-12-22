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
import {CustRequestContentInputType} from '../../order/CustRequestContent/CustRequestContentInputType.js';
import {CustRequestContentResponseType} from '../../order/CustRequestContent/CustRequestContentResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createCustRequestContent = {
  type: CustRequestContentResponseType,
  description: 'mutation for ofbiz createCustRequestContent method',
  args:{custRequestContentToBeAdded: {type: CustRequestContentInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/custRequest/custRequestContents/add?`, args.custRequestContentToBeAdded, req);
  }
};
export {createCustRequestContent};


const deleteCustRequestContentByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteCustRequestContentByIdUpdated method',
  args:{custRequestContentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/custRequest/custRequestContents/${args.custRequestContentId}?`, null, req);
  }
};
export {deleteCustRequestContentByIdUpdated};


const updateCustRequestContent = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateCustRequestContent method',
  args:{custRequestContentToBeUpdated: {type: CustRequestContentInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/custRequest/custRequestContents/${args.nullVal}?`, args.custRequestContentToBeUpdated, req);
  }
};
export {updateCustRequestContent};
