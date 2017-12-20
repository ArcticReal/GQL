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
import {ElectronicTextInputType} from '../../content/ElectronicText/ElectronicTextInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createElectronicText = {
  type: ResopnseType,
  description: 'mutation for ofbiz createElectronicText method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`content/electronicTexts/add?`, null, req);
  }
};
export {createElectronicText};


const deleteElectronicTextByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteElectronicTextByIdUpdated method',
  args:{electronicTextId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`content/electronicTexts/${args.electronicTextId}?`, null, req);
  }
};
export {deleteElectronicTextByIdUpdated};


const updateElectronicText = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateElectronicText method',
  args:{electronicTextToBeUpdated: {type: ElectronicTextInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`content/electronicTexts/${args.nullVal}?`, args.electronicTextToBeUpdated, req);
  }
};
export {updateElectronicText};
