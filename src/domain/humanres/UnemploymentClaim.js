
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

import {EmploymentType} from '../humanres/Employment.js';


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
      resolve: (unemploymentClaim, args, {loaders}) => loaders.ofbiz.load(`humanres/employments/find?roleTypeIdFrom=${unemploymentClaim.roleTypeIdFrom}`)
    },
    unemploymentClaimDate: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {UnemploymentClaimType};
    




const UnemploymentClaimInputType = new GraphQLInputObjectType({
  name: 'UnemploymentClaimInputType',
  description: 'input type for UnemploymentClaim',

  fields: () => ({
    description: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    partyIdFrom: {type: GraphQLString},
    partyIdTo: {type: GraphQLString},
    roleTypeIdFrom: {type: GraphQLString},
    roleTypeIdTo: {type: GraphQLString},
    statusId: {type: GraphQLString},
    thruDate: {type: GraphQLString},
    unemploymentClaimDate: {type: GraphQLString},
    unemploymentClaimId: {type: GraphQLString}
  })
});

export {UnemploymentClaimInputType};
    