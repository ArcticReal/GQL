
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

import {TrackingCodeType} from '../marketing/TrackingCode.js';


const TrackingCodeVisitType = new GraphQLObjectType({
  name: 'TrackingCodeVisitType',
  description: 'Type for TrackingCodeVisit in marketing',

  fields: () => ({
    trackingCode: {
      type: TrackingCodeType,
      args : {trackingCodeId: {type: GraphQLString}},
      resolve: (trackingCodeVisit, args, {loaders}) => loaders.ofbiz.load(`trackingCodes/find?trackingCodeId=${trackingCodeVisit.trackingCodeId}`)
    },
    fromDate: {type: GraphQLString},
    visitId: {type: GraphQLString},
    sourceEnumId: {type: GraphQLString}
  })
});

export {TrackingCodeVisitType};
    




const TrackingCodeVisitInputType = new GraphQLInputObjectType({
  name: 'TrackingCodeVisitInputType',
  description: 'input type for TrackingCodeVisit in marketing',

  fields: () => ({
    trackingCodeId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    visitId: {type: GraphQLString},
    sourceEnumId: {type: GraphQLString}
  })
});

export {TrackingCodeVisitInputType};
    