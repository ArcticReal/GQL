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
import {DataResourceAttributeResponseType} from '../../content/DataResourceAttribute/DataResourceAttributeResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createDataResourceAttribute = {
  type: DataResourceAttributeResponseType,
  description: 'mutation for ofbiz createDataResourceAttribute method',
  args:{dataResourceAttributeToBeAdded: {type: DataResourceAttributeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`content/dataResource/dataResourceAttributes/add?`, args.dataResourceAttributeToBeAdded, req);
  }
};
export {createDataResourceAttribute};


const updateDataResourceAttribute = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateDataResourceAttribute method',
  args:{dataResourceAttributeToBeUpdated: {type: DataResourceAttributeInputType},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`content/dataResource/dataResourceAttributes/${args.attrName}?`, args.dataResourceAttributeToBeUpdated, req);
  }
};
export {updateDataResourceAttribute};


const deleteDataResourceAttributeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteDataResourceAttributeByIdUpdated method',
  args:{dataResourceAttributeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`content/dataResource/dataResourceAttributes/${args.dataResourceAttributeId}?`, null, req);
  }
};
export {deleteDataResourceAttributeByIdUpdated};
