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
import {TelecomNumberInputType} from '../../party/TelecomNumber/TelecomNumberInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createTelecomNumber = {
  type: ResopnseType,
  description: 'mutation for ofbiz createTelecomNumber method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/telecomNumbers/add?`, null, req);
  }
};
export {createTelecomNumber};


const updateTelecomNumber = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateTelecomNumber method',
  args:{telecomNumberToBeUpdated: {type: TelecomNumberInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`party/telecomNumbers/${args.nullVal}?`, args.telecomNumberToBeUpdated, req);
  }
};
export {updateTelecomNumber};


const deleteTelecomNumberByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteTelecomNumberByIdUpdated method',
  args:{telecomNumberId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`party/telecomNumbers/${args.telecomNumberId}?`, null, req);
  }
};
export {deleteTelecomNumberByIdUpdated};
