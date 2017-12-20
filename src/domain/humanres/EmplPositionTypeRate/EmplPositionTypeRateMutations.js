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
import {EmplPositionTypeRateInputType} from '../../humanres/EmplPositionTypeRate/EmplPositionTypeRateInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createEmplPositionTypeRate = {
  type: ResopnseType,
  description: 'mutation for ofbiz createEmplPositionTypeRate method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`humanres/emplPosition/emplPositionTypeRates/add?`, null, req);
  }
};
export {createEmplPositionTypeRate};


const deleteEmplPositionTypeRateByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteEmplPositionTypeRateByIdUpdated method',
  args:{emplPositionTypeRateId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`humanres/emplPosition/emplPositionTypeRates/${args.emplPositionTypeRateId}?`, null, req);
  }
};
export {deleteEmplPositionTypeRateByIdUpdated};


const updateEmplPositionTypeRate = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateEmplPositionTypeRate method',
  args:{emplPositionTypeRateToBeUpdated: {type: EmplPositionTypeRateInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`humanres/emplPosition/emplPositionTypeRates/${args.nullVal}?`, args.emplPositionTypeRateToBeUpdated, req);
  }
};
export {updateEmplPositionTypeRate};
