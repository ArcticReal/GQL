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
import {GoodIdentificationTypeInputType} from '../../product/GoodIdentificationType/GoodIdentificationTypeInputType.js';
import {GoodIdentificationTypeResponseType} from '../../product/GoodIdentificationType/GoodIdentificationTypeResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createGoodIdentificationType = {
  type: GoodIdentificationTypeResponseType,
  description: 'mutation for ofbiz createGoodIdentificationType method',
  args:{goodIdentificationTypeToBeAdded: {type: GoodIdentificationTypeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/goodIdentification/goodIdentificationTypes/add?`, args.goodIdentificationTypeToBeAdded, req);
  }
};
export {createGoodIdentificationType};


const updateGoodIdentificationType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateGoodIdentificationType method',
  args:{goodIdentificationTypeToBeUpdated: {type: GoodIdentificationTypeInputType},goodIdentificationTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/goodIdentification/goodIdentificationTypes/${args.goodIdentificationTypeId}?`, args.goodIdentificationTypeToBeUpdated, req);
  }
};
export {updateGoodIdentificationType};


const deleteGoodIdentificationTypeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteGoodIdentificationTypeByIdUpdated method',
  args:{goodIdentificationTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/goodIdentification/goodIdentificationTypes/${args.goodIdentificationTypeId}?`, null, req);
  }
};
export {deleteGoodIdentificationTypeByIdUpdated};
