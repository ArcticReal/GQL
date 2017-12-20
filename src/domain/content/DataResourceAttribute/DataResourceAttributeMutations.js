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
import {DataResourceAttributeInputType} from '../../content/DataResourceAttribute/DataResourceAttributeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createDataResourceAttribute = {
  type: ResopnseType,
  description: 'mutation for ofbiz createDataResourceAttribute method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`content/dataResource/dataResourceAttributes/add?`, null, req);
  }
};
export {createDataResourceAttribute};


const updateDataResourceAttribute = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateDataResourceAttribute method',
  args:{dataResourceAttributeToBeUpdated: {type: DataResourceAttributeInputType},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`content/dataResource/dataResourceAttributes/${args.attrName}?`, args.dataResourceAttributeToBeUpdated, req);
  }
};
export {updateDataResourceAttribute};


const deleteDataResourceAttributeByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteDataResourceAttributeByIdUpdated method',
  args:{dataResourceAttributeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`content/dataResource/dataResourceAttributes/${args.dataResourceAttributeId}?`, null, req);
  }
};
export {deleteDataResourceAttributeByIdUpdated};
