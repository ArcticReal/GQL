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
import {GoodIdentificationInputType} from '../../product/GoodIdentification/GoodIdentificationInputType.js';
import {GoodIdentificationResponseType} from '../../product/GoodIdentification/GoodIdentificationResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createGoodIdentification = {
  type: GoodIdentificationResponseType,
  description: 'mutation for ofbiz createGoodIdentification method',
  args:{goodIdentificationToBeAdded: {type: GoodIdentificationInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/goodIdentifications/add?`, args.goodIdentificationToBeAdded, req);
  }
};
export {createGoodIdentification};


const deleteGoodIdentificationByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteGoodIdentificationByIdUpdated method',
  args:{goodIdentificationId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/goodIdentifications/${args.goodIdentificationId}?`, null, req);
  }
};
export {deleteGoodIdentificationByIdUpdated};


const updateGoodIdentification = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateGoodIdentification method',
  args:{goodIdentificationToBeUpdated: {type: GoodIdentificationInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/goodIdentifications/${args.nullVal}?`, args.goodIdentificationToBeUpdated, req);
  }
};
export {updateGoodIdentification};
