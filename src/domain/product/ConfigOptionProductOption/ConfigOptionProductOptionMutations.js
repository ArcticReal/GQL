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
import {ConfigOptionProductOptionInputType} from '../../product/ConfigOptionProductOption/ConfigOptionProductOptionInputType.js';
import {ConfigOptionProductOptionResponseType} from '../../product/ConfigOptionProductOption/ConfigOptionProductOptionResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createConfigOptionProductOption = {
  type: ConfigOptionProductOptionResponseType,
  description: 'mutation for ofbiz createConfigOptionProductOption method',
  args:{configOptionProductOptionToBeAdded: {type: ConfigOptionProductOptionInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/configOptionProductOptions/add?`, args.configOptionProductOptionToBeAdded, req);
  }
};
export {createConfigOptionProductOption};


const deleteConfigOptionProductOptionByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteConfigOptionProductOptionByIdUpdated method',
  args:{configOptionProductOptionId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/configOptionProductOptions/${args.configOptionProductOptionId}?`, null, req);
  }
};
export {deleteConfigOptionProductOptionByIdUpdated};


const updateConfigOptionProductOption = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateConfigOptionProductOption method',
  args:{configOptionProductOptionToBeUpdated: {type: ConfigOptionProductOptionInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/configOptionProductOptions/${args.nullVal}?`, args.configOptionProductOptionToBeUpdated, req);
  }
};
export {updateConfigOptionProductOption};
