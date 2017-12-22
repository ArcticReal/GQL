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
import {ElectronicTextResponseType} from '../../content/ElectronicText/ElectronicTextResponseType.js';
import {ElectronicTextInputType} from '../../content/ElectronicText/ElectronicTextInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createElectronicText = {
  type: ElectronicTextResponseType,
  description: 'mutation for ofbiz createElectronicText method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`content/electronicTexts/add?`, null, req);
  }
};
export {createElectronicText};


const deleteElectronicTextByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteElectronicTextByIdUpdated method',
  args:{electronicTextId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`content/electronicTexts/${args.electronicTextId}?`, null, req);
  }
};
export {deleteElectronicTextByIdUpdated};


const updateElectronicText = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateElectronicText method',
  args:{electronicTextToBeUpdated: {type: ElectronicTextInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`content/electronicTexts/${args.nullVal}?`, args.electronicTextToBeUpdated, req);
  }
};
export {updateElectronicText};
