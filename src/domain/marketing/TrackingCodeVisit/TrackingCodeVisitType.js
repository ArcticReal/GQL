
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

import {TrackingCodeType} from '../../marketing/TrackingCode/TrackingCodeType.js';


const TrackingCodeVisitType = new GraphQLObjectType({
  name: 'TrackingCodeVisitType',
  description: 'Type for TrackingCodeVisit in marketing',

  fields: () => ({
    trackingCode: {
      type: TrackingCodeType,
      args : {trackingCodeId: {type: GraphQLString}},
      resolve: (trackingCodeVisit, args, {loaders}) => loaders.ofbiz.load(`marketing/trackingCodes/find?trackingCodeId=${trackingCodeVisit.trackingCodeId}`)
    },
    fromDate: {type: GraphQLString},
    visitId: {type: GraphQLString},
    sourceEnumId: {type: GraphQLString}
  })
});

export {TrackingCodeVisitType};
    