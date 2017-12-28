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
import {DataCategoryInputType} from '../../content/DataCategory/DataCategoryInputType.js';
import {DataCategoryResponseType} from '../../content/DataCategory/DataCategoryResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createDataCategory = {
  type: DataCategoryResponseType,
  description: 'mutation for ofbiz createDataCategory method',
  args:{dataCategoryToBeAdded: {type: DataCategoryInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`content/dataCategorys/add?`, args.dataCategoryToBeAdded, req);
  }
};
export {createDataCategory};


const updateDataCategory = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateDataCategory method',
  args:{dataCategoryToBeUpdated: {type: DataCategoryInputType},dataCategoryId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`content/dataCategorys/${args.dataCategoryId}?`, args.dataCategoryToBeUpdated, req);
  }
};
export {updateDataCategory};


const deleteDataCategoryByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteDataCategoryByIdUpdated method',
  args:{dataCategoryId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`content/dataCategorys/${args.dataCategoryId}?`, null, req);
  }
};
export {deleteDataCategoryByIdUpdated};
