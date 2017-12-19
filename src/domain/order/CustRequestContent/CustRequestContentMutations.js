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
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createCustRequestContent = {
  type: GraphQLString,
  description: 'mutation for ofbiz createCustRequestContent method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/custRequest/custRequestContents/add?`, null, req);
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
