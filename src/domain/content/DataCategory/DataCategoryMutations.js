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
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createDataCategory = {
  type: ResopnseType,
  description: 'mutation for ofbiz createDataCategory method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`content/dataCategorys/add?`, null, req);
  }
};
export {createDataCategory};


const updateDataCategory = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateDataCategory method',
  args:{dataCategoryToBeUpdated: {type: DataCategoryInputType},dataCategoryId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`content/dataCategorys/${args.dataCategoryId}?`, args.dataCategoryToBeUpdated, req);
  }
};
export {updateDataCategory};


const deleteDataCategoryByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteDataCategoryByIdUpdated method',
  args:{dataCategoryId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`content/dataCategorys/${args.dataCategoryId}?`, null, req);
  }
};
export {deleteDataCategoryByIdUpdated};
