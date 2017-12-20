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
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createConfigOptionProductOption = {
  type: ResopnseType,
  description: 'mutation for ofbiz createConfigOptionProductOption method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/configOptionProductOptions/add?`, null, req);
  }
};
export {createConfigOptionProductOption};


const deleteConfigOptionProductOptionByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteConfigOptionProductOptionByIdUpdated method',
  args:{configOptionProductOptionId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/configOptionProductOptions/${args.configOptionProductOptionId}?`, null, req);
  }
};
export {deleteConfigOptionProductOptionByIdUpdated};


const updateConfigOptionProductOption = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateConfigOptionProductOption method',
  args:{configOptionProductOptionToBeUpdated: {type: ConfigOptionProductOptionInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/configOptionProductOptions/${args.nullVal}?`, args.configOptionProductOptionToBeUpdated, req);
  }
};
export {updateConfigOptionProductOption};
