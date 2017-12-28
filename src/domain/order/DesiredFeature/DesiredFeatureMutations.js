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
import {DesiredFeatureInputType} from '../../order/DesiredFeature/DesiredFeatureInputType.js';
import {DesiredFeatureResponseType} from '../../order/DesiredFeature/DesiredFeatureResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createDesiredFeature = {
  type: DesiredFeatureResponseType,
  description: 'mutation for ofbiz createDesiredFeature method',
  args:{desiredFeatureToBeAdded: {type: DesiredFeatureInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/desiredFeatures/add?`, args.desiredFeatureToBeAdded, req);
  }
};
export {createDesiredFeature};


const updateDesiredFeature = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateDesiredFeature method',
  args:{desiredFeatureToBeUpdated: {type: DesiredFeatureInputType},desiredFeatureId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/desiredFeatures/${args.desiredFeatureId}?`, args.desiredFeatureToBeUpdated, req);
  }
};
export {updateDesiredFeature};


const deleteDesiredFeatureByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteDesiredFeatureByIdUpdated method',
  args:{desiredFeatureId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/desiredFeatures/${args.desiredFeatureId}?`, null, req);
  }
};
export {deleteDesiredFeatureByIdUpdated};
