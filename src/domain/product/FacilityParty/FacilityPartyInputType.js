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

const FacilityPartyInputType = new GraphQLInputObjectType({
  name: 'FacilityPartyInputType',
  description: 'input type for FacilityParty',

  fields: () => ({
    facilityId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    partyId: {type: GraphQLString},
    roleTypeId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {FacilityPartyInputType};
    