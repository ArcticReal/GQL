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
import {DataTemplateTypeInputType} from '../../content/DataTemplateType/DataTemplateTypeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createDataTemplateType = {
  type: ResopnseType,
  description: 'mutation for ofbiz createDataTemplateType method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`content/dataTemplateTypes/add?`, null, req);
  }
};
export {createDataTemplateType};


const updateDataTemplateType = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateDataTemplateType method',
  args:{dataTemplateTypeToBeUpdated: {type: DataTemplateTypeInputType},dataTemplateTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`content/dataTemplateTypes/${args.dataTemplateTypeId}?`, args.dataTemplateTypeToBeUpdated, req);
  }
};
export {updateDataTemplateType};


const deleteDataTemplateTypeByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteDataTemplateTypeByIdUpdated method',
  args:{dataTemplateTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`content/dataTemplateTypes/${args.dataTemplateTypeId}?`, null, req);
  }
};
export {deleteDataTemplateTypeByIdUpdated};
