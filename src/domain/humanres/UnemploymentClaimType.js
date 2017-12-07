
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {EmploymentType} from '../humanres/EmploymentType.js';


const UnemploymentClaimType = new GraphQLObjectType({
  name: 'UnemploymentClaimType',
  description: 'Type for UnemploymentClaim in humanres',

  fields: () => ({
    roleTypeIdTo: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    unemploymentClaimId: {type: GraphQLString},
    partyIdFrom: {type: GraphQLString},
    statusId: {type: GraphQLString},
    description: {type: GraphQLString},
    partyIdTo: {type: GraphQLString},
    roleTypeFrom: {
      type: EmploymentType,
      args : {roleTypeIdFrom: {type: GraphQLString}},
      resolve: (unemploymentClaim, args, {loaders}) => loaders.ofbiz.load(`employments/find?roleTypeIdFrom=${unemploymentClaim.roleTypeIdFrom}`)
    },
    unemploymentClaimDate: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {UnemploymentClaimType};
    